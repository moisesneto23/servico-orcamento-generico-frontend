<template>
    <div id="InserirProdutoPedido">
      <ListagemCliente v-if="tab === 1" @selecionou-cliente="clienteSelecionado($event)"/>
      <v-btn v-if="tab === 2">selecionar outro cliente</v-btn>
  <v-btn color="primary" @click="tab = 3" rounded :disabled="tab < 3"> <h6>Inserir produto ao pedido</h6></v-btn>
  
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

  @Component({
    components: {
      ListagemCliente
    },
  })
  export default class InserirProdutoPedido extends Vue {
    public tab = 1;
    public mostraClientes = false;

    @Prop()
    private pedido !: PedidoDto;

    public clienteSelecionado(cliente: ClienteDto){
      this.tab = 2;

    }
  }
  </script>