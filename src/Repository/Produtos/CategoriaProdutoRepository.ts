
import  { AppHttpAxios }  from '@/axios/AppHttpAxios';
import { Inject } from 'typescript-ioc';
import store from '@/store';
import {CategoriaProdutoDto} from '@/Model/Produtos/CategoriaProdutoDto';
export class CategoriaProdutoRepository {
    
   
    @Inject
    private $http!: AppHttpAxios;
    private idEmpresa = this.pegaIdEmpresa();
    private pegaIdEmpresa(): number{
        let id = localStorage.getItem('businessId') || '0';
        return parseInt(id);
    }
   
    public async obterTodasCategoriasProduto(): Promise<CategoriaProdutoDto[]> {
        const result = await this.$http.get(`CategoriaProduto/${this.idEmpresa}`);
        return result.data;
    }

    public async salvarCategoriaProduto(categoria: CategoriaProdutoDto): Promise<any> {
        categoria.empresaId = this.idEmpresa;
        const result = await this.$http.post('CategoriaProduto', categoria);
    }

    public async editarCategoriaProduto(categoria: CategoriaProdutoDto): Promise<CategoriaProdutoDto> {
        const result = await this.$http.patch('CategoriaProduto', categoria);
        return result.data;
    }
    public async delete(id: any) : Promise<any>{
        const url =`CategoriaProduto/${id}`;
        await this.$http.delete(url);
    }
}