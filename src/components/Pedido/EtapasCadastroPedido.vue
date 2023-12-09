<template>
    <div id="etapasCadastroPedido">
     <InserirPedido @inserindo-pedido="preenchePedido($event)" v-if="tab ===1"></InserirPedido>
  <InserirProdutoPedido  v-else-if="tab === 2"
  :pedido="pedido"
  @selecionou-pedido="selecinouPedido($event)"
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

    public selecinouPedido(pedido: PedidoDto){
      
    }
  }
  </script>