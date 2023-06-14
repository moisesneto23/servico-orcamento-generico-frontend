<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="(item, i) in obterItensUnitarios" :key="i" class="mb-2">
      <v-expansion-panel-header><h3>  {{ item }}</h3> 
        <v-divider vertical class="mx-2"></v-divider> 
        <h4>Tipo:<h5> {{ item}} </h5></h4> </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col cols="6">
            <edicao-item :itemEdicao="item" ></edicao-item>
            <h3 class="text-center">Editar</h3></v-col>
          <v-col cols="6">
            <v-btn text><v-icon x-large @click="excluirItem(item)">mdi-trash-can-outline</v-icon> </v-btn>
            <h3 class="text-center">Escluir</h3>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script lang="ts">
import { Dimencao } from "@/Model/Enum/DimencaoEnum";
import ItemDto from "@/Model/Itens/ItemDto";
import { StoreNamespaces } from "@/store";
import { ItensActionTypes } from "@/store/Item/actions";
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import EdicaoItem from "../EdicaoItem.vue";

const item = namespace(StoreNamespaces.ITEM);
@Component({
  components: {
    EdicaoItem,
  }
  })
export default class Listalinear extends Vue {
  
  @item.Action(ItensActionTypes.REMOVER_ITEM)
  public removerItem!:(id: number) => Promise<void>

  public get obterItensUnitarios(){
    // const intens = this.itens.filter(i=>i.dimencaoId === Dimencao.Comprimento);
    return ;
  }
 public async excluirItem(id: number){
    await this.removerItem(id);
 }
  @item.State
  public itens!: ItemDto[];

}
</script>