<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="(item, i) in obterItensUnitarios" :key="i" class="mb-2">
      <v-expansion-panel-header class="my-n1">
        <v-row>
         <v-col class="mt-1">
          <h3>  {{ item.nome }}</h3>
          </v-col>
         <v-col>
          <h4>Medida de unidade:<h5> {{ item.nomeUnidadeMedida }} </h5></h4>
         </v-col>
          </v-row>
         </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row class="mt-3">
          <v-col cols="6">
            <edicao-item :itemEdicao="item" ></edicao-item>
            <h3 class="text-center">Editar</h3></v-col>
          <v-col cols="6">
            <v-btn text><v-icon x-large @click="excluirItem(item.id)">mdi-trash-can-outline</v-icon> </v-btn>
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
import { Action, namespace } from "vuex-class";
import EdicaoItem from "@/components/Itens/Item/EdicaoItem.vue"; 
import { GlobalActionTypes } from "@/store/actions";

const item = namespace(StoreNamespaces.ITEM);
@Component({
  components: {
    EdicaoItem,
  }
  })
export default class ListagemItem extends Vue {
  
  @item.Action(ItensActionTypes.REMOVER_ITEM)
  public removerItem!:(id: number) => Promise<void>

    @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>

  public get obterItensUnitarios(){
    const intens = this.itens //.filter(i=>i.dimencaoId === Dimencao.Unidade);
    return intens;
  }
 public async excluirItem(id: number){
  this.AtivarCarregamento();
  try {
    await this.removerItem(id);
  } finally {
    this.DesativarCarregamento();
  }
 }
  @item.State
  public itens!: ItemDto[];

}
</script>