import { RootState } from '@/store';
import { PedidoState } from "./state";
import { ActionTree } from 'vuex';
import PedidoDto from '@/Model/Pedido/PedidoDto';
import { PedidoMutationTypes } from './mutations';
import PedidoService from '@/Service/Pedidos/PedidoService';
import { Container } from 'typescript-ioc';
import ClienteService from '@/Service/Pedidos/ClienteService';
import ClienteDto from '@/Model/ClienteDto';
import PedidoProdutoDto from '@/Model/Pedido/PedidoProdutoDto';

export enum PedidoActionTypes {

    OBTER_PEDIDOS = 'OBTER_PEDIDOS',
    SALVAR_PEDIDO = 'SALVAR_PEDIDO',
    EDITAR_PEDIDO = 'EDITAR_PEDIDO',
    REMOVER_PEDIDO = 'REMOVER_PEDIDO',

    OBTER_CLIENTES = 'OBTER_CLIENTES',
    SALVAR_CLIENTE = 'SALVAR_CLIENTE',
    EDITAR_CLIENTE = 'EDITAR_CLIENTE',
    REMOVER_CLIENTE = 'REMOVER_CLIENTE',

    SET_PEDIDO_PRODUTO = 'SET_PEDIDO_PRODUTO',

  }
  
  
  
  const actions: ActionTree<PedidoState, RootState> = {
  
    async [PedidoActionTypes.OBTER_PEDIDOS]({ commit }) {
      const service = (Container.get(PedidoService) as PedidoService);
      const PEDIDOS = await service.obterTodosPedidos();
      commit(PedidoMutationTypes.SET_PEDIDOS, PEDIDOS);
    },
  
    async [PedidoActionTypes.SALVAR_PEDIDO]({ commit }, PEDIDO: PedidoDto) {
      debugger
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
      const clientes = await service.obterTodosClientes();
      commit(PedidoMutationTypes.SET_CLIENTES, clientes);
    },
  
    async [PedidoActionTypes.SALVAR_CLIENTE]({ commit }, cliente: ClienteDto) {
      const service = (Container.get(ClienteService) as ClienteService);
      await service.salvarCliente(cliente);
      const PedidoS = await service.obterTodosClientes();
      commit(PedidoMutationTypes.SET_CLIENTES, PedidoS);
    },
  
    async [PedidoActionTypes.EDITAR_CLIENTE]({ commit }, cliente: ClienteDto) {
      const service = (Container.get(ClienteService) as ClienteService);
      await service.editarCliente(cliente);
      const clientes = await service.obterTodosClientes();
      commit(PedidoMutationTypes.SET_CLIENTES, clientes);
    },
  
    async [PedidoActionTypes.REMOVER_CLIENTE]({ commit }, id: number) {
      const service = (Container.get(ClienteService) as ClienteService);
      await service.delete(id);
      const PedidoS = await service.obterTodosClientes();
      commit(PedidoMutationTypes.SET_CLIENTES, PedidoS);
    },
  
    async [PedidoActionTypes.SET_PEDIDO_PRODUTO]({ commit }, pedidoProduto: PedidoProdutoDto) {
      commit(PedidoMutationTypes.SET_PEDIDO_PRODUTO, pedidoProduto);
    },
    
  };
  
  export default actions;