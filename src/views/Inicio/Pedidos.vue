<template>
    <div id="Pedidos">
     
  
  <EtapasCadastroPedido v-if="etapa === 1"></EtapasCadastroPedido>
  <v-btn v-else color="primary" rounded @click="etapa = 1"> <h6>Cadastrar pedido</h6></v-btn>
    </div>
  </template>
  <script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import EtapasCadastroPedido from '@/components/Pedido/EtapasCadastroPedido.vue';
  @Component({
    components: {
      EtapasCadastroPedido,
    },
  })
  export default class Pedidos extends Vue {
    public etapa = 0
    public tab = null;
  }
  </script>
  