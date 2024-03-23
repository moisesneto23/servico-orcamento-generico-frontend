<template>
  <v-expansion-panels focusable v-if="dialog">
    <v-expansion-panel v-for="(pedido, i) in pedidos" :key="pedido.id" class="mb-2">
      <v-expansion-panel-header> <h3>  {{ pedido.descricao }}</h3> 
        <v-divider vertical class="mx-2"></v-divider> 
         <h4>Cliente: <h5>{{ pedido.cliente?.nome}}</h5>  </h4> </v-expansion-panel-header> 
      <v-expansion-panel-content class="mt-10">
 
<v-btn color="orange" v-if="pedido.indicaFinaliado && !pedido.indicaVenda">
  <v-icon color="success"
  size="x-large">mdi-cash-sync</v-icon>
  Realizar venda
</v-btn>
        <v-col cols="5" v-if="!pedido.indicaVenda">
                <v-btn
                  text
                  @click="excluirPedido(pedido.id)"
                  ><v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
                <h3 class="text-center">Escluir</h3>
              </v-col>
          <v-btn
         
          class="mt-9 mx-auto d-block text-none blue--text text--darken-3"
          depressed
          color="amber"
          min-width="300"
          @click="editarPedido(pedido)"
        >
        <h2>{{pedido.indicaFinaliado ? 'Editar pedido' : 'Finalize o pedido'}}</h2>
        </v-btn>
        <div v-if="pedido.indicaFinaliado">
          <h3>R$ {{ pedido.valorTotal }}</h3>
        </div>
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
import Pedido from "@/store/Pedido";

const produto = namespace(StoreNamespaces.PRODUTO);
const pedido = namespace(StoreNamespaces.PEDIDO);
@Component({
  components:{

  }
})
export default class ListagemPedidos extends Vue {
  
  @pedido.Action(PedidoActionTypes.OBTER_PEDIDOS)
  private obterPedidos!:() => Promise<any>;

    @pedido.Action(PedidoActionTypes.REMOVER_PEDIDO)
  private excluiPedido!:(id: number) => Promise<any>;
    
  @pedido.State
  public pedidos!: PedidoDto[];


  @pedido.Action(PedidoActionTypes.SET_PEDIDO_STORE)
  private selecionaPedido !:(PedProd: PedidoDto) => Promise<any>;

 public dialog = true;


 private async mounted(){
  await this.obterPedidos();
  
 }

excluirPedido(id: number) {
  this.excluiPedido(id)
}
 public pedidoProduto = new PedidoProdutoDto();

public async  editarPedido(pedido: PedidoDto) {
  this.selecionaPedido(pedido);
  this.$emit('pedido-selecionado');
}



  
}
</script>
<style>
</style>