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
import PedidoProdutoService from '@/Service/Pedidos/PedidoProdutoService';

export enum PedidoActionTypes {

    OBTER_PEDIDOS = 'OBTER_PEDIDOS',
    SALVAR_PEDIDO = 'SALVAR_PEDIDO',
    EDITAR_PEDIDO = 'EDITAR_PEDIDO',
    REMOVER_PEDIDO = 'REMOVER_PEDIDO',
    SET_PEDIDO_STORE = 'SET_PEDIDO_STORE',
    PEDIDO_FINALIACAO= 'PEDIDO_FINALIACAO',

    OBTER_CLIENTES = 'OBTER_CLIENTES',
    SALVAR_CLIENTE = 'SALVAR_CLIENTE',
    EDITAR_CLIENTE = 'EDITAR_CLIENTE',
    REMOVER_CLIENTE = 'REMOVER_CLIENTE',
    ATUALIZAR_PEDIDO_PRODUTO_STORE = 'ATUALIZAR_PEDIDO_PRODUTO_STORE',
    SALVAR_PEDIDO_PRODUTO = 'SALVAR_PEDIDO_PRODUTO',
    REMOVER_PEDIDO_PRODUTO = 'REMOVER_PEDIDO_PRODUTO',
  }
  
  
  
  const actions: ActionTree<PedidoState, RootState> = {
  
    async [PedidoActionTypes.OBTER_PEDIDOS]({ commit }) {
      const service = (Container.get(PedidoService) as PedidoService);
      const PEDIDOS = await service.obterTodosPedidos();
      commit(PedidoMutationTypes.SET_PEDIDOS, PEDIDOS);
    },
  
    async [PedidoActionTypes.SALVAR_PEDIDO]({ commit }, PEDIDO: PedidoDto) {
      const service = (Container.get(PedidoService) as PedidoService);
      const obj = await service.salvarPedido(PEDIDO);
      commit(PedidoMutationTypes.SET_PEDIDO_SOLICITACAO, obj);
      return obj;
    },
  
    async [PedidoActionTypes.SET_PEDIDO_STORE]({ commit }, pedido: PedidoDto) {
      commit(PedidoMutationTypes.SET_PEDIDO_SOLICITACAO, pedido);
    },

    async [PedidoActionTypes.PEDIDO_FINALIACAO]({ commit }, idPedido: number) {
      const service = (Container.get(PedidoService) as PedidoService);
      await service.comporInformacoesPedio(idPedido);
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
  
    async [PedidoActionTypes.ATUALIZAR_PEDIDO_PRODUTO_STORE]({ commit }, pedidoProduto: PedidoProdutoDto[]) {
      commit(PedidoMutationTypes.SET_PEDIDO_PRODUTO, pedidoProduto);
    },
    
    async [PedidoActionTypes.SALVAR_PEDIDO_PRODUTO]({ commit }, pedidoProduto: PedidoProdutoDto) {
      const service = (Container.get(PedidoProdutoService) as PedidoProdutoService);
      const data = await service.salvarPedidoProduto(pedidoProduto);
      commit(PedidoMutationTypes.SET_PEDIDO_PRODUTOS, data);
    },

    async [PedidoActionTypes.REMOVER_PEDIDO_PRODUTO]({ commit }, id: number) {
      const service = (Container.get(PedidoProdutoService) as PedidoProdutoService);
      service.delete(id).then(()=>{
        commit(PedidoMutationTypes.SET_REMOVE_PEDIDO_PRODUTO, id);
      });
      
    },

  };
  
  export default actions;