
<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="(item, i) in itemProdutoDimencao" :key="i">
      <v-expansion-panel-header>
        <h3> {{ item.nome }}</h3>
        <v-divider vertical class="mx-2"></v-divider>
        <h4>Dimenção:<h5> {{ obterNomeDimencao(item.dimencaoId) }} </h5>
        </h4>
      </v-expansion-panel-header>
      <v-expansion-panel-content>


        <div class="item-linear" v-if="item.dimencaoId > 1 && item.dimencaoId < 5">
          <v-row>

            <v-col cols="12" sm="6">
              <v-select color="teal" v-model="select" :items="direcoesCauculoLinear" item-text="descricao" item-value="id"
                label="Select" persistent-hint return-object single-line></v-select>
            </v-col>

          </v-row>
          <v-row>
            <v-col cols="4" sm="4" md="4">
              <v-text-field color="teal" type="number" v-model="item.somatorioLargura" label="Somatorio Largura"
                v-if="obterIdDirecaoCauculo === 2"></v-text-field>
              <v-text-field color="teal" type="number" v-model="item.somatorioALtura" label="Somatorio Altura"
                v-else-if="obterIdDirecaoCauculo === 3"></v-text-field>
              <v-text-field color="teal" type="number" v-model="item.somatorioComprimento" label="Sommatorio Comprimento"
                v-else-if="obterIdDirecaoCauculo === 4"></v-text-field>
            </v-col>
          </v-row>
        </div>

        <div class="item-perimetro" v-if="item.dimencaoId > 4 && item.dimencaoId < 8">
          <v-row>

            <v-col cols="12" sm="6">
              <v-select color="teal" v-model="select" :items="direcoesCauculoPerimetro" item-text="descricao" item-value="id"
                label="Select" persistent-hint return-object single-line></v-select>
            </v-col>

          </v-row>
          <v-row>

            <v-col cols="4" sm="4" md="4">
              <v-text-field color="teal" type="number" v-model="item.somatorioLargura" label="Somatorio Largura"
                v-if="obterIdDirecaoCauculo === 5 || obterIdDirecaoCauculo === 7"></v-text-field>
              <v-text-field color="teal" type="number" v-model="item.somatorioALtura" label="Somatorio Altura"
                v-if="obterIdDirecaoCauculo === 5 || obterIdDirecaoCauculo === 6"></v-text-field>
              <v-text-field color="teal" type="number" v-model="item.somatorioComprimento" label="Sommatorio Comprimento"
                v-if="obterIdDirecaoCauculo === 6 || obterIdDirecaoCauculo === 7"></v-text-field>
            </v-col>

            <v-col cols="4" sm="4" md="4">
              <v-text-field color="teal" type="number" v-model="item.coeficienteLargura" label="Coeficiente Largura"
                v-if="obterIdDirecaoCauculo === 5 || obterIdDirecaoCauculo === 7"></v-text-field>
              <v-text-field color="teal" type="number" v-model="item.coeficienteAltura" label="Coeficiente Altura"
                v-if="obterIdDirecaoCauculo === 5 || obterIdDirecaoCauculo === 6"></v-text-field>
              <v-text-field color="teal" type="number" v-model="item.coeficienteComprimento" label="Coeficiente Comprimento"
                v-if="obterIdDirecaoCauculo === 6 || obterIdDirecaoCauculo === 7"></v-text-field>
            </v-col>
          </v-row>
        </div>

        <div class="item-area" v-if="item.dimencaoId > 7 && item.dimencaoId < 11">
          <v-row>

            <v-col cols="12" sm="6">
              <v-select color="teal" v-model="select" :items="direcoesCauculoArea" item-text="descricao" item-value="id"
                label="Select" persistent-hint return-object single-line></v-select>
            </v-col>

          </v-row>
          <v-row>

            <v-col cols="4" sm="4" md="4">
              <v-text-field color="teal" type="number" v-model="item.somatorioLargura" label="Somatorio Largura"
                v-if="obterIdDirecaoCauculo === 8 || obterIdDirecaoCauculo === 10"></v-text-field>
              <v-text-field color="teal" type="number" v-model="item.somatorioALtura" label="Somatorio Altura"
                v-if="obterIdDirecaoCauculo === 8 || obterIdDirecaoCauculo === 9"></v-text-field>
              <v-text-field color="teal" type="number" v-model="item.somatorioComprimento" label="Sommatorio Comprimento"
                v-if="obterIdDirecaoCauculo === 9 || obterIdDirecaoCauculo === 10"></v-text-field>
            </v-col>

            <v-col cols="4" sm="4" md="4">
              <v-text-field color="teal" type="number" v-model="item.coeficienteLargura" label="Coeficiente Largura"
                v-if="obterIdDirecaoCauculo === 8 || obterIdDirecaoCauculo === 10"></v-text-field>
              <v-text-field color="teal" type="number" v-model="item.coeficienteAltura" label="Coeficiente Altura"
                v-if="obterIdDirecaoCauculo === 8 || obterIdDirecaoCauculo === 9"></v-text-field>
              <v-text-field color="teal" type="number" v-model="item.coeficienteComprimento" label="Coeficiente Comprimento"
                v-if="obterIdDirecaoCauculo === 9 || obterIdDirecaoCauculo === 10"></v-text-field>
            </v-col>
          </v-row>
        </div>

        <v-row>
          <v-col cols="4" sm="4" md="4">
            <v-text-field type="number" v-model="item.quantidade" label="Quantidade de itens*" color="teal" required></v-text-field>
          </v-col>

          <v-col cols="4" sm="6" md="4">
            <v-text-field type="number" v-model="item.valorAdicional" label="Valor adicional" step="0.01" locale="pt-BR" color="teal"
              prefix="R$" required></v-text-field>
          </v-col>
          <v-col>
            <v-btn color="primary" class="mt-5" @click="editarItemProduto(item)"
              :disabled="!item.quantidade || item.quantidade < 1">
              Editar
            </v-btn>
            <v-col>
              <v-btn text @click="excluirItemProduto(item.id)"><v-icon>mdi-trash-can-outline</v-icon> </v-btn>
              <h3 class="text-center">Excluir</h3>
            </v-col>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { DimencaoDto } from "@/Model/Itens/DimencaoDto";
