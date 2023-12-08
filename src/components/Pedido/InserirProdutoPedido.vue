<template>
    <div id="InserirProdutoPedido">
       ||
  <v-btn color="primary" rounded disabled> <h6>Inserir produto ao pedido</h6></v-btn>
  <ListagemCliente />


    </div>
  </template>
  <script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import ListagemCliente from '@/components/Clientes/ListagemCliente.vue';
  @Component({
    components: {
      ListagemCliente
    },
  })
  export default class InserirProdutoPedido extends Vue {
    public tab = null;
    public mostraClientes = false;
  }
  </script>