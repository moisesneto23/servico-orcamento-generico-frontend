<template>
    <div justify="center" id="cadastroItemDimencao">

        <div>
            <h2>Criar Item</h2>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field 
                            label="Nome do Item*" v-model="item.nome" required
                            color="teal" 
                            outlined
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-select 
                            variant="outlined"
                            :items="cauculoPerimetro" 
                            label="Selecione a direçao de calculo*" 
                            required
                            v-model="selectDirecaoCauculo"
                            color="teal"
                            outlined
                            >  
                            </v-select>
                        </v-col>
                     
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field 
                            variant="outlined"
                            label="Valor de compra" 
                            hint="custo de compra do item"
                            :rules="valorRules"
                            v-model="valorCompraStr"
                            color="teal"
                            type="number"
                            prefix="R$"
                            outlined
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Valor de venda" hint="pretenção de venda do item"
                                v-model="valorVendaStr"
                                color="teal"
                                prefix="R$"
                                type="number"
                                :rules="valorRules"
                                outlined
                                ></v-text-field>
                        </v-col>
                    </v-row>

<hr>
                    
      <v-row>
        <v-col cols="12" sm="6">
          <!-- <v-text-field
            v-model="Colaborador.nome"
            label="Nome do Proprietario"
            required
            color="teal"
            :error-messages="getErrorMessage('nomeGerente')"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
          v-model="Empresa.telefone"
            label="Telefone da empresa"
            required
            v-mask="'(##) #####-####'"
            color="teal"
            :error-messages="getErrorMessage('telefone')"
          ></v-text-field> -->
        </v-col>

      </v-row>

                </v-container>
                <small>*indica campo obrigatorio</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark @click="selecuinaIdSelect(), salvarItem()">
                    Salvar
                </v-btn>
                <v-btn color="blue" text @click="dialogItem = false">
                    Cancelar
                </v-btn>
            </v-card-actions>
        </div>
        <v-btn @click="dialogItem = true" color="primary" :rounded="true">
            <v-icon>mdi-shape-square-plus</v-icon>
            Criar Item de perímetro
        </v-btn>


    </div>
</template>


<script lang="ts">
import { Dimencao } from "@/Model/Enum/DimencaoEnum";
import { DirecaoCalculo } from "@/Model/Enum/DirecaoCalculoEnum";
import ItemDto from "@/Model/Itens/ItemDto";
import TipoModel from "@/Model/Itens/TipoModel";
import { StoreNamespaces } from "@/store";
import { ItensActionTypes } from "@/store/Item/actions";
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
const item = namespace(StoreNamespaces.ITEM);

@Component({})
export default class CadastroItemDimensionalidade extends Vue {
    @item.Action(ItensActionTypes.SALVAR_ITEM)
    public salvaItem!: (item: ItemDto) => Promise<any>;

    @item.State
    private tipos!: TipoModel[];
    public cauculoPerimetro = Object.values(Dimencao);
    public item = new ItemDto();
    public selecuinaIdSelect() {
        this.idSelect = this.tipos.find(x => x.descricao == this.select)?.id;
    }
    public comprimentoBarraStr = '1';
    public valorVendaStr = '';
    public valorCompraStr = '';
    public idSelect?: number;
    public select = '';
    public selectDirecaoCauculo = '';

    public async salvarItem() {
        // switch (this.selectDirecaoCauculo) {
        //   case 'Largura e altura': this.item.dimencaoId = Dimencao.PerimetroLarguraAltura;
        //     break;
        //   case 'Altura e comprimento': this.item.dimencaoId = Dimencao.PerimetroComprimentoAltura;
        //     break;
        //   case 'Comprimento e largura': this.item.dimencaoId = Dimencao.PerimetroLarguraComprimento;
        //     break;
        // }
        // let comprimentoBarra = parseFloat(this.comprimentoBarraStr);
        // this.item.tipoItemId = this.idSelect || 0;
        // this.item.direcaoCalculoId = DirecaoCalculo.Indefinida;
        // this.item.valorCompra = parseFloat(this.valorCompraStr) / comprimentoBarra;
        // this.item.valorVenda = parseFloat(this.valorVendaStr) / comprimentoBarra;
        await this.salvaItem(this.item).then(() => {
            this.dialogItem = false;
        })
    }

    public get descricaoTipos() {
        return this.tipos.map((c) => c.descricao);
    }
    public dialogItem = false;

    get valorRules() {
    return [
      (v: string) => !!v || 'Valor é obrigatório',
      (v: string) => /^\d+(\.\d{1,2})?$/.test(v) || 'Valor inválido',
    ];
  }
}
</script>
<style scoped>
 #cadastroItemDimencao{
    background-color: rgb(241, 241, 241);
 }
</style>