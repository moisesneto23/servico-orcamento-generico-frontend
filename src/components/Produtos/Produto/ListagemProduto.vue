<template>
    <v-expansion-panels focusable v-if="dialog">
      <v-expansion-panel v-for="produto in produtos" :key="produto.id" class="mb-2">
        <v-expansion-panel-header> <h3>  {{ produto.nome }}</h3> 
          <v-divider vertical class="mx-2"></v-divider> 
          <h4>Categoria Produto: <h5>{{ produto.categoriaProduto.descricao}}</h5>  </h4> </v-expansion-panel-header>
        <v-expansion-panel-content class="mt-10">
            <dialogo-item-produto :produtoId="produto.id" 
            @produto-adicao-concluido="buscaItensProduto"/>
            <hr>
          <v-row>
             <v-col cols="6">
              <edicao-produto :produto="produto" ></edicao-produto>
             
              <h3>Editar</h3></v-col>
              
            <v-col cols="6">
              <v-btn text @click="excluirProduto(produto.id)"><v-icon>mdi-trash-can-outline</v-icon> </v-btn>
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
  import { Action, namespace } from "vuex-class";
  import { ProdutosActionTypes } from "@/store/Produtos/actions";
  import ProdutoDto from "@/Model/Produtos/ProdutoDto";
  import DialogoItemProduto from "../ItemProduto/DialogoItemProduto.vue";
  import { GlobalActionTypes } from "@/store/actions";
  
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
    
    @produto.Action(ProdutosActionTypes.OBTER_ITEMS_PRODUTO_DIMENCAO)
    public obterItensProduto!:() => Promise<any>;

      @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>
      
    @produto.State
    public produtos!: ProdutoDto[];
  
    public async mounted(){
      await this.obterTodosProdutos();
    }
   public async excluirProduto(id: number){
      await this.removerProduto(id);
   }

   public dialog = true;

   public async buscaItensProduto(){
    this.AtivarCarregamento();
    await this.obterItensProduto().then(() => {
      this.DesativarCarregamento();
    }).catch(()=>{
      this.DesativarCarregamento();
      alert("Algo deu errado nesta operação")
    });
   }
    
  }
  </script>
  <style>
</style>