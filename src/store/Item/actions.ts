import CategoriaModel  from '@/Model/Itens/CategoriaDto';
import  ItemModel  from '@/Model/Itens/ItemDto';
import { ActionTree } from 'vuex';
import { ItemState } from './state';
import { RootState } from '@/store';
import {ItensMutationTypes} from './mutations';
import { Container, Inject } from 'typescript-ioc';
import  ItemService  from '@/Service/Itens/ItemService';



export enum ItensActionTypes {

  OBTER_ITENS = 'OBTER_ITENS',
  SALVAR_ITEM = 'SALVAR_ITEM',
  EDITAR_ITEM = 'EDITAR_ITEM',
  REMOVER_ITEM = 'REMOVER_ITEM',
}


const actions: ActionTree<ItemState, RootState> = {

  async [ItensActionTypes.OBTER_ITENS]({ commit }) {
    const service = (Container.get(ItemService) as ItemService);
    const itens = await service.obterTodosItens();
    commit(ItensMutationTypes.SET_ITEMS, itens);
  },

  async [ItensActionTypes.SALVAR_ITEM]({ commit }, item: ItemModel) {
    const service = (Container.get(ItemService) as ItemService);
    await service.salvarItem(item);
    const itens = await service.obterTodosItens();
    commit(ItensMutationTypes.SET_ITEMS, itens);
  },

  async [ItensActionTypes.EDITAR_ITEM]({ commit }, item: ItemModel) {
    const service = (Container.get(ItemService) as ItemService);
    await service.editarItem(item);
    const itens = await service.obterTodosItens();
    commit(ItensMutationTypes.SET_ITEMS, itens);
  },

  async [ItensActionTypes.REMOVER_ITEM]({ commit }, id: number) {
    const service = (Container.get(ItemService) as ItemService);
    await service.delete(id);
    const itens = await service.obterTodosItens();
    commit(ItensMutationTypes.SET_ITEMS, itens);
  },
};

export default actions;
