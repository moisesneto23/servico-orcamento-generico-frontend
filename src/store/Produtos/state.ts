import ItemProdutoDimencaoDto from '@/Model/Produtos/ItemProdutoDimencaoDto';
import {CategoriaProdutoDto} from '@/Model/Produtos/CategoriaProdutoDto';
import ProdutoModel from '@/Model/Produtos/ProdutoDto';


export class ProdutoState {
  public itensProdutoDimencao?: ItemProdutoDimencaoDto[];
  public categoriasProduto?: CategoriaProdutoDto[] ;
  public produtos?: ProdutoModel[];
  public produtosComItensCadastrados?: ProdutoModel[];
}

export const state: ProdutoState = {
  itensProdutoDimencao: [],
  categoriasProduto: [],
  produtos: [],
  produtosComItensCadastrados: [],
};
