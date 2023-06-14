<template>
<div>
  <etapa-escolha-produto></etapa-escolha-produto>
</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ProdutosActionTypes } from "@/store/Produtos/actions";
import { namespace } from "vuex-class";
import { StoreNamespaces } from "@/store/namespaces";
import EtapaEscolhaProduto from "@/components/Produtos/Produto/EtapaEscolhaProduto.vue";
import { ItensActionTypes } from "@/store/Item/actions";

const item =namespace(StoreNamespaces.ITEM);
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

    //   @produto.Action(ProdutosActionTypes.OBTER_TIPOS_PRODUTO)
    // public obterTiposProduto!:() => Promise<any>;
      @item.Action(ItensActionTypes.OBTER_ITENS)
  public obterTodosItens!:() => Promise<any>;

  public async mounted(){
    await this.obterCategoriassProduto();
    await this.obterTodosItens();
    await this.obterProdutos();
   // await this.obterTiposProduto();
}
}

</script>
<style scoped>
#cadastroOrcamento{
  background-color: rgb(60, 172, 224);
}
</style>