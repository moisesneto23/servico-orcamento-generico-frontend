<template>
  <div>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="(item, i) in obterItensVolume" :key="i" class="mb-1">
        <v-expansion-panel-header class="my-n2">
          <v-row>
            <v-col class="mt-1">
            <h3> {{ item.nome }}</h3>
          </v-col>
         <v-col>
          <h4>Medida de unidade:<h5> {{ item.nomeUnidadeMedida }} </h5></h4>
         </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
        
          <v-row>
            <v-col cols="4" sm="4" md="4">
              <v-text-field type="number" v-model="quantidade" label="Quantidade de itens*" required></v-text-field>
            </v-col>

            <v-col cols="4" sm="6" md="4">
              <v-text-field label="Valor adicional" type="number" v-model="valorAdicional" step="0.01" locale="pt-BR"
                prefix="R$" required></v-text-field>
            </v-col>
            <v-col>
              <v-btn color="primary" class="mt-5" @click="selecionaItem(item)" :disabled="!quantidade || quantidade < 1">
                <v-icon dark>
                  mdi-plus
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script lang="ts">
import { Dimencao } from "@/Model/Enum/DimencaoEnum";
import ItemDto from "@/Model/Itens/ItemDto";
import ItemProdutoDimencaoDto from "@/Model/Produtos/ItemProdutoDimencaoDto";
import { StoreNamespaces } from "@/store";

import { ProdutosActionTypes } from "@/store/Produtos/actions";
import { GlobalActionTypes } from "@/store/actions";
import { Vue, Component, Prop } from "vue-property-decorator";
import { Action, namespace } from "vuex-class";

const item = namespace(StoreNamespaces.ITEM);
const produto = namespace(StoreNamespaces.PRODUTO);
@Component({
  components: {
  }
})
export default class ItensPerimetroSelecao extends Vue {
  @Prop()
  produtoId!: number;

  @Prop()
  public itensNaoAdicionados!: ItemDto[];
  public relacaoProdutoItem = new ItemProdutoDimencaoDto();

  @produto.Action(ProdutosActionTypes.SALVAR_ITEM_PRODUTO_DIMENCAO)
  private salvarItemProduto!: (itemProduto: ItemProdutoDimencaoDto) => Promise<void>;

    @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>

  @item.State
  public itens!: ItemDto[];

  @produto.State
  public itensProdutoDimencao!: ItemProdutoDimencaoDto[];

  public quantidade = 1;
  public valorAdicional = 0;

  public get obterItensVolume() {
    let itensSelecionaveis = this.itens;
    let itensSelecionados = this.itensProdutoDimencao.filter((x) => x.dimencaoId === 11);
    itensSelecionados.forEach((item) => {
      itensSelecionaveis = itensSelecionaveis.filter((x) => x.id !== item.itemId);
    });
    return itensSelecionaveis;
  }
  public itemProduto = new ItemProdutoDimencaoDto();


  public async selecionaItem(item: ItemDto) {
    this.itemProduto.dimencaoId = 11;
    this.itemProduto.itemId = item.id;
    this.itemProduto.nome = item.nome;
    this.itemProduto.valorCompra = item.valorCompra;
    this.itemProduto.valorVenda = item.valorVenda;
    this.itemProduto.produtoId = this.produtoId;
    this.itemProduto.valorAdicional = this.valorAdicional;
    this.itemProduto.quantidade = this.quantidade;
    this.itemProduto.valorTotal = 0;
    this.AtivarCarregamento();
    await this.salvarItemProduto(this.itemProduto).then(() => {
      this.DesativarCarregamento();
    }).catch(()=>{
      this.DesativarCarregamento();
      alert("Algo deu errado nesta operação")
    });
  }

}
</script>