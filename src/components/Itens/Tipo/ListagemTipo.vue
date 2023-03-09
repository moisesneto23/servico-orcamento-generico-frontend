<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="tipo in tipos" :key="tipo.id" class="mb-2">
      <v-expansion-panel-header> <h2>  {{ tipo.descricao }}</h2> <h4>Categoria: {{ tipo.categoriaItem.descricao}} </h4> </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
           <v-col cols="6">
            <edicao-tipo :tipo="tipo" ></edicao-tipo>
           
            <h3 class="text-center">Editar</h3></v-col>
            
          <v-col cols="6">
            <v-btn text @click="excluirTipo(tipo.id)"><v-icon>mdi-trash-can-outline</v-icon> </v-btn>
            <h3 class="text-center">Escluir</h3>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script lang="ts">

import { Vue, Component } from "vue-property-decorator";
import TipoModel from "@/Model/Itens/TipoModel";
import EdicaoTipo from '@/components/Itens/Tipo/EdicaoTipo.vue'
import { StoreNamespaces } from "@/store";
import { ItensActionTypes } from "@/store/Item/actions";
import { namespace } from "vuex-class";

const item = namespace(StoreNamespaces.ITEM);
@Component({
  components:{
    EdicaoTipo,
  }
})
export default class ListagemTipo extends Vue {
  
  @item.Action(ItensActionTypes.OBTER_TIPOS_ITEM)
  public obterTodostipoItem!:() => Promise<any>;

  @item.Action(ItensActionTypes.REMOVER_TIPO_ITEM)
  public removerTipoItem!:(id: number) => Promise<any>;

  @item.State
  public tipos!: TipoModel[];

  public async mounted(){
    await this.obterTodostipoItem();
  }
 public async excluirTipo(id: number){
    await this.removerTipoItem(id);
 }
  
}
</script>