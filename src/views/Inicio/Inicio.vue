<template>
    <div>
    
  <CategoriasProdutoOrcamento></CategoriasProdutoOrcamento>
    </div>
  </template>
  
  <script lang="ts">
  
  import { Component, Vue, Prop } from 'vue-property-decorator';

  import CategoriasProdutoOrcamento from '@/components/Orcamento/CategoriasProdutoOrcamento.vue';
  

  
  @Component({
    components: {
      CategoriasProdutoOrcamento,
    }
  })
  export default class Inicio extends Vue{
   
    public get eMobile(): boolean {
    return this.$vuetify.breakpoint.xsOnly;
  }

  



   

   
  };
  </script>
  <style scoped>
  .visualizador-de-pdf {
    width: 90vw;
    height: 90vh;
  }
  </style>
  