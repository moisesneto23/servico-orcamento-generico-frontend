<template>
   <div>
    <div>

    </div>
        <div v-if="!selecao"> 
            <v-btn color="primary" rounded @click="selecao = true" > selecionar cliente</v-btn> 
        </div>
            <div v-else>
                <v-expansion-panels focusable>
                    <v-expansion-panel v-for="Pedido in Pedidos" :key="categoriaProduto.id" class="mb-2">
                         <v-expansion-panel-header>  <h1>{{ categoriaProduto.descricao }}</h1></v-expansion-panel-header>
                            <v-expansion-panel-content>
                                                    <v-row>
                                <v-col cols="6">
                                <edicao-categoria-produto :categoriaProduto="categoriaProduto" ></edicao-categoria-produto>
                                
                                <h3 class="text-center">Editar</h3></v-col>
                                
                                <v-col cols="6">
                                <v-btn text @click="excluirCategoriaProduto(categoriaProduto.id)"><v-icon>mdi-trash-can-outline</v-icon> </v-btn>
                                <h3 class="text-center">Escluir</h3>
                                </v-col>
                                                  </v-row>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                    </v-expansion-panels>
                </div>
   </div>
  </template>
  <script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import EdicaoCategoriaProduto from '@/components/Produtos/CategoriaProduto/EditacaoCategoriaProduto.vue';
  import { StoreNamespaces } from '@/store';
  import { namespace } from 'vuex-class';
  import {CategoriaProdutoDto} from "@/Model/Produtos/CategoriaProdutoDto";
  import { PedidoActionTypes } from "@/store/Pedido/actions";
  
  const pedido = namespace(StoreNamespaces.PEDIDO);
  @Component({
    components: {
      EdicaoCategoriaProduto,
    }
  })
  export default class ListagemCategoriaProdutoProduto extends Vue {
  
   @pedido.State
   public categoriasProduto!: CategoriaProdutoDto[];
    
     
    @pedido.Action(PedidoActionTypes.REMOVER_CLIENTE)
    public removerCategoriaProduto!:(id: number) => Promise<any>;
  
  
  public selecao = false;
    public async excluirCategoriaProduto(id:number){
      await this.removerCategoriaProduto(id).then(()=>{
      });
    }
  }
  </script>