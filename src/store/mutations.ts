import  InformacoesEmpresa from '@/Model/InformacoesEmpresa';
import { MutationTree } from 'vuex';
import { GlobalState } from './state';

export enum GlobalMutationTypes {
  SET_FAZER_LOGIN = 'SET_FAZER_LOGIN',
  ATIVAR_CARREGAMENTO = "ATIVAR_CARREGAMENTO",
  DESATIVAR_CARREGAMENTO = "DESATIVAR_CARREGAMENTO",
}

const mutations: MutationTree<GlobalState> = {

  [GlobalMutationTypes.SET_FAZER_LOGIN](state: GlobalState, informacoesEmpresa: InformacoesEmpresa) {
    state.informacoesEmpresa = informacoesEmpresa;
  },

  [GlobalMutationTypes.ATIVAR_CARREGAMENTO](state: GlobalState) {
    state.carregamento = true;
  },


[GlobalMutationTypes.DESATIVAR_CARREGAMENTO](state: GlobalState) {
  state.carregamento = false;
},

};

export default mutations;
