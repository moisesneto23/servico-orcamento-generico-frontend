<template>
    <v-expansion-panels focusable v-if="dialog">
      <v-expansion-panel v-for="(produto, i) in pedidoProdutos" :key="i" class="mb-2">
        <v-expansion-panel-header color="#C8E6C9"> 
            <h3>  {{ produto.nomeProduto }}</h3> 
         
           </v-expansion-panel-header>
        <v-expansion-panel-content color="#E8F5E9">
   

            <v-row justify="center">

                <v-col cols="6" md="4"  sm="2" v-if="produto.possuiLargura">
              <v-text-field type="number" v-model="produto.largura" label="Largura"
              ></v-text-field>
            </v-col>

            <v-col cols="6" md="4"  sm="2" v-if="produto.possuiAltura">
                <v-text-field type="number" v-model="produto.altura" label="Altura"
               ></v-text-field>
            </v-col>
            <v-col cols="6" md="4"  sm="2" v-if="produto.possuiComprimento">
                <v-text-field type="number"  v-model="produto.comprimento" label="Comprimento"
                ></v-text-field>
            </v-col>

             <v-col cols="6" md="4"  sm="2">
                <v-text-field type="number"  v-model="produto.quantidade" label="Quantidade"
                ></v-text-field>
            </v-col>

            <v-col cols="6" md="4"  sm="2">
                <v-text-field type="number"  v-model="produto.valorAdicional" label="Valor Adicional"
                ></v-text-field>
            </v-col>
           
              
            <v-btn
           
            class="mt-9 mx-auto d-block text-none blue--text text--darken-3"
            depressed
            color="amber"
            min-width="300"
            @click="removerProdutoPedido(produto)"
          >
          <h2>Remover produto do pedido</h2>
            
          </v-btn>
          </v-row>
    
     
        
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
  export default class PedidoProdutosSelecionados extends Vue {
    

    @pedido.Action(PedidoActionTypes.OBTER_PEDIDO_PRODUTOS)
  public obterProdutosDoPedido!:(pedidoId: number) => Promise<any>;
    
      
    @pedido.State
    public pedidoProdutos!: PedidoProdutoDto[];

    @produto.State
    public produtos!: ProdutoDto[];

      @pedido.Action(PedidoActionTypes.REMOVER_PEDIDO_PRODUTO)
    private removePedidoProduto !:(id: number) => Promise<any>;
      
      @pedido.State
    private pedidoSolicitacao!: PedidoDto;

async mounted() {
 await this.obterProdutosDoPedido(this.pedidoSolicitacao.id);
}
   public dialog = true;


  public async  removerProdutoPedido(pedidoProduto: PedidoProdutoDto) {
    this.removePedidoProduto(pedidoProduto.id)
    
  }


    
  }
  </script>
  <style>
</style>