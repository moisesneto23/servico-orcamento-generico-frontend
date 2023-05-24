
import  { AppHttpAxios }  from '@/axios/AppHttpAxios';
import { Inject } from 'typescript-ioc';
import store from '@/store';
import ProdutoDto from '@/Model/Produtos/ProdutoDto';
export class ProdutoRepository {
    
   
    @Inject
    private $http!: AppHttpAxios;
    private idEmpresa = this.pegaIdEmpresa();
    private pegaIdEmpresa(): number{
        let id = localStorage.getItem('businessId') || '0';
        return parseInt(id);
    }
   
    public async obterTodosProdutos(): Promise<ProdutoDto[]> {
        const result = await this.$http.get(`Produto/${this.idEmpresa}`);
        return result.data;
    }

    public async salvarProduto(produto: ProdutoDto): Promise<any> {
        const result = await this.$http.post(`Produto/${this.idEmpresa}`, produto);
    }

    public async editarProduto(produto: ProdutoDto): Promise<ProdutoDto> {
        const result = await this.$http.patch(`Produto/${this.idEmpresa}`, produto);
        return result.data;
    }
    public async delete(id: any) : Promise<any>{
        const url =`Produto/${id}`;
        await this.$http.delete(url);
    }
}