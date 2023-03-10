<template>
    <v-expansion-panels focusable v-if="dialog">
      <v-expansion-panel v-for="tipo in produtos" :key="tipo.id" class="mb-2">
        <v-expansion-panel-header> <h3>  {{ tipo.nome }}</h3> 
          <v-divider vertical class="mx-2"></v-divider> 
          <h4>Tipo Produto: <h5>{{ tipo.tipoItem.descricao}}</h5>  </h4> </v-expansion-panel-header>
        <v-expansion-panel-content class="mt-10">
            <dialogo-item-produto />
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

    <v-dialog v-model="dialog" persistent max-width="600px" v-else>
    <div>
      ok
    </div>
    </v-dialog>
  </template>
  <script lang="ts">
  
  import { Vue, Component } from "vue-property-decorator";
  import EdicaoProduto from './EdicaoProduto.vue'
  import { StoreNamespaces } from "@/store";
  import { namespace } from "vuex-class";
  import { ProdutosActionTypes } from "@/store/Produtos/actions";
  import ProdutoModel from "@/Model/Produtos/ProdutoModel";
  import DialogoItemProduto from "../ItemProduto/DialogoItemProduto.vue"
  
  const produto = namespace(StoreNamespaces.PRODUTO);
  @Component({
    components:{
      EdicaoProduto,
      DialogoItemProduto
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

   public dialog = true;
    
  }
  </script>
  <style>
</style>