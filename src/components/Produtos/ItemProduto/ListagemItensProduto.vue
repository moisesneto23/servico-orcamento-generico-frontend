<template>
  <div id="cadastroOrcamento">
    <v-tabs v-model="tab" grow icons-and-text background-color="#CE93D8" color="#311B92">
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Unidade
        <v-icon>mdi-checkbox-blank-circle</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Linear
        <v-icon>mdi-arrow-right-thin</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Perímetro
        <v-icon>mdi-network-strength-outline</v-icon>
      </v-tab>

      <v-tab href="#tab-4">
        Área
        <v-icon>mdi-square-outline</v-icon>
      </v-tab>

      <v-tab href="#tab-5">
        Volume
        <v-icon>mdi-package-variant-closed</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" data-app style="background-color: #f2f2f2;">

      <v-tab-item value="tab-1">
        <div>
          <v-card-text>
            <itens-unidade-selecao 
              :itensNaoAdicionados="itensNaoAdicionados"
              :produtoId="produtoId"
              @fechar-dialogo="fechaDialogo" ></itens-unidade-selecao>
          </v-card-text>
        </div>
      </v-tab-item>

      <v-tab-item value="tab-2">
        <div>
          <v-card-text>
            <itens-linear-selecao :itensNaoAdicionados="itensNaoAdicionados"
              :produtoId="produtoId"></itens-linear-selecao>
          </v-card-text>

        </div>
      </v-tab-item>

      <v-tab-item value="tab-3">
        <div>
          <v-card-text>
            <itens-perimetro-selecao :itensNaoAdicionados="itensNaoAdicionados"
              :produtoId="produtoId"></itens-perimetro-selecao>
          </v-card-text>

        </div>
      </v-tab-item>

      <v-tab-item value="tab-4">
        <div>
          <v-card-text>
            <itens-area-selecao :itensNaoAdicionados="itensNaoAdicionados" :produtoId="produtoId"></itens-area-selecao>
          </v-card-text>

        </div>
      </v-tab-item>

      <v-tab-item value="tab-5">
        <div>
          <v-card-text>
            <itens-volume-selecao :itensNaoAdicionados="itensNaoAdicionados"
              :produtoId="produtoId"></itens-volume-selecao>
          </v-card-text>

        </div>
      </v-tab-item>
      <hr>
      <v-card>

        itens selecionados
        
  <listagem-item-produto-edicao :produtoId="produtoId"></listagem-item-produto-edicao>
          <!-- <v-expansion-panel v-for="(item, i) in itensAdicionados" :key="i" class="mb-1" expand-icon="mdi-plus">
            <v-expansion-panel-header @click="removerItem(item)" expand-icon="mdi-minus"
              style="background-color: #f2f2f2;">
              <h3> {{ item.nome }}</h3>
              <v-divider vertical class="mx-2"></v-divider>
              <h4>Tipo:<h5> {{ }} </h5>
              </h4>
            </v-expansion-panel-header>
          </v-expansion-panel> -->


      </v-card>
    </v-tabs-items>



    <!-- <v-item-group
        class="mt-8 mx-4"
        :value="itensAdicionados"
      >
        <v-item v-for="item in itensAdicionados" :key="item.id" :value="item.id">
          <v-sheet
            :min-height="40"
            elevation="4"
            @click="removerItem(item)"
            class="pa-4 d-flex align-center justify-center"
            style="border-radius: 8px; cursor: pointer"
          >
            <span class="primary--text text-body-1 font-weight-bold text-center">
              {{ item.nome }}
            </span>
          </v-sheet>
        </v-item>
      </v-item-group> -->

  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ItensUnidadeSelecao from './itensSelecao/ItensUnidadeSelecao.vue';
import ItensLinearSelecao from './itensSelecao/ItensLinearSelecao.vue';
import ItensAreaSelecao from './itensSelecao/ItensAreaSelecao.vue';
import ItensVolumeSelecao from './itensSelecao/ItensVolumeSelecao.vue';
import ItensPerimetroSelecao from './itensSelecao/ItensPerimetroSelecao.vue';
import ItemDto from "@/Model/Itens/ItemDto";
import { ProdutosActionTypes } from "@/store/Produtos/actions";
import { StoreNamespaces } from "@/store/namespaces";
import { namespace } from "vuex-class";
import ItemProdutoDimencaoDto from "@/Model/Produtos/ItemProdutoDimencaoDto";
import ListagemItemProdutoEdicao from '@/components/Produtos/ItemProduto/ListagemItemProdutoEdicao.vue';

const produto = namespace(StoreNamespaces.PRODUTO);
const item = namespace(StoreNamespaces.ITEM);

@Component({
  components: {
    ItensUnidadeSelecao,
    ItensLinearSelecao,
    ItensAreaSelecao,
    ItensVolumeSelecao,
    ItensPerimetroSelecao,
    ListagemItemProdutoEdicao,
  },
})
export default class ListagemItensProduto extends Vue {
  @Prop()
  public produtoId!: number;

  

    @produto.Action(ProdutosActionTypes.OBTER_ITENS_PRODUTO_POR_PRODUTO)
  private ObterItensPorProduto!: (id: number) => Promise<void>;

  @produto.State
  private itensProdutoDimencao!: ItemProdutoDimencaoDto[];

  @item.State
  public itens!: ItemDto[];

  public tab = null;
  public dialogoItemProduto = false;
  public itensSelecionados: ItemDto[] = [];

  mounted(){
    this.ObterItensPorProduto(this.produtoId);
  }

  public adicionaItemProdutoSelecao() {
    this.dialogoItemProduto = false;
  }
  public obterItensSelecionados(item: ItemDto) {
    this.itensSelecionados.push(item);
  }

  public fechaDialogo() {
    this.$emit('fecha-dialogo');
  }
  public get itensNaoAdicionados(): ItemDto[] {
    let itensRetorno: ItemDto[] = [];
    for (const item of this.itens) {
    if (!this.itensProdutoDimencao.some(itemProduto => itemProduto.itemId === item.id && this.produtoId === itemProduto.produtoId)) {
      itensRetorno.push(item);
    }
  }
    if (itensRetorno.length > 0)
      return itensRetorno;
    return this.itens;
  }

  verificaItemPertenceAoProduto(item: ItemDto, itemProduto: ItemProdutoDimencaoDto): boolean {
    if (this.produtoId ===itemProduto.produtoId && item.id === itemProduto.itemId)
      return true;
    return false;
  }

 
}
</script>
<style scoped>#cadastroOrcamento {
  background-color: rgb(186, 186, 186);
}</style>