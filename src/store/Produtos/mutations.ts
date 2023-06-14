
import CategoriaProdutoModel from '@/Model/Produtos/CategoriaProdutoDto';
import ItemProdutoDimencaoDto from '@/Model/Produtos/ItemProdutoDimencaoDto';
import ProdutoModel from '@/Model/Produtos/ProdutoDto';
import TipoProdutoModel  from '@/Model/Produtos/TipoProdutoModel';
import { MutationTree } from 'vuex';
import { ProdutoState } from './state';



export enum ProdutosMutationTypes {
  SET_CATEGORIAS_PRODUTO = 'SET_CATEGORIAS_PRODUTO',
  SET_TIPO_PRODUTO = 'SET_TIPO_PRODUTO',
  SET_ITENS_PRODUTO = 'SET_ITENS_PRODUTO',
  SET_PRODUTOS = 'SET_PRODUTOS',
}

const mutations: MutationTree<ProdutoState> = {
  [ProdutosMutationTypes.SET_CATEGORIAS_PRODUTO](state: ProdutoState, categoriasProduto: CategoriaProdutoModel[]) {
    state.categoriasProduto =categoriasProduto;
  },
  // [ProdutosMutationTypes.SET_TIPO_PRODUTO](state: ProdutoState, tiposProduto: TipoProdutoModel[]) {
  //   state.tiposProduto = tiposProduto;
  // },
  [ProdutosMutationTypes.SET_ITENS_PRODUTO](state: ProdutoState, itensProduto: ItemProdutoDimencaoDto[]) {
    state.itensProdutoDimencao =itensProduto;
  },
  [ProdutosMutationTypes.SET_PRODUTOS](state: ProdutoState, produtos: ProdutoModel[]) {
    state.produtos =produtos;
  },
};


export default mutations;
