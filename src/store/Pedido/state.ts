import ClienteDto from "@/Model/ClienteDto";
import PedidoDto from "@/Model/Pedido/PedidoDto";
import PedidoProdutoDto from "@/Model/Pedido/PedidoProdutoDto";

export class PedidoState {
    public pedidos?: PedidoDto[];
    public pedidoProdutos?: PedidoProdutoDto[] ;
    public clientes?: ClienteDto[];
  
  }
  
  export const state: PedidoState = {
    pedidos: [],
    pedidoProdutos: [],
    clientes: [],
  };