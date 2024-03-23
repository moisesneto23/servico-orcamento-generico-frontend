<template>
  <div>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="(item, i) in obterItensPerimetro" :key="i" class="mb-1">
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
              <v-select v-model="select" :items="direcoesCauculo"
               item-text="descricao" item-value="id" label="Direção de calculo"
                persistent-hint return-object single-line></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4" sm="4" md="4">
              <v-text-field type="number" v-model="itemProduto.somatorioLargura" label="Somatorio Largura"
                v-if="obterDescricaoCauculo === 'LarguraAltura' || obterDescricaoCauculo === 'ComprimentoLargura'"></v-text-field>

              <v-text-field type="number" v-model="itemProduto.somatorioALtura" label="Somatorio Altura"
                v-if="obterDescricaoCauculo === 'LarguraAltura' || obterDescricaoCauculo === 'AlturaComprimento'"></v-text-field>

              <v-text-field type="number" v-model="itemProduto.somatorioComprimento" label="Sommatorio Comprimento"
                v-if="obterDescricaoCauculo === 'ComprimentoLargura' || obterDescricaoCauculo === 'AlturaComprimento'"></v-text-field>
            </v-col>

            <v-col cols="4" sm="4" md="4">
              <v-text-field type="number" v-model="itemProduto.coeficienteLargura" label="Coeficiente Largura"
                v-if="obterDescricaoCauculo === 'LarguraAltura' || obterDescricaoCauculo === 'ComprimentoLargura'"></v-text-field>

              <v-text-field type="number" v-model="itemProduto.coeficienteAltura" label="Coeficiente Altura"
                v-if="obterDescricaoCauculo === 'LarguraAltura' || obterDescricaoCauculo === 'AlturaComprimento'"></v-text-field>

              <v-text-field type="number" v-model="itemProduto.coeficienteComprimento" label="Coeficiente Comprimento"
                v-if="obterDescricaoCauculo === 'ComprimentoLargura' || obterDescricaoCauculo === 'AlturaComprimento'"></v-text-field>
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
  private dimencoes!: DimencaoDto[]; 

  @item.State
  public itens!: ItemDto[];

  @produto.State
  public itensProdutoDimencao!: ItemProdutoDimencaoDto[];

  public direcoesCauculo: DimencaoDto[] = [];
  public select = new DimencaoDto();
  mounted() {
    this.direcoesCauculo = this.dimencoes.filter(x=>x.nome == 'Perimetro');/*.push({ id: 5, nome: 'Perimetro', descricao: 'LarguraAltura', direcaoCalculoId: 5 });
    this.direcoesCauculo.push({ id: 6, nome: 'Perimetro', descricao: 'AlturaComprimento', direcaoCalculoId: 6 });
    this.direcoesCauculo.push({ id: 7, nome: 'Perimetro', descricao: 'ComprimentoLargura', direcaoCalculoId: 7 });*/

    this.select.id = 0;
  }
  public quantidade = 1;
  public valorAdicional = 0;


  public get obterItensPerimetro() {
    return  this.itens.filter((x) => this.possuiTodasDimencoesPerimetro(this.itensProdutoDimencao, x.id));;
  }

  private possuiTodasDimencoesPerimetro(ipd: ItemProdutoDimencaoDto[], itemId : number){
    let data = ipd.filter((x)=> (x.dimencaoId === 5 || x.dimencaoId === 6 || x.dimencaoId === 7) && itemId === x.itemId)
    if (data.length > 2){
      return false;
    }
    return true;
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
  public get obterDescricaoCauculo(): string {
    return this.select.descricao;
  }

}
</script>