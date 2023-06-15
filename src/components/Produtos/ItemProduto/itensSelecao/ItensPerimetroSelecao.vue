<template>
  <div>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="(item, i) in obterItensPerimetro" :key="i" class="mb-1">
        <v-expansion-panel-header>
          <h3> {{ item.nome }}</h3>
          <v-divider vertical class="mx-2"></v-divider>
          <h4>Tipo:<h5> {{ item.nome }} </h5>
          </h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          
          <v-row>
            <v-col cols="12" sm="6">
              <v-select v-model="select" :items="direcoesCauculo" item-text="descricao" item-value="id" label="Select"
                persistent-hint return-object single-line></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4" sm="4" md="4">
              <v-text-field type="number" v-model="itemProduto.somatorioLargura" label="Somatorio Largura"
                v-if="obterIdDirecaoCauculo === 5 || obterIdDirecaoCauculo === 7"></v-text-field>
              <v-text-field type="number" v-model="itemProduto.somatorioALtura" label="Somatorio Altura"
                v-if="obterIdDirecaoCauculo === 5 || obterIdDirecaoCauculo === 6"></v-text-field>
              <v-text-field type="number" v-model="itemProduto.somatorioComprimento" label="Sommatorio Comprimento"
                v-if="obterIdDirecaoCauculo === 6 || obterIdDirecaoCauculo === 7"></v-text-field>
            </v-col>

            <v-col cols="4" sm="4" md="4">
              <v-text-field type="number" v-model="itemProduto.coeficienteLargura" label="Coeficiente Largura"
                v-if="obterIdDirecaoCauculo === 5 || obterIdDirecaoCauculo === 7"></v-text-field>
              <v-text-field type="number" v-model="itemProduto.coeficienteAltura" label="Coeficiente Altura"
                v-if="obterIdDirecaoCauculo === 5 || obterIdDirecaoCauculo === 6"></v-text-field>
              <v-text-field type="number" v-model="itemProduto.coeficienteComprimento" label="Coeficiente Comprimento"
                v-if="obterIdDirecaoCauculo === 6 || obterIdDirecaoCauculo === 7"></v-text-field>
            </v-col>
          </v-row>

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
import { DimencaoDto } from "@/Model/Itens/DimencaoDto";
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

  @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>

  @produto.Action(ProdutosActionTypes.SALVAR_ITEM_PRODUTO_DIMENCAO)
  private salvarItemProduto!: (itemProduto: ItemProdutoDimencaoDto) => Promise<void>;

  @item.State
  public itens!: ItemDto[];

  @produto.State
  public itensProdutoDimencao!: ItemProdutoDimencaoDto[];

  public direcoesCauculo: DimencaoDto[] = [];
  public select = new DimencaoDto();
  mounted() {
    const ai = { id: 5, nome: 'Perimetro', descricao: 'LarguraAltura', direcaoCalculoId: 5 };
    const aa = { id: 6, nome: 'Perimetro', descricao: 'AlturaComprimento', direcaoCalculoId: 6 };
    const aaa = { id: 7, nome: 'Perimetro', descricao: 'ComprimentoLargura', direcaoCalculoId: 7 };
    this.direcoesCauculo.push(ai);
    this.direcoesCauculo.push(aa);
    this.direcoesCauculo.push(aaa);
    this.select.id = 0;
  }
  public quantidade = 1;
  public valorAdicional = 0;


  public get obterItensPerimetro() {
    let itensSelecionaveis = this.itens;
    let itensSelecionados = this.itensProdutoDimencao.filter((x) => x.dimencaoId === 5 || x.dimencaoId === 6 || x.dimencaoId === 7);
    itensSelecionados.forEach((item) => {
      itensSelecionaveis = itensSelecionaveis.filter((x) => x.id !== item.itemId);
    });
    return itensSelecionaveis;
  }
  public itemProduto = new ItemProdutoDimencaoDto();

  public async selecionaItem(item: ItemDto) {
    this.itemProduto.dimencaoId = this.select.id;
    this.itemProduto.itemId = item.id;
    this.itemProduto.nome = item.nome;
    this.itemProduto.valorCompra = item.valorCompra;
    this.itemProduto.valorVenda = item.valorVenda;
    this.itemProduto.produtoId = this.produtoId;
    this.itemProduto.valorAdicional = this.valorAdicional;
    this.itemProduto.quantidade = this.quantidade;
    this.AtivarCarregamento();
    await this.salvarItemProduto(this.itemProduto).then(() => {
      this.DesativarCarregamento();
    }).catch(()=>{
      this.DesativarCarregamento();
      alert("Algo deu errado nesta operação")
    });
  }
  public get obterIdDirecaoCauculo(): number {
    return this.select.id;
  }

}
</script>