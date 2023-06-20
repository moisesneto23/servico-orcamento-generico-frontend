import { AppHttpAxios } from '@/axios/AppHttpAxios';
import ItemModel from "@/Model/Itens/ItemDto";
import { Inject } from "typescript-ioc";

export default class ItemService {
   

    @Inject
    private $http!: AppHttpAxios;
    private idEmpresa = this.pegaIdEmpresa();
    private pegaIdEmpresa(): number{
        let id = localStorage.getItem('businessId') || '0';
        return parseInt(id);
    }

    public async obterTodosItens(): Promise<ItemModel[]> {

        const result = await this.$http.get(`Item/${this.idEmpresa}`);
        return result.data;
    }

    public async salvarItem(Item: ItemModel): Promise<any> {
        Item.empresaId = this.idEmpresa;
        const result = await this.$http.post(`Item`, Item);
    }

    public async editarItem(Item: ItemModel): Promise<ItemModel> {
        const result = await this.$http.patch(`Item`, Item);
        return result.data;
    }
    public async delete(id: any) : Promise<any>{
        const url =`Item/${id}`;
        await this.$http.delete(url);
    }
}