import ItemProdutoDimencaoDto from "@/Model/Produtos/ItemProdutoDimencaoDto";
import { ProdutosActionTypes } from "@/store/Produtos/actions";
import { GlobalActionTypes } from "@/store/actions";
import { StoreNamespaces } from "@/store/namespaces";
import { Vue, Component, Prop } from "vue-property-decorator";
import { Action, namespace } from "vuex-class";

const produto = namespace(StoreNamespaces.PRODUTO);

@Component({
  components: {
  }
})
export default class ListagemItemProdutoEdicao extends Vue {

  @Prop()
  public itemProdutoDimencao!: ItemProdutoDimencaoDto[];

  @produto.Action(ProdutosActionTypes.REMOVER_ITEM_PRODUTO_DIMENCAO)
  private removeItemProduto!: (id: number) => Promise<void>;

  @produto.Action(ProdutosActionTypes.EDITAR_ITEM_PRODUTO_DIMENCAO)
  private editarItemProdutoDimencao!: (itemProduto: ItemProdutoDimencaoDto) => Promise<void>;

    @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>

  public editarItemProduto(itemProduto: ItemProdutoDimencaoDto) {
    this.AtivarCarregamento();
    this.editarItemProdutoDimencao(itemProduto).then(()=>{
      this.DesativarCarregamento();
    });
  }
  public async excluirItemProduto(id: number) {
    this.AtivarCarregamento();
    await this.removeItemProduto(id).then(()=>{
      this.DesativarCarregamento();
    });
  }

  public obterNomeDimencao(dimencaoId: number) {
    switch (dimencaoId) {
      case 1:
        return 'Unidade';
      case 2:
        return 'Linear Largura'
      case 3:
        return 'Linear Altura'
      case 4:
        return 'Linear Comprimento'
      case 5:
        return 'Perimetro LarguraAltura'
      case 6:
        return 'Perimetro AlturaComprimento'
      case 7:
        return 'Perimetro ComprimentoLargura'
      case 8:
        return 'Área LarguraAltura'
      case 9:
        return 'Área AlturaComprimento'
      case 10:
        return 'Área ComprimentoLargura'
      case 11:
        return 'Volume'


      default:
        break;
    }
  }
  public direcoesCauculoLinear: DimencaoDto[] = [];
  public direcoesCauculoPerimetro: DimencaoDto[] = [];
  public direcoesCauculoArea: DimencaoDto[] = [];
  public select = new DimencaoDto();
  mounted() {
    const ai = { id: 2, nome: 'Linear', descricao: 'Largura', direcaoCalculoId: 2 };
    const aa = { id: 3, nome: 'Linear', descricao: 'Altura', direcaoCalculoId: 3 };
    const aaa = { id: 4, nome: 'Linear', descricao: 'Comprimento', direcaoCalculoId: 4 };

    const pai = { id: 5, nome: 'Perimetro', descricao: 'LarguraAltura', direcaoCalculoId: 5 };
    const paa = { id: 6, nome: 'Perimetro', descricao: 'AlturaComprimento', direcaoCalculoId: 6 };
    const paaa = { id: 7, nome: 'Perimetro', descricao: 'ComprimentoLargura', direcaoCalculoId: 7 };

    const apai = { id: 8, nome: 'Area', descricao: 'LarguraAltura', direcaoCalculoId: 5 };
    const apaa = { id: 9, nome: 'Area', descricao: 'AlturaComprimento', direcaoCalculoId: 6 };
    const apaaa = { id: 10, nome: 'Area', descricao: 'ComprimentoLargura', direcaoCalculoId: 7 };

    const vol = { id: 11, nome: 'Volume', descricao: 'Volume', direcaoCalculoId: 8 };
    this.direcoesCauculoLinear.push(ai);
    this.direcoesCauculoLinear.push(aa);
    this.direcoesCauculoLinear.push(aaa);

    this.direcoesCauculoPerimetro.push(pai);
    this.direcoesCauculoPerimetro.push(paa);
    this.direcoesCauculoPerimetro.push(paaa);

    this.direcoesCauculoArea.push(apai);
    this.direcoesCauculoArea.push(apaa);
    this.direcoesCauculoArea.push(apaaa);

    this.select.id = 0;
  }
  public get obterIdDirecaoCauculo(): number {
    return this.select.id;
  }
}
</script>

