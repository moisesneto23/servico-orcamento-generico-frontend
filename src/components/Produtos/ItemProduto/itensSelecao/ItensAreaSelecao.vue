<template>
  <div>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="(item, i) in obterItensArea" :key="i" class="mb-1">
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
            <v-col cols="12" sm="6">
              <v-select v-model="select" :items="direcoesCauculo" item-text="descricao" item-value="id" label="Direção de calculo"
                persistent-hint return-object single-line></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6" sm="6" md="6">
              <v-text-field type="number" v-model="itemProduto.somatorioLargura" label="Somatorio Largura"
                v-if="obterIdDirecaoCauculo === 8 || obterIdDirecaoCauculo === 10"></v-text-field>
              <v-text-field type="number" v-model="itemProduto.somatorioALtura" label="Somatorio Altura"
                v-if="obterIdDirecaoCauculo === 8 || obterIdDirecaoCauculo === 9"></v-text-field>
              <v-text-field type="number" v-model="itemProduto.somatorioComprimento" label="Sommatorio Comprimento"
                v-if="obterIdDirecaoCauculo === 9 || obterIdDirecaoCauculo === 10"></v-text-field>
            </v-col>

            <v-col cols="6" sm="6" md="6">
              <v-text-field type="number" v-model="itemProduto.coeficienteLargura" label="Coeficiente Largura"
              v-if="obterIdDirecaoCauculo === 8 || obterIdDirecaoCauculo === 10"></v-text-field>
              <v-text-field type="number" v-model="itemProduto.coeficienteAltura" label="Coeficiente Altura"
              v-if="obterIdDirecaoCauculo === 8 || obterIdDirecaoCauculo === 9"></v-text-field>
              <v-text-field type="number" v-model="itemProduto.coeficienteComprimento" label="Coeficiente Comprimento"
              v-if="obterIdDirecaoCauculo === 9 || obterIdDirecaoCauculo === 10"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6" sm="6" md="6">
              <v-text-field type="number" v-model="itemProduto.quantidade" label="Quantidade de itens*" required></v-text-field>
            </v-col>
            <v-col cols="6" sm="6" md="6">
              <v-text-field label="Valor adicional" type="number" v-model="itemProduto.valorAdicional" step="0.01" locale="pt-BR"
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
export default class ItensAreaSelecao extends Vue {

  @Prop()
  produtoId!: number;

  @Prop()
  public itensNaoAdicionados!: ItemDto[];
  public relacaoProdutoItem = new ItemProdutoDimencaoDto();
  
  @produto.Action(ProdutosActionTypes.SALVAR_ITEM_PRODUTO_DIMENCAO)
  private salvarItemProduto!:(itemProduto: ItemProdutoDimencaoDto)=> Promise<void>;

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

  public get obterItensArea() {
    return  this.itens.filter((x) => this.possuiTodasDimencoesArea(this.itensProdutoDimencao, x.id));
  }

  private possuiTodasDimencoesArea(ipd: ItemProdutoDimencaoDto[], itemId : number){
    let data = ipd.filter((x)=> (x.dimencaoId === 8 || x.dimencaoId === 9 || x.dimencaoId === 10) && itemId === x.itemId)
    if (data.length > 2){
      return false;
    }
    return true;
  }

  public itemProduto = new ItemProdutoDimencaoDto();
  
  
  public direcoesCauculo: DimencaoDto[] = [];
  public select = new DimencaoDto();
  mounted() {
    const ai = { id: 8, nome: 'Area', descricao: 'LarguraAltura', direcaoCalculoId: 5 };
    const aa = { id: 9, nome: 'Area', descricao: 'AlturaComprimento', direcaoCalculoId: 6 };
    const aaa = { id: 10, nome: 'Area', descricao: 'ComprimentoLargura', direcaoCalculoId: 7 };
    this.direcoesCauculo.push(ai);
    this.direcoesCauculo.push(aa);
    this.direcoesCauculo.push(aaa);
    this.select.id = 0;
  }
  public async selecionaItem(item: ItemDto) {
    this.itemProduto.dimencaoId = this.select.id;
    this.itemProduto.itemId = item.id;
    this.itemProduto.nome = item.nome;
    this.itemProduto.valorCompra = item.valorCompra;
    this.itemProduto.valorVenda = item.valorVenda;
    this.itemProduto.produtoId = this.produtoId;
    this.itemProduto.valorAdicional = this.valorAdicional;
    
    const quant = this.quantidade;
    this.itemProduto.quantidade = (quant);
    this.itemProduto.valorTotal = 0;
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