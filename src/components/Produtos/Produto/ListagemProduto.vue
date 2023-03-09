<template>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="tipo in produtos" :key="tipo.id" class="mb-2">
        <v-expansion-panel-header> <h2>  {{ tipo.nome }}</h2> <h4>Tipo Produto: <h5>{{ tipo.tipoItem.descricao}}</h5>  </h4> </v-expansion-panel-header>
        <v-expansion-panel-content class="mt-10">
            <h2 class="mt-8"> Adicionar item ao produto </h2> 
            <hr>
          <v-row>
             <v-col cols="6">
              <edicao-produto :produto="tipo" ></edicao-produto>
             
              <h3>Editar</h3></v-col>
              
            <v-col cols="6">
              <v-btn text @click="excluirProduto(tipo.id)"><v-icon>mdi-trash-can-outline</v-icon> </v-btn>
              <h3 class="text-center">Escluir</h3>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </template>
  <script lang="ts">
  
  import { Vue, Component } from "vue-property-decorator";
  import EdicaoProduto from './EdicaoProduto.vue'
  import { StoreNamespaces } from "@/store";
  import { namespace } from "vuex-class";
  import { ProdutosActionTypes } from "@/store/Produtos/actions";
import ProdutoModel from "@/Model/Produtos/ProdutoModel";
  
  const produto = namespace(StoreNamespaces.PRODUTO);
  @Component({
    components:{
      EdicaoProduto,
    }
  })
  export default class ListagemTipoProduto extends Vue {
    
    @produto.Action(ProdutosActionTypes.OBTER_PRODUTOS)
    public obterTodosProdutos!:() => Promise<any>;
  
    @produto.Action(ProdutosActionTypes.REMOVER_PRODUTO)
    public removerProduto!:(id: number) => Promise<any>;
  
    @produto.State
    public produtos!: ProdutoModel[];
  
    public async mounted(){
      await this.obterTodosProdutos();
    }
   public async excluirProduto(id: number){
      await this.removerProduto(id);
   }
    
  }
  </script>
  <style>
</style>