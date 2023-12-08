import { AppHttpAxios } from '@/axios/AppHttpAxios';
import PedidoDto from "@/Model/Pedido/PedidoDto";
import { Inject } from "typescript-ioc";

export default class PedidoService {
    
    @Inject
private $http!: AppHttpAxios;
private idEmpresa = this.pegaIdEmpresa();
private pegaIdEmpresa(): number{
    let id = localStorage.getItem('businessId') || '0';
    return parseInt(id);
}




    public async obterTodosPedidos(): Promise<PedidoDto[]> {
        const result = await this.$http.get(`Pedido/${this.idEmpresa}`);
        return result.data;
    }


    public async salvarPedido(Pedido: PedidoDto): Promise<any> {
        const result = await this.$http.post(`Pedido/${this.idEmpresa}`, Pedido);
    }


    public async editarPedido(Pedido: PedidoDto): Promise<PedidoDto> {
        const result = await this.$http.patch(`Pedido/${this.idEmpresa}`, Pedido);
        return result.data;
    }

    public async delete(id: any) : Promise<any>{
        const url =`Pedido/${id}`;
        await this.$http.delete(url);
    }

    public async obterTodosPedidosPorCategoria(idCategoria: number) {
        const result = await this.$http.get(`Pedido/${this.idEmpresa}/Categorias/${idCategoria}`);
        return result.data;
      }
};