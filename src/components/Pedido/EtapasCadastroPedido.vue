<template>
    <div id="etapasCadastroPedido">
     <InserirPedido @inserindo-pedido="preenchePedido($event)" v-if="tab ===1"></InserirPedido>
    
  <InserirProdutoPedido  v-else-if="tab === 2"
  :pedido="pedido"
  @selecionou-pedido="selecinouPedido($event)"
  @solicitar-pedido="solicitarPedido()"
  >
</InserirProdutoPedido>

  <!-- <v-btn rounded color="primary">Proxima Etapa</v-btn> -->
    </div>
  </template>
  <script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import InserirPedido from './InserirPedido.vue';
  import InserirProdutoPedido from './InserirProdutoPedido.vue';
  import PedidoDto from "@/Model/Pedido/PedidoDto";
  import { PedidoActionTypes } from "@/store/Pedido/actions";
import { StoreNamespaces } from "@/store/namespaces";
import { namespace } from "vuex-class";
import PedidoProdutoDto from "@/Model/Pedido/PedidoProdutoDto";

  const pedido = namespace(StoreNamespaces.PEDIDO);
  @Component({
    components: {
        InserirPedido,
        InserirProdutoPedido,
    },
  })
  export default class EtapasCadastroPedido extends Vue {
    public tab = 1;
    public pedido = new PedidoDto();

    public preenchePedido(descricao: string){
      this.pedido.descricao = descricao;
      this.tab = 2
    }
    @pedido.Action(PedidoActionTypes.SALVAR_PEDIDO)
  public salvarPedido!:(pedido : PedidoDto) => Promise<any>;

    public selecinouPedido(pedido: PedidoProdutoDto[]){
      this.pedido.pedidoProdutos = pedido;
      
    }

    public solicitarPedido(){
    this.salvarPedido(this.pedido);
    }
  }
  </script>