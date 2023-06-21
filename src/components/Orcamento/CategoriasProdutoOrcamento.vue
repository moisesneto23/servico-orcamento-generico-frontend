<template>   
      <div>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="categoria in categoriasProduto" :key="categoria.id" class="mb-1">
        <v-expansion-panel-header>
          <h3 class="text-center"> {{ categoria.descricao }}</h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="jus" color="#FCE4" >

         <GeracaoOrcamentoProduto :CategoriaId="categoria.id" ></GeracaoOrcamentoProduto> 

        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
  
     
  </template>
  
  <script lang="ts">
  

import { ProdutosActionTypes } from '@/store/Produtos/actions';
  import { GlobalActionTypes } from '@/store/actions';
import { StoreNamespaces } from '@/store/namespaces';
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { Action, namespace } from 'vuex-class';
  import GeracaoOrcamentoProduto from '@/components/Orcamento/GeracaoOrcamentoProduto.vue';
import { CategoriaProdutoDto } from '@/Model/Produtos/CategoriaProdutoDto';

  
  const produto = namespace(StoreNamespaces.PRODUTO);
  
  @Component({
    components: {
      GeracaoOrcamentoProduto,
    }
  })
  export default class CategoriasProdutoOrcamento extends Vue{
   
    public get eMobile(): boolean {
    return this.$vuetify.breakpoint.xsOnly;
  }

  

  @produto.Action(ProdutosActionTypes.OBTER_CATEGORIAS_PRODUTO)
    public obterTodasCategoriasProduto!:() => Promise<any>;
      
    async mounted(){
      this.AtivarCarregamento();
      await this.obterTodasCategoriasProduto();
      this.DesativarCarregamento();
    }

    @produto.State
    public categoriasProduto!: CategoriaProdutoDto[];



    @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

      @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>

  
}

  </script>
  <style scoped>
  .visualizador-de-pdf {
    width: 90vw;
    height: 90vh;
  }
  </style>
  