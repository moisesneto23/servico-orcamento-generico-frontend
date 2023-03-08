<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="categoria in categorias" :key="categoria.id">
      <v-expansion-panel-header>  <h1>{{ categoria.descricao }}</h1></v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col cols="6">
            <edicao-categoria :categoria="categoria" @categoriaAlterada="alteracaoCategoria" ></edicao-categoria>
           
            <h3 class="text-center">Editar</h3></v-col>
            
          <v-col cols="6">
            <v-btn text @click="excluirCategoria(categoria.id)"><v-icon>mdi-trash-can-outline</v-icon> </v-btn>
            <h3 class="text-center">Escluir</h3>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CategoriaModel from '@/Model/Itens/CategoriaModel';
import EdicaoCategoria from '@/components/Itens/Categoria/EditacaoCategoria.vue';
import { ItensActionTypes } from '@/store/Item/actions';
import { StoreNamespaces } from '@/store';
import { namespace } from 'vuex-class';

const item = namespace(StoreNamespaces.ITEM);
@Component({
  components: {
    EdicaoCategoria,
  }
})
export default class ListagemCategoria extends Vue {

 @item.State
 public categorias!: CategoriaModel[];
  
  @item.Action(ItensActionTypes.OBTER_CATEGORIAS_ITEM)
  public obterTodasCategoriasItem!:() => Promise<any>;
   
  @item.Action(ItensActionTypes.REMOVER_CATEGORIA_ITEM)
  public removerCategoriaItem!:(id: number) => Promise<any>;

  public mounted(){
    this.obterTodasCategoriasItem();
  }

  public alteracaoCategoria(categoria: CategoriaModel){
    this.categorias.filter(x=>x.id===categoria.id).map(c=>c =categoria);
  }

      public excluirCategoria(id:number){
       this.removerCategoriaItem(id);
      }
}
</script>