<template>
  <div justify="center">
    <v-dialog v-model="dialog" persistent max-width="800px">
      <v-card min-height="800px">
        <v-card-title>
          <span class="text-h5">Adicionar Itens ao Produto</span>
        </v-card-title>
        <listagem-itens-produto :produtoId="produtoId"></listagem-itens-produto>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="adicionarItens">
            Adicicionar itens
          </v-btn>
          <v-btn color="red" text @click="dialog = false">
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn @click="dialog = true" color="primary" class="mb-4">
      <v-icon>mdi-format-list-group-plus</v-icon>
      Adicionar Itens ao produto
    </v-btn>
  </div>
</template>


<script lang="ts">
import CategoriaDto from "@/Model/Itens/CategoriaDto";
import { Vue, Component, Prop } from "vue-property-decorator";
import { StoreNamespaces } from '@/store';
import { namespace } from 'vuex-class';
import ListagemItensProduto from './ListagemItensProduto.vue'
import ItemDto from "@/Model/Itens/ItemDto";
import { ProdutosActionTypes } from "@/store/Produtos/actions";
import ProdutoItemDimencaoDto from "@/Model/Produtos/ProdutoItemDimencaoDto";

const produto = namespace(StoreNamespaces.PRODUTO);
@Component({
  components: {
    ListagemItensProduto,
  }
})
export default class DialogoItemProduto extends Vue {

  @Prop()
  public produtoId!: number;

  @produto.Action(ProdutosActionTypes.SALVAR_ITEM_PRODUTO)
  public salvaItensProduto!: (categoria: CategoriaDto) => Promise<any>;

  public dialog = false;

  public itensSelecionados!: ItemDto[];
  public adicionarItens() {
    return this.itensSelecionados;
  }
  public async salvarItensProduto() {
    this.$emit('produto-adicao-concluido')
  }
}
</script>