import { DimencaoDto } from './../../Model/Itens/DimencaoDto';
import ItemModel from '@/Model/Itens/ItemDto';
import CategoriaModel from '@/Model/Itens/CategoriaDto';
import TipoModel from '@/Model/Itens/TipoModel';
import { MutationTree } from 'vuex';
import { ItemState } from './state';



export enum ItensMutationTypes {
  SET_CATEGORIAS_ITEM = 'SET_CATEGORIAS_ITEM',
  SET_CATEGORIA_ITEM = 'SET_CATEGORIA_ITEM',
  SET_TIPOS_ITEM = 'SET_TIPOS_ITEM',
  SET_ITEMS = 'SET_ITEMS',
  SET_DIMENCOES = 'SET_DIMENCOES',
}

const mutations: MutationTree<ItemState> = {
  [ItensMutationTypes.SET_CATEGORIAS_ITEM](state: ItemState, categoria: CategoriaModel[]) {
    state.categorias =categoria;
  },
  [ItensMutationTypes.SET_TIPOS_ITEM](state: ItemState, tipo: TipoModel[]) {
    state.tipos = tipo
  },
  [ItensMutationTypes.SET_ITEMS](state: ItemState, itens: ItemModel[]) {
    state.itens = itens;
  },
  [ItensMutationTypes.SET_DIMENCOES](state: ItemState, dimencoes: DimencaoDto[]) {
    state.dimencoes = dimencoes;
  },
};


export default mutations;
