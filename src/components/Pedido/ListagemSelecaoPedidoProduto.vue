<template>
    <v-expansion-panels focusable v-if="dialog">
      <v-expansion-panel v-for="(produto, i) in produtos" :key="produto.id" class="mb-2">
        <v-expansion-panel-header> <h3>  {{ produto.nome }}</h3> 
          <v-divider vertical class="mx-2"></v-divider> 
          <h4>Categoria Produto: <h5>{{ produto.categoriaProduto.descricao}}</h5>  </h4> </v-expansion-panel-header>
        <v-expansion-panel-content class="mt-10">
   

            <v-row justify="center">

                <v-col cols="6" md="4"  sm="2">
              <v-text-field type="number" v-model="pedidoProduto.largura" label="Largura"
              ></v-text-field>
            </v-col>

            <v-col cols="6" md="4"  sm="2">
                <v-text-field type="number" v-model="pedidoProduto.altura" label="Altura"
               ></v-text-field>
            </v-col>
            <v-col cols="6" md="4"  sm="2">
                <v-text-field type="number"  v-model="pedidoProduto.comprimento" label="Comprimento"
                ></v-text-field>
            </v-col>

             <v-col cols="6" md="4"  sm="2">
                <v-text-field type="number"  v-model="pedidoProduto.quantidade" label="Quantidade"
                ></v-text-field>
            </v-col>

            <v-col cols="6" md="4"  sm="2">
                <v-text-field type="number"  v-model="pedidoProduto.valorAdicional" label="Valor Adicional"
                ></v-text-field>
            </v-col>
           
              
            <v-btn
           
            class="mt-9 mx-auto d-block text-none blue--text text--darken-3"
            depressed
            color="amber"
            min-width="300"
            @click="selecionarProduto(produto)"
          >
          <h2>Inserir produto</h2>
            
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
  
  const produto = namespace(StoreNamespaces.PRODUTO);
  const pedido = namespace(StoreNamespaces.PEDIDO);
  @Component({
    components:{

    }
  })
  export default class ListagemSelecaoPedidoProduto extends Vue {
    
    @produto.Action(ProdutosActionTypes.OBTER_PRODUTOS)
    private obterProduto!:() => Promise<any>;

       
      @pedido.State
    private pedidoProdutos!: PedidoProdutoDto[];
      
    @produto.State
    public produtos!: ProdutoDto[];
  

    @pedido.Action(PedidoActionTypes.ATUALIZAR_PEDIDO_PRODUTO_STORE)
    private adicionarPedidoProduto !:(PedProd: PedidoProdutoDto[]) => Promise<any>;

      @produto.Action(ProdutosActionTypes.REMOVER_PRODUTO_STORE)
    private removerProduto !:(id: number) => Promise<any>;

   public dialog = true;


   private async mounted(){
    await this.obterProduto();
    
   }

public  get produtoss(){
  return this.produtos;
}


  private lista : PedidoProdutoDto[] = [];
   public pedidoProduto = new PedidoProdutoDto();

  public async  selecionarProduto(produto: ProdutoDto) {
const prod = new PedidoProdutoDto(0,this.pedidoProduto.largura,this.pedidoProduto.altura, this.pedidoProduto.comprimento, this.pedidoProduto.valorAdicional ,this.pedidoProduto.quantidade,
produto.id,0, produto.nome);
  this.lista = this.pedidoProdutos;
  this.lista.push(prod);
 this.adicionarPedidoProduto(this.lista);
}



    
  }
  </script>
  <style>
</style>