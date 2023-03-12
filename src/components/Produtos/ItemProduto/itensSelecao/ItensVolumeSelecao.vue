<template>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in itensSelecao" :key="i" class="mb-1">
        
        <v-expansion-panel-header @click="selecionaItem(item)" expand-icon="mdi-plus">
            <h3>  {{ item.nome }}</h3> 
          <v-divider vertical class="mx-2"></v-divider> 
          <h4>Tipo:<h5> {{ item.tipoItem.descricao}} </h5></h4> 
        </v-expansion-panel-header>

      </v-expansion-panel>
    </v-expansion-panels>
  </template>
  <script lang="ts">
  import { Dimencao } from "@/Model/Enum/DimencaoEnum";
  import ItemModel from "@/Model/Itens/ItemModel";
  import { StoreNamespaces } from "@/store";
  import { ItensActionTypes } from "@/store/Item/actions";
  import { Vue, Component, Prop } from "vue-property-decorator";
  import { namespace } from "vuex-class";

  
  const item = namespace(StoreNamespaces.ITEM);
  @Component({
    components: {

    }
    })
  export default class ItensLinearSelecao extends Vue {
    
  @Prop()
  produtoId!: number;

  @Prop()
  public itensNaoAdicionados!: ItemModel[];
    @item.Action(ItensActionTypes.OBTER_ITENS)
    private obterItens!:() => Promise<void>
  
    public get obterItensUnitarios(){
      const intens = this.itens.filter(i=>i.dimencaoId === Dimencao.Volume);
      return intens;
    }

    public selecionaItem(item:ItemModel){
        this.$emit('selecao-item',item);
        this.removeItem(item);
    }
    public itensSelecao: ItemModel[]= [];
    public async mounted(){
        await this.obterItens().then(()=>{
          this.itensSelecao = this.obterItensUnitarios;
        });
    }
    @item.State
    public itens!: ItemModel[];
  
    public removeItem(item: ItemModel): void {
    const index = this.itensSelecao.indexOf(item);
    if (index > -1) {
      this.itensSelecao.splice(index, 1);
      this.$emit('item-descelecionado',item);
    }
  }

  public adicionarIVolume(item: ItemModel){
    this.itensSelecao.push(item);
  }
  
  }
  </script>