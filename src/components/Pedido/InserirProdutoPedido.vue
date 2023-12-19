<template>
    <div id="InserirProdutoPedido">
      <v-btn class="my-6" color="primary" rounded @click="finalizarPedido()" :disabled="!pedidoProdutos.length"> <h6>Finalizar o pedido</h6></v-btn>
      <PedidoProdutosSelecionados />
      <v-btn  @click="tab = 1">selecionar outro cliente</v-btn>
      <ListagemSelecaoPedidoProduto 
      />
      
  
  
  <div>
  </div>


    </div>
  </template>
  <script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
import ClienteDto from "@/Model/ClienteDto";
import PedidoDto from '@/Model/Pedido/PedidoDto'; 
import ListagemSelecaoPedidoProduto from '@/components/Pedido/ListagemSelecaoPedidoProduto.vue';
import { namespace } from "vuex-class";
import { StoreNamespaces } from "@/store/namespaces";
import PedidoProdutosSelecionados from './PedidoProdutosSelecionados.vue';
import PedidoProdutoDto from "@/Model/Pedido/PedidoProdutoDto";

const pedido = namespace(StoreNamespaces.PEDIDO);

  @Component({
    components: {
      ListagemSelecaoPedidoProduto,
      PedidoProdutosSelecionados,
    },
  })
  export default class InserirProdutoPedido extends Vue {
    public tab = 1;

    @pedido.State
    public pedidoProdutos!: PedidoProdutoDto[];



    
    public finalizarPedido(){
      this.$emit('solicitar-finaliacao-pedido');
    }
  }
  </script>
