<template>
    <div id="etapasCadastroPedido">
     <InserirPedido @inserindo-pedido="preencheDescricaoPedido($event)" v-if="etapasPedido ===  enumEtapas.DescricaoPedido"></InserirPedido>
     <ListagemCliente v-if="etapasPedido === enumEtapas.SelecaoOuCriacaoCliente" @selecionou-cliente="clienteSelecionado($event)"/>
     <InserirProdutoPedido  v-if="etapasPedido ===  enumEtapas.InsercaoProdutoAoPedido"
        :pedido="pedido"
        @solicitar-finaliacao-pedido="finalizacaoPedido()"
      >
      </InserirProdutoPedido>
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
import {EtapasPedidoEnum} from '@/Model/Enum/EtapasPedidoEnum';

  const pedido = namespace(StoreNamespaces.PEDIDO);
  @Component({
    components: {
        ListagemCliente,
        InserirPedido,
        InserirProdutoPedido,
    },
  })
  export default class EtapasCadastroPedido extends Vue {
    public etapasPedido = 1;
    public pedido = new PedidoDto();
    public enumEtapas = EtapasPedidoEnum;

    public preencheDescricaoPedido(descricao: string){
      this.pedido.descricao = descricao;
      this.etapasPedido = 2
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
        this.etapasPedido = this.enumEtapas.InsercaoProdutoAoPedido
      }
    }

    public finalizacaoPedido() {
      this.finalizaPedido(this.pedidoSolicitacao.id).then(() =>{
        this.$emit('etapa-selecao-pedido')
      });
    }

    public  clienteSelecionado(cliente: ClienteDto){
      console.log(this.etapasPedido);
      this.pedido.clienteId = cliente.id;
       this.salvarPedido(this.pedido).then(()=> {this.etapasPedido = this.enumEtapas.InsercaoProdutoAoPedido}).catch(()=>{alert('Não é possivel adicionar o pedido' + this.pedido.descricao)});
       //this.etapasPedido = this.enumEtapas.InsercaoProdutoAoPedido;
    }

  }
  </script>