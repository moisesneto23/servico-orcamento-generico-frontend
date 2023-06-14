import ItemProdutoDimencaoDto from '@/Model/Produtos/ItemProdutoDimencaoDto';
import CategoriaProdutoModel from '@/Model/Produtos/CategoriaProdutoDto';
import ProdutoModel from '@/Model/Produtos/ProdutoDto';


export class ProdutoState {
  public itensProdutoDimencao?: ItemProdutoDimencaoDto[];
  public categoriasProduto?: CategoriaProdutoModel[] ;
  public produtos?: ProdutoModel[];
}

export const state: ProdutoState = {
  itensProdutoDimencao: [],
  categoriasProduto: [],
  produtos: [],
};
