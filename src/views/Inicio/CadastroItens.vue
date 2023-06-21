<template>
  <div id="cadastroOrcamento"> 
    <cadastro-item class="mb-8"></cadastro-item>
    <listagem-item></listagem-item>
   
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ListagemItem from '@/components/Itens/Item/ListagemItem.vue';
import { StoreNamespaces } from "@/store/namespaces";
import { Action, namespace } from "vuex-class";
import { ItensActionTypes } from "@/store/Item/actions";
import CadastroItem from '@/components/Itens/Item/dimencionalidades/CadastroItem.vue';
import { GlobalActionTypes } from "@/store/actions";
const item = namespace(StoreNamespaces.ITEM);
@Component({
  components: {
    ListagemItem,
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