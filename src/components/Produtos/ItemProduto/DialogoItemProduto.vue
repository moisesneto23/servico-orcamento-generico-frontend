<template>
  <div justify="center">
    <v-dialog v-model="dialog" persistent max-width="1000px" >
      <v-card min-height="800px">
        <v-card-title>
          <span class="text-h5">Adicionar Itens ao Produto</span>
        </v-card-title>
        <listagem-itens-produto :produtoId="produtoId" @fecha-dialogo="dialog = false"></listagem-itens-produto>
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
import { Vue, Component, Prop } from "vue-property-decorator";
import { StoreNamespaces } from '@/store';
import { namespace } from 'vuex-class';
import ListagemItensProduto from './ListagemItensProduto.vue'
import ItemDto from "@/Model/Itens/ItemDto";


const produto = namespace(StoreNamespaces.PRODUTO);
@Component({
  components: {
    ListagemItensProduto,
  }
})
export default class DialogoItemProduto extends Vue {

  @Prop()
  public produtoId!: number;

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
<style>
.fullscreen-dialog {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>