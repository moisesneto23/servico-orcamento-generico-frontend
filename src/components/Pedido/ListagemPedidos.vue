<template>
    <div id="etapasCadastroPedido">
     
  <v-btn color="primary" rounded> <h6>Cadastrar pedido</h6></v-btn>
  
    </div>
  </template>
  <script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  
  @Component({
    components: {
   
    },
  })
  export default class EtapasCadastroPedido extends Vue {
    public tab = null;
  }
  </script>