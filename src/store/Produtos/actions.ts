import CategoriaModel  from '@/Model/Itens/CategoriaDto';
import { ActionTree } from 'vuex';
import { ProdutoState } from './state';
import { RootState } from '@/store';
import  {ProdutosMutationTypes}  from './mutations';
import { Container, Inject } from 'typescript-ioc';
import ItemProdutoDimencaoService from '@/Service/Produtos/ItemProdutoDimencaoService';
import  ItemProdutoDimencaoDto  from '@/Model/Produtos/ItemProdutoDimencaoDto';
import ProdutoService from '@/Service/Produtos/ProdutoService';
import  ProdutoModel  from '@/Model/Produtos/ProdutoDto';
import  {CategoriaProdutoDto}  from '@/Model/Produtos/CategoriaProdutoDto';
import CategoriaProdutoService from '@/Service/Produtos/CategoriaProdutoService';
import TipoProdutoService from '@/Service/Produtos/TipoProdutoService';
import TipoProdutoModel  from '@/Model/Produtos/TipoProdutoModel';



export enum ProdutosActionTypes {
  OBTER_CATEGORIAS_PRODUTO = 'OBTER_CATEGORIAS_PRODUTO',
  SALVAR_CATEGORIA_PRODUTO = 'SALVAR_CATEGORIA_PRODUTO',
  EDITAR_CATEGORIA_PRODUTO = 'EDITAR_CATEGORIA_PRODUTO',
  REMOVER_CATEGORIA_PRODUTO = 'REMOVER_CATEGORIA_PRODUTO',

  OBTER_ITEMS_PRODUTO_DIMENCAO = 'OBTER_ITEMS_PRODUTO_DIMENCAO',
  SALVAR_ITEM_PRODUTO_DIMENCAO = 'SALVAR_ITEM_PRODUTO_DIMENCAO',
  EDITAR_ITEM_PRODUTO_DIMENCAO = 'EDITAR_ITEM_PRODUTO_DIMENCAO',
  REMOVER_ITEM_PRODUTO_DIMENCAO = 'REMOVER_ITEM_PRODUTO_DIMENCAO',
  OBTER_ITENS_PRODUTO_POR_PRODUTO = 'OBTER_ITENS_PRODUTO_POR_PRODUTO',

  OBTER_PRODUTOS = 'OBTER_PRODUTOS',
  SALVAR_PRODUTO = 'SALVAR_PRODUTO',
  EDITAR_PRODUTO = 'EDITAR_PRODUTO',
  REMOVER_PRODUTO = 'REMOVER_PRODUTO',
  REMOVER_PRODUTO_STORE = 'REMOVER_PRODUTO_STORE',
  OBTER_PRODUTOS_POR_CATEGORIA = 'OBTER_PRODUTOS_POR_CATEGORIA',
  OBTER_PRODUTOS_COM_ITENS_CADASTRADOS ='OBTER_PRODUTOS_COM_ITENS_CADASTRADOS',
}


const actions: ActionTree<ProdutoState, RootState> = {

  async [ProdutosActionTypes.OBTER_CATEGORIAS_PRODUTO]({ commit }) {
    const service = (Container.get(CategoriaProdutoService) as CategoriaProdutoService);
    const categoriasProduto = await service.obterTodasCategoriasProduto();
    commit(ProdutosMutationTypes.SET_CATEGORIAS_PRODUTO, categoriasProduto);
  },

  async [ProdutosActionTypes.SALVAR_CATEGORIA_PRODUTO]({ commit }, categoria: CategoriaProdutoDto ) {
    const service = (Container.get(CategoriaProdutoService) as CategoriaProdutoService);
    await service.salvarCategoriaProduto(categoria);
    const categoriasProduto = await service.obterTodasCategoriasProduto();
    commit(ProdutosMutationTypes.SET_CATEGORIAS_PRODUTO, categoriasProduto);
  },

  async [ProdutosActionTypes.EDITAR_CATEGORIA_PRODUTO]({ commit }, categoria: CategoriaProdutoDto ) {
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





  async [ProdutosActionTypes.OBTER_ITEMS_PRODUTO_DIMENCAO]({ commit }) {
    const service = (Container.get(ItemProdutoDimencaoService) as ItemProdutoDimencaoService);
    const itensProduto = await service.obterTodosItensProduto();
    commit(ProdutosMutationTypes.SET_ITENS_PRODUTO, itensProduto);
  },



  async [ProdutosActionTypes.SALVAR_ITEM_PRODUTO_DIMENCAO]({ commit }, produto: ItemProdutoDimencaoDto) {
    const service = (Container.get(ItemProdutoDimencaoService) as ItemProdutoDimencaoService);
    await service.salvarItemProduto(produto);
    const itensProduto = await service.obterItensCadastradoPorProduto(produto.produtoId);
    commit(ProdutosMutationTypes.SET_ITENS_PRODUTO, itensProduto);
  },

  async [ProdutosActionTypes.EDITAR_ITEM_PRODUTO_DIMENCAO]({ commit }, produto: ItemProdutoDimencaoDto) {
    const service = (Container.get(ItemProdutoDimencaoService) as ItemProdutoDimencaoService);
    await service.editarItemProduto(produto);
    const itensProduto = await service.obterItensCadastradoPorProduto(produto.produtoId);
    commit(ProdutosMutationTypes.SET_ITENS_PRODUTO, itensProduto);
  },

  async [ProdutosActionTypes.REMOVER_ITEM_PRODUTO_DIMENCAO]({ commit }, id: number) {
    const service = (Container.get(ItemProdutoDimencaoService) as ItemProdutoDimencaoService);
    await service.delete(id);
    const itensProduto = await service.obterTodosItensProduto();
    commit(ProdutosMutationTypes.SET_ITENS_PRODUTO, itensProduto);
  },

  async [ProdutosActionTypes.OBTER_ITENS_PRODUTO_POR_PRODUTO]({ commit }, produtoId: number) {
    const service = (Container.get(ItemProdutoDimencaoService) as ItemProdutoDimencaoService);
    const itensProduto = await service.obterItensCadastradoPorProduto(produtoId);
    commit(ProdutosMutationTypes.SET_ITENS_PRODUTO, itensProduto);
  },





  async [ProdutosActionTypes.OBTER_PRODUTOS]({ commit }) {
    const service = (Container.get(ProdutoService) as ProdutoService);
    const produtos = await service.obterTodosProdutos();
    commit(ProdutosMutationTypes.SET_PRODUTOS, produtos);
  },

  async [ProdutosActionTypes.OBTER_PRODUTOS_POR_CATEGORIA]({ commit }, idCategoria: number) {
    const service = (Container.get(ProdutoService) as ProdutoService);
    const produtos = await service.obterTodosProdutosPorCategoria(idCategoria);
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

  [ProdutosActionTypes.REMOVER_PRODUTO_STORE]({ commit }, id: number) {
    commit(ProdutosMutationTypes.SET_REMOVE_PRODUTO, id);
  },

  async [ProdutosActionTypes.OBTER_PRODUTOS_COM_ITENS_CADASTRADOS]({ commit }) {
    const service = (Container.get(ProdutoService) as ProdutoService);
    const PEDIDOS = await service.obterProdutosComItensCadastrados();
    commit(ProdutosMutationTypes.SET_PRODUTOS_COM_ITENS_CADASTRADOS, PEDIDOS);
  },
};

export default actions;
