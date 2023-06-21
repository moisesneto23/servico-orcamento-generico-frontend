<template>
    <div>

      <div id="orcamento-produto">
        <h1> Escolha um produto para fazer orçamento </h1>
        <iframe v-if="false" class="visualizador-de-pdf" :src="pdf">
        </iframe>
       
      </div>
      
      <div>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="produto in produtosCategoria"  :key="produto.id" class="mb-1">
        <v-expansion-panel-header>
          <h3 class="text-center"> {{ produto.nome }}</h3>
          <!-- <v-divider vertical class="mx-2"></v-divider>
          <h4>Tipo:<h5> {{ item.nome }} </h5>
          </h4> -->
        </v-expansion-panel-header>
        <v-expansion-panel-content class="jus" color="deep-purple lighten-4" >

          

          <v-row justify="center">
            <v-col cols="4" sm="4" md="4">
              <v-text-field type="number" v-model="request.Largura" label="Largura"
              ></v-text-field>
              <v-text-field type="number" v-model="request.Altura" label="Altura"
               ></v-text-field>
              <v-text-field type="number"  v-model="request.Comprimento" label="Comprimento"
                ></v-text-field>
            </v-col>

          
          </v-row>
          <v-row>
            <v-col cols="6" sm="6" md="6">
              <v-switch 
      v-model="habilitaObs"
      label="Adicionar Observações"
    ></v-switch>
              <v-textarea background="white" v-if="habilitaObs" type="number" v-model="observacoes" label="Observações do orçamento"
              ></v-textarea>
             
            </v-col> 
          </v-row>
          <v-btn
            :disabled="!request.Largura || !request.Altura || !request.Comprimento"
            class="mt-9 mx-auto d-block text-none blue--text text--darken-3"
            depressed
            color="amber"
            min-width="382"
            @click="baixarContrato(produto.id, produto.nome)"
          >
          <h2>Visualizar orçamento</h2>
            
          </v-btn>

        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
    
    </div>
  </template>
  
  <script lang="ts">
  
  import ProdutoDto from '@/Model/Produtos/ProdutoDto';
  import { OrcamentoService } from '@/Service/OrcamentoService';
  import {ValorProdutoRequest} from '@/Service/Request/ObterOrcamentoRequest';
  import { ProdutosActionTypes } from '@/store/Produtos/actions';
  import { GlobalActionTypes } from '@/store/actions';
import { StoreNamespaces } from '@/store/namespaces';
  import { Container } from 'typescript-ioc';
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { Action, State, namespace } from 'vuex-class';
  
  const produto = namespace(StoreNamespaces.PRODUTO);
  
  @Component({})
  export default class ProdutoOrcamento extends Vue{
   
    public get eMobile(): boolean {
    return this.$vuetify.breakpoint.xsOnly;
  }
  @Prop()
  private CategoriaId!: number;
  

  @produto.Action(ProdutosActionTypes.OBTER_PRODUTOS_POR_CATEGORIA)
    public obterTodosProdutosPorCategoria!:(id: number) => Promise<any>;
      
    async mounted(){
      this.AtivarCarregamento();
      await this.obterTodosProdutosPorCategoria(this.CategoriaId);
      this.DesativarCarregamento();
    }

    @produto.State
    private produtos!: ProdutoDto[];

    public  get produtosCategoria(): ProdutoDto[]{
      return this.produtos.filter((x)=>x.categoriaProdutoId === this.CategoriaId);
    }

    @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

      @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>

    private async obterArquivo(){
      const service = (Container.get(OrcamentoService) as OrcamentoService);
       this.pdf = await service.ObterOrcamentoProduto(this.request);
    }

    public async baixarContrato(produtoId: number, nome: string) {
      this.request.ProdutoId = produtoId;
      this.request.NomeProduto = nome;
      this.request.Observacoes = this.observacoes;
      this.AtivarCarregamento();
      await this.obterArquivo().then(() => {
       this.DesativarCarregamento();
       const link = document.createElement('a');
      link.href = this.pdf;
      const nomeArquivo = 'Orcamento_'+ produtoId+'la_'+ this.request.Largura+ 'alt_' +this.request.Altura + 'com_' +this.request.Comprimento ;
      link.setAttribute('download', nomeArquivo);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch(()=>{
      this.DesativarCarregamento();
      alert("Algo deu errado nesta operação")
    });
    }
    public pdf: string = '';
    public request = new ValorProdutoRequest();
    public observacoes = ' '
    public habilitaObs = false;
  };
  </script>
  <style scoped>
  .visualizador-de-pdf {
    width: 90vw;
    height: 90vh;
  }
  </style>
  