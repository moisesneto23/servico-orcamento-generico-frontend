<template>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in itensSelecao" :key="i" class="mb-1">
        
        <v-expansion-panel-header @click="selecionaItem(item)" expand-icon="mdi-plus">
            <h3>  {{ item.nome }}</h3> 
          <v-divider vertical class="mx-2"></v-divider> 
          <h4>Tipo:<h5> {{ item.tipoItem.descricao}} </h5></h4> 
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col cols="4" sm="4" md="4">
              <v-text-field type="number" v-model="quantidade" label="Quantidade de itens*" required></v-text-field>
            </v-col>

            <v-col cols="4" sm="6" md="4">
              <v-text-field label="Valor adicional" type="number" v-model="valorAdicional" step="0.01" locale="pt-BR"
                prefix="R$" required
               ></v-text-field>
            </v-col>
            <v-col>
              <v-btn color="primary" class="mt-5" @click="selecionaItem(item)"
              :disabled="!quantidade || quantidade < 1 ">
                <v-icon dark>
                  mdi-plus
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </template>
  <script lang="ts">
  import { Dimencao } from "@/Model/Enum/DimencaoEnum";
  import ItemModel from "@/Model/Itens/ItemModel";
import ItemProdutoModel from "@/Model/Produtos/ItemProdutoModel";
  import { StoreNamespaces } from "@/store";
  import { ItensActionTypes } from "@/store/Item/actions";
import { ProdutosActionTypes } from "@/store/Produtos/actions";
  import { Vue, Component, Prop } from "vue-property-decorator";
  import { namespace } from "vuex-class";

  const produto = namespace(StoreNamespaces.PRODUTO);
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
  @produto.Action(ProdutosActionTypes.SALVAR_ITEM_PRODUTO)
  private salvarItemProduto!:(itemProduto: ItemProdutoModel)=> Promise<void>;

    @item.Action(ItensActionTypes.OBTER_ITENS)
    private obterItens!:() => Promise<void>
  
    public get obterItensUnitarios(){
      const intens = this.itens.filter(i=>i.dimencaoId === Dimencao.Comprimento);
      return intens;
    }

    private itemProduto = new ItemProdutoModel();

public async selecionaItem(item: ItemModel) {
  this.itemProduto.itemId = item.id;
  this.itemProduto.produtoId =this.produtoId;
  this.itemProduto.valorAdicional = this.valorAdicional;
  this.itemProduto.quantidade = this.quantidade;
  await this.salvarItemProduto(this.itemProduto).then(()=>{
    this.$emit('selecao-item',item);
    this.removeItem(item);
  });
}
public quantidade = 1;
public valorAdicional = 0;
    public itensSelecao: ItemModel[]= [];
    public async mounted(){
        await this.obterItens().then(()=>{
          this.itensNaoAdicionados = this.obterItensUnitarios;
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

  
  public adicionarItemLinear(item: ItemModel){
    this.itensSelecao.push(item);
  }
  
  }
  </script>