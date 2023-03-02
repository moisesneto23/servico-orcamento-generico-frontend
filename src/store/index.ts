import Vue from 'vue';
import Vuex from 'vuex';
import item from './Item/index';
import actions from './actions';
import {state} from './state';
import getters from './getters';
import mutations from './mutations';

export { StoreNamespaces } from '@/store/namespaces';

Vue.use(Vuex);

export class RootState {
}

const modules = {
item,
};

const store = new Vuex.Store({
  modules,
  actions,
  state,
  getters,
  mutations,
});

Object.assign(window, { $store: store });

export default store;