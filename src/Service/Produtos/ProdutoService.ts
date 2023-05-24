
import ProdutoDto from '@/Model/Produtos/ProdutoDto';
import { ProdutoRepository } from '@/Repository/Produtos/ProdutoRepository';
import { Inject } from 'typescript-ioc';

export default class ProdutoService {
    
    @Inject
    private _produto!: ProdutoRepository;

    public async obterTodosProdutos(): Promise<ProdutoDto[]> {
        return await this._produto.obterTodosProdutos();
    }

    public async salvarProduto(Produto:ProdutoDto): Promise<any> {
         await this._produto.salvarProduto(Produto);
    }

    public async editarProduto(Produto:ProdutoDto): Promise<ProdutoDto> {
       return await this._produto.editarProduto(Produto);
    }
    public async delete(id: number): Promise<any>{
        await this._produto.delete(id);
    }
};