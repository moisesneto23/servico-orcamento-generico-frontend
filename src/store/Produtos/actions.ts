import CategoriaModel  from '@/Model/Itens/CategoriaDto';
import { ActionTree } from 'vuex';
import { ProdutoState } from './state';
import { RootState } from '@/store';
import  {ProdutosMutationTypes}  from './mutations';
import { Container, Inject } from 'typescript-ioc';
import ItemProdutoService from '@/Service/Produtos/ItemProdutoService';
import  ItemProdutoModel  from '@/Model/Produtos/ProdutoItemDimencaoDto';
import ProdutoService from '@/Service/Produtos/ProdutoService';
import  ProdutoModel  from '@/Model/Produtos/ProdutoDto';
import  CategoriaProdutoModel  from '@/Model/Produtos/CategoriaProdutoDto';
import CategoriaProdutoService from '@/Service/Produtos/CategoriaProdutoService';
import TipoProdutoService from '@/Service/Produtos/TipoProdutoService';
import TipoProdutoModel  from '@/Model/Produtos/TipoProdutoModel';



export enum ProdutosActionTypes {
  OBTER_CATEGORIAS_PRODUTO = 'OBTER_CATEGORIAS_PRODUTO',
  SALVAR_CATEGORIA_PRODUTO = 'SALVAR_CATEGORIA_PRODUTO',
  EDITAR_CATEGORIA_PRODUTO = 'EDITAR_CATEGORIA_PRODUTO',
  REMOVER_CATEGORIA_PRODUTO = 'REMOVER_CATEGORIA_PRODUTO',

  OBTER_ITEMS_PRODUTO = 'OBTER_ITEMS_PRODUTO',
  SALVAR_ITEM_PRODUTO = 'SALVAR_ITEM_PRODUTO',
  EDITAR_ITEM_PRODUTO = 'EDITAR_ITEM_PRODUTO',
  REMOVER_ITEM_PRODUTO = 'REMOVER_ITEM_PRODUTO',

  OBTER_PRODUTOS = 'OBTER_PRODUTOS',
  SALVAR_PRODUTO = 'SALVAR_PRODUTO',
  EDITAR_PRODUTO = 'EDITAR_PRODUTO',
  REMOVER_PRODUTO = 'REMOVER_PRODUTO',
}


const actions: ActionTree<ProdutoState, RootState> = {

  async [ProdutosActionTypes.OBTER_CATEGORIAS_PRODUTO]({ commit }) {
    const service = (Container.get(CategoriaProdutoService) as CategoriaProdutoService);
    const categoriasProduto = await service.obterTodasCategoriasProduto();
    commit(ProdutosMutationTypes.SET_CATEGORIAS_PRODUTO, categoriasProduto);
  },

  async [ProdutosActionTypes.SALVAR_CATEGORIA_PRODUTO]({ commit }, categoria: CategoriaProdutoModel ) {
    const service = (Container.get(CategoriaProdutoService) as CategoriaProdutoService);
    await service.salvarCategoriaProduto(categoria);
    const categoriasProduto = await service.obterTodasCategoriasProduto();
    commit(ProdutosMutationTypes.SET_CATEGORIAS_PRODUTO, categoriasProduto);
  },

  async [ProdutosActionTypes.EDITAR_CATEGORIA_PRODUTO]({ commit }, categoria: CategoriaProdutoModel ) {
    const service = (Container.get(CategoriaProdutoService) as CategoriaProdutoService);
    await service.editarCategoriaProduto(categoria);
    const categoriasProduto = await service.obterTodasCategoriasProduto();
    commit(ProdutosMutationTypes.SET_CATEGORIAS_PRODUTO, categoriasProduto);
  },

  async [ProdutosActionTypes.REMOVER_CATEGORIA_PRODUTO]({ commit }, id: number ) {
    const service = (Container.get(CategoriaProdutoService) as CategoriaProdutoService);
    await service.delete(id);
    const categoriasProduto = await service.obterTodasCategoriasProduto();
    commit(ProdutosMutationTypes.SET_CATEGORIAS_PRODUTO, categoriasProduto);
  },





  async [ProdutosActionTypes.OBTER_ITEMS_PRODUTO]({ commit }) {
    const service = (Container.get(ItemProdutoService) as ItemProdutoService);
    const itensProduto = await service.obterTodosItensProduto();
    commit(ProdutosMutationTypes.SET_ITENS_PRODUTO, itensProduto);
  },

  async [ProdutosActionTypes.SALVAR_ITEM_PRODUTO]({ commit }, produto: ItemProdutoModel) {
    const service = (Container.get(ItemProdutoService) as ItemProdutoService);
    await service.salvarItemProduto(produto);
    const itensProduto = await service.obterTodosItensProduto();
    commit(ProdutosMutationTypes.SET_ITENS_PRODUTO, itensProduto);
  },

  async [ProdutosActionTypes.EDITAR_ITEM_PRODUTO]({ commit }, produto: ItemProdutoModel) {
    const service = (Container.get(ItemProdutoService) as ItemProdutoService);
    await service.editarItemProduto(produto);
    const itensProduto = await service.obterTodosItensProduto();
    commit(ProdutosMutationTypes.SET_ITENS_PRODUTO, itensProduto);
  },

  async [ProdutosActionTypes.REMOVER_ITEM_PRODUTO]({ commit }, id: number) {
    const service = (Container.get(ItemProdutoService) as ItemProdutoService);
    await service.delete(id);
    const itensProduto = await service.obterTodosItensProduto();
    commit(ProdutosMutationTypes.SET_ITENS_PRODUTO, itensProduto);
  },






  async [ProdutosActionTypes.OBTER_PRODUTOS]({ commit }) {
    const service = (Container.get(ProdutoService) as ProdutoService);
    const produtos = await service.obterTodosProdutos();
    commit(ProdutosMutationTypes.SET_PRODUTOS, produtos);
  },

  async [ProdutosActionTypes.SALVAR_PRODUTO]({ commit }, produto: ProdutoModel) {
    const service = (Container.get(ProdutoService) as ProdutoService);
    await service.salvarProduto(produto);
    const produtos = await service.obterTodosProdutos();
    commit(ProdutosMutationTypes.SET_PRODUTOS, produtos);
  },

  async [ProdutosActionTypes.EDITAR_PRODUTO]({ commit }, produto: ProdutoModel) {
    const service = (Container.get(ProdutoService) as ProdutoService);
    await service.editarProduto(produto);
    const produtos = await service.obterTodosProdutos();
    commit(ProdutosMutationTypes.SET_PRODUTOS, produtos);
  },

  async [ProdutosActionTypes.REMOVER_PRODUTO]({ commit }, id: number) {
    const service = (Container.get(ProdutoService) as ProdutoService);
    await service.delete(id);
    const produtos = await service.obterTodosProdutos();
    commit(ProdutosMutationTypes.SET_PRODUTOS, produtos);
  },
};

export default actions;
