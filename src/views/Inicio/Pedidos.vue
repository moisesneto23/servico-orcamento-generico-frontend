<template>
    <div id="Pedidos">
     
      <ListagemPedido v-if="etapa === 0" @pedido-selecionado="etapa = 1"/>
      <v-btn v-if="etapa === 0" color="purple" rounded @click="etapa = 1"> <h6>Cadastrar pedido</h6></v-btn>
  <EtapasCadastroPedido v-if="etapa === 1" @etapa-selecao-pedido="etapa = 0 "></EtapasCadastroPedido>
  

  
    </div>
  </template>
  <script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import EtapasCadastroPedido from '@/components/Pedido/EtapasCadastroPedido.vue';
  import  ListagemPedido from '@/components/Pedido/ListagemPedidos.vue';
  @Component({
    components: {
      EtapasCadastroPedido,
      ListagemPedido,
    },
  })
  export default class Pedidos extends Vue {
    public etapa = 0
  }
  </script>
  