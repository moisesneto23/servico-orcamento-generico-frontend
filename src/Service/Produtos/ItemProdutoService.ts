
import { ItemProdutoModel } from '@/Model/Produtos/ItemProdutoModel';
import { ItemProdutoRepository } from '@/Repository/Produtos/ItemProdutoRepository';
import { Inject } from 'typescript-ioc';

export default class ItemProdutoService {
    
    @Inject
    private _itemRepository!: ItemProdutoRepository;

    public async obterTodosItensProduto(): Promise<ItemProdutoModel[]> {
        return await this._itemRepository.obterTodosItensProduto();
    }

    public async salvarProduto(Produto:ItemProdutoModel): Promise<any> {
         await this._itemRepository.salvarItemProduto(Produto);
    }

    public async editarProduto(Produto:ItemProdutoModel): Promise<ItemProdutoModel> {
       return await this._itemRepository.editarItemProduto(Produto);
    }
    public async delete(id: number): Promise<any>{
        await this._itemRepository.delete(id);
    }
};