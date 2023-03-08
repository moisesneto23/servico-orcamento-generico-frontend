
import  { AppHttpAxios }  from '@/axios/AppHttpAxios';
import { Inject } from 'typescript-ioc';
import store from '@/store';
import  TipoProdutoModel  from '@/Model/Produtos/TipoProdutoModel';

export class TipoProdutoRepository {
    
   
    @Inject
    private $http!: AppHttpAxios;
    private idEmpresa = this.pegaIdEmpresa();
    private pegaIdEmpresa(): number{
        let id = localStorage.getItem('businessId') || '0';
        return parseInt(id);
    }
   
    public async obterTodosTiposProduto(): Promise<TipoProdutoModel[]> {
        const result = await this.$http.get(`TipoProdutoModel/${this.idEmpresa}`);
        return result.data;
    }

    public async salvarTipoProduto(TipoProduto: TipoProdutoModel): Promise<any> {
        const result = await this.$http.post('TipoProdutoModel', TipoProduto);
    }

    public async editarTipoProduto(TipoProduto: TipoProdutoModel): Promise<TipoProdutoModel> {
        const result = await this.$http.patch('TipoProdutoModel', TipoProduto);
        return result.data;
    }
    public async delete(id: any) : Promise<any>{
        const url =`TipoProduto/${id}`;
        await this.$http.delete(url);
    }
}