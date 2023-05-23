import ItemProdutoModel from '@/Model/Produtos/ProdutoItemDimencaoDto';
import TipoProdutoModel from '@/Model/Produtos/TipoProdutoModel';
import CategoriaProdutoModel from '@/Model/Produtos/CategoriaProdutoDto';
import ProdutoModel from '@/Model/Produtos/ProdutoDto';


export class ProdutoState {
  public itensProduto?: ItemProdutoModel[];
  public tiposProduto?: TipoProdutoModel[] ;
  public categoriasProduto?: CategoriaProdutoModel[] ;
  public produtos?: ProdutoModel[];
}

export const state: ProdutoState = {
  itensProduto: [],
  tiposProduto: [],
  categoriasProduto: [],
  produtos: [],
};
