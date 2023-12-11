<template>
  <div>
    
    <div v-if="selecao">
      <v-expansion-panels focusable>
        <v-expansion-panel
          v-for="cliente in selecaoClientes"
          :key="cliente.id"
          class="mb-2"
        >
          <v-expansion-panel-header>
            <h1>{{ cliente.nome }}</h1>
           
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col cols="5">
                
                <edicao-cliente :cliente="cliente"
                 
                ></edicao-cliente>

                <h3 class="text-center">Editar</h3>
              </v-col>

              <v-col cols="2" v-if="eRotaSelecao">
                <v-btn @click="selecionarCliente(cliente)"><v-icon large>mdi-account-plus</v-icon></v-btn>
              </v-col>

              <v-col cols="5">
                <v-btn
                  text
                  @click="excluirCategoriaProduto(cliente.id)"
                  ><v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
                <h3 class="text-center">Escluir</h3>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div v-if="!selecao">
      <v-btn color="primary" rounded @click="selecao = true">
        selecionar cliente</v-btn
      >
      
    </div>
    <CadastroCliente />
  </div>
</template>
<script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import EdicaoCliente from "@/components/Clientes/EdicaoCliente.vue";
  import { StoreNamespaces } from "@/store";
  import { namespace } from "vuex-class";
  import { PedidoActionTypes } from "@/store/Pedido/actions";
  import ClienteDto from "@/Model/ClienteDto";
  import CadastroCliente from '@/components/Clientes/CadastroCliente.vue';

  const pedido = namespace(StoreNamespaces.PEDIDO);

  @Component({
    components: {
      EdicaoCliente,
      CadastroCliente,
    },
  })
  export default class ListagemCliente extends Vue {
    @pedido.State
    public clientes!: ClienteDto[];

    @pedido.Action(PedidoActionTypes.OBTER_CLIENTES)
    private obterTodosClientes!: () => Promise<any>;

    @pedido.Action(PedidoActionTypes.REMOVER_CLIENTE)
    public removerCategoriaProduto!: (id: number) => Promise<any>;

      public get selecaoClientes(){
        return this.clientes;
      }
    
        private async created(){
        await this.obterTodosClientes();
    }

    public selecao = false;
    public async excluirCategoriaProduto(id: number) {
      await this.removerCategoriaProduto(id).then(() => {});
    }

    public get eRotaSelecao() : boolean{
      return this.$route.name === 'Pedidos';
    }

    public selecionarCliente(cliente: ClienteDto){
      this.selecao = !this.selecao;
      this.$emit('selecionou-cliente', cliente)
    }
  }
</script>
