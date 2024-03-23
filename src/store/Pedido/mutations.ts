
import { MutationTree } from "vuex";
import { PedidoState } from "./state";
import PedidoProdutoDto from "@/Model/Pedido/PedidoProdutoDto";
import ClienteDto from "@/Model/ClienteDto";
import PedidoDto from "@/Model/Pedido/PedidoDto";

export enum PedidoMutationTypes {
    SET_PEDIDOS = 'SET_PEDIDOS',
    SET_PEDIDO_PRODUTOS = 'SET_PEDIDO_PRODUTOS',
    SET_CLIENTES = 'SET_CLIENTES',
    SET_PEDIDO_PRODUTO = 'SET_PEDIDO_PRODUTO',
    SET_REMOVE_PEDIDO_PRODUTO = 'SET_REMOVE_PEDIDO_PRODUTO',
    SET_PEDIDO_SOLICITACAO = 'SET_PEDIDO_SOLICITACAO',
  }
  
  const mutations: MutationTree<PedidoState> = {
    [PedidoMutationTypes.SET_PEDIDOS](state: PedidoState, pedido: PedidoDto[]) {
      state.pedidos =pedido;
    },
    [PedidoMutationTypes.SET_PEDIDO_PRODUTOS](state: PedidoState, pedidoProdutos: PedidoProdutoDto[]) {
      state.pedidoProdutos = pedidoProdutos;
    },
    [PedidoMutationTypes.SET_CLIENTES](state: PedidoState, cliente: ClienteDto[]) {
      state.clientes = cliente;
    },

    [PedidoMutationTypes.SET_PEDIDO_PRODUTO](state: PedidoState, pedidoProduto: PedidoProdutoDto[]) {
      state.pedidoProdutos = pedidoProduto;
    },

    [PedidoMutationTypes.SET_PEDIDO_SOLICITACAO](state: PedidoState, pedidoSolicitacao: PedidoDto) {
      state.pedidoSolicitacao = pedidoSolicitacao;
    },

    [PedidoMutationTypes.SET_REMOVE_PEDIDO_PRODUTO](state: PedidoState, id: number) {
      state.pedidoProdutos = state.pedidoProdutos?.filter(x=>x.id !== id);
    },
    
  };
  
  
  export default mutations;