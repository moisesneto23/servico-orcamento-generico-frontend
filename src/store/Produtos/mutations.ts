
import {CategoriaProdutoDto} from '@/Model/Produtos/CategoriaProdutoDto';
import ItemProdutoDimencaoDto from '@/Model/Produtos/ItemProdutoDimencaoDto';
import ProdutoModel from '@/Model/Produtos/ProdutoDto';
import { MutationTree } from 'vuex';
import { ProdutoState } from './state';



export enum ProdutosMutationTypes {
  SET_CATEGORIAS_PRODUTO = 'SET_CATEGORIAS_PRODUTO',
  SET_TIPO_PRODUTO = 'SET_TIPO_PRODUTO',
  SET_ITENS_PRODUTO = 'SET_ITENS_PRODUTO',
  SET_PRODUTOS = 'SET_PRODUTOS',
  SET_REMOVE_PRODUTO = 'SET_REMOVE_PRODUTO',
  SET_PRODUTOS_COM_ITENS_CADASTRADOS = 'SET_PRODUTOS_COM_ITENS_CADASTRADOS'
}

const mutations: MutationTree<ProdutoState> = {
  [ProdutosMutationTypes.SET_CATEGORIAS_PRODUTO](state: ProdutoState, categoriasProduto: CategoriaProdutoDto[]) {
    state.categoriasProduto =categoriasProduto;
  },

  [ProdutosMutationTypes.SET_ITENS_PRODUTO](state: ProdutoState, itensProduto: ItemProdutoDimencaoDto[]) {
    state.itensProdutoDimencao =itensProduto;
  },
  [ProdutosMutationTypes.SET_PRODUTOS](state: ProdutoState, produtos: ProdutoModel[]) {
    state.produtos =produtos;
  },

  [ProdutosMutationTypes.SET_REMOVE_PRODUTO](state: ProdutoState, id: number) {
    state.produtos = state.produtos?.filter(x=> x.id !==id);
  },

  [ProdutosMutationTypes.SET_PRODUTOS_COM_ITENS_CADASTRADOS](state: ProdutoState, produtos: ProdutoModel[]) {
    state.produtosComItensCadastrados = produtos;
  },
};


export default mutations;
