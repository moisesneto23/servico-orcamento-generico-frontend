<template>
  <div id="cadastroOrcamento">

<h1>tela em construção</h1>
<CategoriasProdutoOrcamento></CategoriasProdutoOrcamento>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CategoriasProdutoOrcamento from '@/components/Orcamento/CategoriasProdutoOrcamento.vue';
@Component({
  components: {
    CategoriasProdutoOrcamento,
  },
})
export default class CadastroOrcamento extends Vue {
  public tab = null;
}
</script>
<style scoped>
#cadastroOrcamento{
  background-color: rgb(186, 186, 186);
}
</style>