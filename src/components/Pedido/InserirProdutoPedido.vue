<template>
    <div id="InserirProdutoPedido">
      <ListagemCliente v-if="tab === 1" @selecionou-cliente="clienteSelecionado($event)"/>
      <PedidoProdutosSelecionados v-if="tab === 2"/>
      <v-btn v-if="tab === 2" @click="tab = 1">selecionar outro cliente</v-btn>
      <ListagemSelecaoPedidoProduto v-if="tab === 2"
      />
      
  <v-btn color="primary" rounded @click="solicitarPedido()"> <h6>Inserir produtos ao pedido</h6></v-btn>
  
  <div>


  </div>


    </div>
  </template>
  <script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  import ListagemCliente from '@/components/Clientes/ListagemCliente.vue';
import ClienteDto from "@/Model/ClienteDto";
import PedidoDto from '@/Model/Pedido/PedidoDto'; 
import ListagemSelecaoPedidoProduto from '@/components/Pedido/ListagemSelecaoPedidoProduto.vue';
import { namespace } from "vuex-class";
import { StoreNamespaces } from "@/store/namespaces";
import PedidoProdutosSelecionados from './PedidoProdutosSelecionados.vue';

const pedido = namespace(StoreNamespaces.PEDIDO);

  @Component({
    components: {
      ListagemCliente,
      ListagemSelecaoPedidoProduto,
      PedidoProdutosSelecionados,
    },
  })
  export default class InserirProdutoPedido extends Vue {
    public tab = 1;
    public mostraClientes = false;

    @Prop()
    private pedido !: PedidoDto;

    public clienteSelecionado(cliente: ClienteDto){
      this.pedido.clienteId = cliente.id;
      this.tab = 2;
      this.$emit('cliente-selecionado',this.pedido);
    }

    public solicitarPedido(){
      this.$emit('solicitar-pedido',this.pedido);
    }
  }
  </script>