<template>
  <div id="cadastroOrcamento">
    <v-tabs v-model="tab" class="mt-2" grow icons-and-text background-color="#9575CD" color="f2f2f2f">
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-3">
        Produtos
        <v-icon>mdi-shape-square-plus</v-icon>
      </v-tab>
     

      <v-tab href="#tab-2">
        Tipos
        <v-icon>mdi-view-grid-plus-outline</v-icon>
      </v-tab>

      <v-tab href="#tab-1" >
        Categorias
        <v-icon>mdi-format-list-group-plus</v-icon>
      </v-tab>
    
    </v-tabs>

    <v-tabs-items v-model="tab" data-app>

      <v-tab-item value="tab-3">
        <v-card>
          <v-card-text>
            <listagem-produto></listagem-produto>
          </v-card-text>
          <cadastro-produto></cadastro-produto>
        </v-card>
      </v-tab-item>
     

      <v-tab-item value="tab-2">
        <v-card>
          <v-card-text>
            <listagem-tipo-produto></listagem-tipo-produto>
          </v-card-text>
          <cadastro-tipo-produto></cadastro-tipo-produto>
        </v-card>
      </v-tab-item>

      <v-tab-item value="tab-1">
        <v-card>
          <v-card-text>
            <listagem-categoria-produto></listagem-categoria-produto>
          </v-card-text>
          <cadastro-categoria-produto></cadastro-categoria-produto>
        </v-card>
      </v-tab-item>

    </v-tabs-items>


  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CadastroCategoriaProduto from "@/components/Produtos/CategoriaProduto/CadastroCategoriaProduto.vue";
import CadastroTipoProduto from '@/components/Produtos/TipoProduto/CadastroTipoProduto.vue';
import ListagemCategoriaProduto from '@/components/Produtos/CategoriaProduto/ListagemCategoriaProduto.vue'
import ListagemTipoProduto from '@/components/Produtos/TipoProduto/ListagemTipoProduto.vue'
import ListagemProduto from '@/components/Produtos/Produto/ListagemProduto.vue';
import CadastroProduto from '@/components/Produtos/Produto/CadastroProduto.vue';
@Component({
  components: {
    CadastroCategoriaProduto,
    CadastroTipoProduto,
    ListagemCategoriaProduto,
    ListagemTipoProduto,
    ListagemProduto,
    CadastroProduto
  },
})
export default class CadastroProdutos extends Vue {
  public tab = null;
}
</script>
<style scoped>
#cadastroOrcamento{
  background-color: rgb(60, 172, 224);
}
</style>