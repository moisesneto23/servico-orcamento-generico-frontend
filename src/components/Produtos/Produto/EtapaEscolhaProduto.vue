<template>


    <div id="cadastroOrcamento">
  <hr>
  <div id="cadastro de produto completo">
  </div>
      <v-tabs v-model="tab" class="mt-2" grow icons-and-text background-color="#9575CD" color="f2f2f2f">
        <v-tabs-slider></v-tabs-slider>
  
        <v-tab href="#tab-3">
          Produtos
          <v-icon>mdi-shape-square-plus</v-icon>
        </v-tab>
  
        <v-tab href="#tab-1" >
          Categorias
          <v-icon>mdi-format-list-group-plus</v-icon>
        </v-tab>
      
      </v-tabs>
  
      <v-tabs-items v-model="tab" data-app style="background-color: #f2f2f2;">
  
        <v-tab-item value="tab-3">
          <div>
            <v-card-text>
              <listagem-produto></listagem-produto>
            </v-card-text>
            <cadastro-produto></cadastro-produto>
          </div>
        </v-tab-item>
  
        <v-tab-item value="tab-1">
          <div>
            <v-card-text>
              <listagem-categoria-produto></listagem-categoria-produto>
            </v-card-text>
            <cadastro-categoria-produto></cadastro-categoria-produto>
          </div>
        </v-tab-item>
  
      </v-tabs-items>
  
    </div>
  </template>
  <script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import CadastroCategoriaProduto from "@/components/Produtos/CategoriaProduto/CadastroCategoriaProduto.vue";
  import ListagemCategoriaProduto from '@/components/Produtos/CategoriaProduto/ListagemCategoriaProduto.vue'
  import ListagemProduto from '@/components/Produtos/Produto/ListagemProduto.vue';
  import CadastroProduto from '@/components/Produtos/Produto/CadastroProduto.vue';
  import { namespace } from "vuex-class";
  import { StoreNamespaces } from "@/store/namespaces";
  const produto = namespace(StoreNamespaces.PRODUTO);
  @Component({
    components: {
      CadastroCategoriaProduto,
      ListagemCategoriaProduto,
      ListagemProduto,
      CadastroProduto
    },
  })
export default class EtapaEscolhaProduto extends Vue {
    public tab = null;
}
</script>