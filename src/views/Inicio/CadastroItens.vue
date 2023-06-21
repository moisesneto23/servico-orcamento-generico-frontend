<template>
  <div id="cadastroOrcamento">
    <!-- <v-tabs v-model="tab" grow icons-and-text background-color="#4B5" color="black">
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Categorias
        <v-icon>mdi-format-list-group-plus</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Tipos
        <v-icon>mdi-view-grid-plus-outline</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Itens
        <v-icon>mdi-shape-square-plus</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" data-app  style="background-color: #f2f2f2;">

      <v-tab-item value="tab-1">
        <div>
          <v-card-text>
            <listagem-categoria></listagem-categoria>
          </v-card-text>
          <cadastro-categoria></cadastro-categoria>
        </div>
      </v-tab-item>

      <v-tab-item value="tab-2">
        <div>
          <v-card-text>
            <listagem-tipo></listagem-tipo>
          </v-card-text>
          <cadastro-tipo></cadastro-tipo>
        </div>
      </v-tab-item>

      <v-tab-item value="tab-3">
        <div>
          <v-card-text>
            <listagem-item></listagem-item>
          </v-card-text>
        </div>
      </v-tab-item>

    </v-tabs-items> versão antiga desativada   <listagem-item></listagem-item> -->
   
    <cadastro-item class="mb-8"></cadastro-item>
    <listagem-item></listagem-item>
   
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";


import ListagemCategoria from '@/components/Itens/Categoria/ListagemCategoria.vue'
import ListagemItem from '@/components/Itens/Item/ListagemItem.vue';
import { StoreNamespaces } from "@/store/namespaces";
import { Action, namespace } from "vuex-class";
import { ItensActionTypes } from "@/store/Item/actions";
import CadastroItemDimensionalidade from "@/components/Itens/Item/CadastroItemDimensionalidade.vue";
import CadastroItem from '@/components/Itens/Item/dimencionalidades/CadastroItem.vue';
import { GlobalActionTypes } from "@/store/actions";
const item = namespace(StoreNamespaces.ITEM);
@Component({
  components: {
   
    ListagemCategoria,
    ListagemItem,
    CadastroItemDimensionalidade,
    CadastroItem,
  },
})
export default class CadastroOrcamento extends Vue {
  public tab = null;

    @item.Action(ItensActionTypes.OBTER_ITENS)
  public obterTodosItens!:() => Promise<any>;
  
    @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>
    public async mounted(){
   
    this.AtivarCarregamento();
     this.obterTodosItens().then(()=>{
        this.DesativarCarregamento();
      }).catch(()=>this.DesativarCarregamento()); 
  }
}
</script>
<style scoped>
#cadastroOrcamento{
  background-color: rgb(186, 186, 186);
}
</style>