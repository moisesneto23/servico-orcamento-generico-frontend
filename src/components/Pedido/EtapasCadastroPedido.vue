<template>
    <div id="etapasCadastroPedido">
     <InserirPedido @inserindo-pedido="preencheDescricaoPedido($event)" v-if="tab ===1"></InserirPedido>
     <ListagemCliente v-if="tab === 2" @selecionou-cliente="clienteSelecionado($event)"/>
  <InserirProdutoPedido  v-else-if="tab === 3"
  :pedido="pedido"
  @solicitar-finaliacao-pedido="finalizacaoPedido()"
  >
</InserirProdutoPedido>

  <!-- <v-btn rounded color="primary">Proxima Etapa</v-btn> -->
    </div>
  </template>
  <script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import InserirPedido from './InserirPedido.vue';
  import InserirProdutoPedido from './InserirProdutoPedido.vue';
  import PedidoDto from "@/Model/Pedido/PedidoDto";
  import { PedidoActionTypes } from "@/store/Pedido/actions";
import { StoreNamespaces } from "@/store/namespaces";
import { namespace } from "vuex-class";
import PedidoProdutoDto from "@/Model/Pedido/PedidoProdutoDto";
import ListagemCliente from "../Clientes/ListagemCliente.vue";
import ClienteDto from "@/Model/ClienteDto";

  const pedido = namespace(StoreNamespaces.PEDIDO);
  @Component({
    components: {
        ListagemCliente,
        InserirPedido,
        InserirProdutoPedido,
    },
  })
  export default class EtapasCadastroPedido extends Vue {
    public tab = 1;
    public pedido = new PedidoDto();

    public preencheDescricaoPedido(descricao: string){
      this.pedido.descricao = descricao;
      this.tab = 2
    }
    
    @pedido.State
    private pedidoSolicitacao!: PedidoDto;

    @pedido.Action(PedidoActionTypes.SALVAR_PEDIDO)
  public salvarPedido!:(pedido : PedidoDto) => Promise<PedidoDto>;

    @pedido.Action(PedidoActionTypes.PEDIDO_FINALIACAO)
  public finalizaPedido!:(id : number) => Promise<PedidoDto>;

    public selecinouPedido(pedido: PedidoProdutoDto[]){
      this.pedido.pedidoProdutos = pedido;  
    }

    mounted(){
      if(this.pedidoSolicitacao){
        this.tab = 3
      }
    }

    public finalizacaoPedido() {
      this.finalizaPedido(this.pedidoSolicitacao.id);
    }

    public  clienteSelecionado(cliente: ClienteDto){
      this.pedido.clienteId = cliente.id;
       this.salvarPedido(this.pedido).then(()=> {this.tab = 2}).catch(()=>{alert('Não é possivel adicionar o pedido' + this.pedido.descricao)});
       this.tab = 3;
    }

  }
  </script>