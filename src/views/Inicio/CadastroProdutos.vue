<template>
<div>
  <etapa-escolha-produto></etapa-escolha-produto>
</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ProdutosActionTypes } from "@/store/Produtos/actions";
import { Action, namespace } from "vuex-class";
import { StoreNamespaces } from "@/store/namespaces";
import EtapaEscolhaProduto from "@/components/Produtos/Produto/EtapaEscolhaProduto.vue";
import { ItensActionTypes } from "@/store/Item/actions";
import { GlobalActionTypes } from "@/store/actions";


const produto = namespace(StoreNamespaces.PRODUTO);
@Component({
  components: {

    EtapaEscolhaProduto
  },
})
export default class CadastroProdutos extends Vue {
  public tab = null;
  @produto.Action(ProdutosActionTypes.OBTER_CATEGORIAS_PRODUTO)
    public obterCategoriassProduto!:() => Promise<any>;

      @produto.Action(ProdutosActionTypes.OBTER_ITEMS_PRODUTO_DIMENCAO)
    public obterItenssProduto!:() => Promise<any>;

      @produto.Action(ProdutosActionTypes.OBTER_PRODUTOS)
    public obterProdutos!:() => Promise<any>;

    
  

    @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>

  public async mounted(){
    this.AtivarCarregamento();
    await this.obterCategoriassProduto();
    //await this.obterTodosItens();
    await this.obterProdutos();
    this.DesativarCarregamento();
}
}

</script>
