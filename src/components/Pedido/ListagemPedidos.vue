<template>
  <v-expansion-panels focusable v-if="dialog">
    <v-expansion-panel v-for="(produto, i) in pedidos" :key="produto.id" class="mb-2">
      <v-expansion-panel-header> <h3>  {{ produto.descricao }}</h3> 
        <v-divider vertical class="mx-2"></v-divider> 
         <h4>Cliente: <h5>{{ produto.cliente?.nome}}</h5>  </h4> </v-expansion-panel-header> 
      <v-expansion-panel-content class="mt-10">
 

        
            
          <v-btn
         
          class="mt-9 mx-auto d-block text-none blue--text text--darken-3"
          depressed
          color="amber"
          min-width="300"
          @click="selecionarPedido(produto)"
        >
        <h2>Inserir produto</h2>
          
        </v-btn>
       
  
   
      
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

</template>
<script lang="ts">

import { Vue, Component } from "vue-property-decorator";
import { StoreNamespaces } from "@/store";
import { Action, namespace } from "vuex-class";
import { ProdutosActionTypes } from "@/store/Produtos/actions";
import ProdutoDto from "@/Model/Produtos/ProdutoDto";
import { GlobalActionTypes } from "@/store/actions";
import PedidoProdutoDto from "@/Model/Pedido/PedidoProdutoDto";
import { PedidoActionTypes } from "@/store/Pedido/actions";
import PedidoDto from "@/Model/Pedido/PedidoDto";

const produto = namespace(StoreNamespaces.PRODUTO);
const pedido = namespace(StoreNamespaces.PEDIDO);
@Component({
  components:{

  }
})
export default class ListagemPedidos extends Vue {
  
  @pedido.Action(PedidoActionTypes.OBTER_PEDIDOS)
  private obterPedidos!:() => Promise<any>;

 
    
  @pedido.State
  public pedidos!: PedidoDto[];


  @pedido.Action(PedidoActionTypes.ATUALIZAR_PEDIDO_PRODUTO_STORE)
  private adicionarPedidoProduto !:(PedProd: PedidoProdutoDto) => Promise<any>;

    @produto.Action(ProdutosActionTypes.REMOVER_PRODUTO_STORE)
  private removerProduto !:(id: number) => Promise<any>;

 public dialog = true;


 private async mounted(){
  await this.obterPedidos();
  
 }


 public pedidoProduto = new PedidoProdutoDto();

public async  selecionarPedido(produto: PedidoDto) {
this.pedidoProduto.produtoId = produto.id;
this.adicionarPedidoProduto(this.pedidoProduto);
this.removerProduto( produto.id);
}



  
}
</script>
<style>
</style>