import { Module } from 'vuex';
import { PedidoState, state } from './state';
import { RootState } from '@/store';
import mutations from './mutations';
import actions from './actions';
//import getters from './getters';


const Pedido: Module<PedidoState, RootState> = {
  actions,
  state,
  mutations,
  //getters,
  namespaced: true,
};

export default Pedido;