<template>
    <div id="InserirProdutoPedido">
      <ListagemCliente v-if="tab === 1" @selecionou-cliente="clienteSelecionado($event)"/>
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
import PedidoProdutoDto from '@/Model/Pedido/PedidoProdutoDto'; 
import PedidoDto from '@/Model/Pedido/PedidoDto'; 
import ListagemSelecaoPedidoProduto from '@/components/Pedido/ListagemSelecaoPedidoProduto.vue';
import { namespace } from "vuex-class";
import { StoreNamespaces } from "@/store/namespaces";


const pedido = namespace(StoreNamespaces.PEDIDO);

  @Component({
    components: {
      ListagemCliente,
      ListagemSelecaoPedidoProduto,
    },
  })
  export default class InserirProdutoPedido extends Vue {
    public tab = 1;
    public mostraClientes = false;

    @Prop()
    private pedido !: PedidoDto;

    @pedido.State
    private pedidoProdutos !: PedidoProdutoDto[];

    public clienteSelecionado(cliente: ClienteDto){
      this.pedido.clienteId = cliente.id;
      this.tab = 2;
    }

    public solicitarPedido(){
      this.pedido.pedidoProdutos = this.pedidoProdutos;
      this.$emit('solicitar-pedido',this.pedido);
    }
  }
  </script>