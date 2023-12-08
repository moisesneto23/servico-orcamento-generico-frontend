import { RootState } from '@/store';
import { PedidoState } from "./state";
import { ActionTree } from 'vuex';
import PedidoDto from '@/Model/Pedido/PedidoDto';
import { PedidoMutationTypes } from './mutations';
import PedidoService from '@/Service/Pedidos/PedidoService';
import { Container } from 'typescript-ioc';
import ClienteService from '@/Service/Pedidos/ClienteService';
import ClienteDto from '@/Model/ClienteDto';

export enum PedidoActionTypes {

    OBTER_PEDIDOS = 'OBTER_PEDIDOS',
    SALVAR_PEDIDO = 'SALVAR_PEDIDO',
    EDITAR_PEDIDO = 'EDITAR_PEDIDO',
    REMOVER_PEDIDO = 'REMOVER_PEDIDO',

    OBTER_CLIENTES = 'OBTER_CLIENTES',
    SALVAR_CLIENTE = 'SALVAR_CLIENTE',
    EDITAR_CLIENTE = 'EDITAR_CLIENTE',
    REMOVER_CLIENTE = 'REMOVER_CLIENTE',

  }
  
  
  
  const actions: ActionTree<PedidoState, RootState> = {
  
    async [PedidoActionTypes.OBTER_PEDIDOS]({ commit }) {
      const service = (Container.get(PedidoService) as PedidoService);
      const PEDIDOS = await service.obterTodosPedidos();
      commit(PedidoMutationTypes.SET_PEDIDOS, PEDIDOS);
    },
  
    async [PedidoActionTypes.SALVAR_PEDIDO]({ commit }, PEDIDO: PedidoDto) {
      const service = (Container.get(PedidoService) as PedidoService);
      await service.salvarPedido(PEDIDO);
      const PedidoS = await service.obterTodosPedidos();
      commit(PedidoMutationTypes.SET_PEDIDOS, PedidoS);
    },
  
    async [PedidoActionTypes.EDITAR_PEDIDO]({ commit }, Pedido: PedidoDto) {
      const service = (Container.get(PedidoService) as PedidoService);
      await service.editarPedido(Pedido);
      const PedidoS = await service.obterTodosPedidos();
      commit(PedidoMutationTypes.SET_PEDIDOS, PedidoS);
    },
  
    async [PedidoActionTypes.REMOVER_PEDIDO]({ commit }, id: number) {
      const service = (Container.get(PedidoService) as PedidoService);
      await service.delete(id);
      const PedidoS = await service.obterTodosPedidos();
      commit(PedidoMutationTypes.SET_PEDIDOS, PedidoS);
    },

    async [PedidoActionTypes.OBTER_CLIENTES]({ commit }) {
      const service = (Container.get(ClienteService) as ClienteService);
      const PEDIDOS = await service.obterTodosClientes();
      commit(PedidoMutationTypes.SET_PEDIDOS, PEDIDOS);
    },
  
    async [PedidoActionTypes.SALVAR_CLIENTE]({ commit }, PEDIDO: ClienteDto) {
      const service = (Container.get(ClienteService) as ClienteService);
      await service.salvarCliente(PEDIDO);
      const PedidoS = await service.obterTodosClientes();
      commit(PedidoMutationTypes.SET_PEDIDOS, PedidoS);
    },
  
    async [PedidoActionTypes.EDITAR_CLIENTE]({ commit }, Pedido: ClienteDto) {
      const service = (Container.get(ClienteService) as ClienteService);
      await service.editarCliente(Pedido);
      const PedidoS = await service.obterTodosClientes();
      commit(PedidoMutationTypes.SET_PEDIDOS, PedidoS);
    },
  
    async [PedidoActionTypes.REMOVER_CLIENTE]({ commit }, id: number) {
      const service = (Container.get(ClienteService) as ClienteService);
      await service.delete(id);
      const PedidoS = await service.obterTodosClientes();
      commit(PedidoMutationTypes.SET_PEDIDOS, PedidoS);
    },
  
  
    
  };
  
  export default actions;