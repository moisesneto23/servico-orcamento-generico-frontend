<template>
    <div>

      <div id="orcamento-produto">
        <h1> Escolha um produto para fazer orçamento </h1>
        <iframe v-if="false" class="visualizador-de-pdf" :src="pdf">
        </iframe>
        <v-btn
            class="mt-9 mx-auto d-block text-none blue--text text--darken-3"
            depressed
            color="white"
            min-width="382"
            @click="baixarContrato()"
          >
            Visualizar orçamento
          </v-btn>
      </div>
      
      <div>

      </div>
    
    </div>
  </template>
  
  <script lang="ts">
  
  import { OrcamentoService } from '@/Service/OrcamentoService';
  import {ValorProdutoRequest} from '@/Service/Request/ObterOrcamentoRequest';
  import Cabecalho from '@/components/Cabecalho.vue';
  import { GlobalActionTypes } from '@/store/actions';
  import { Container } from 'typescript-ioc';
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { Action, State } from 'vuex-class';
  
  
  @Component({
    components: {
      Cabecalho
    }
  })
  export default class Inicio extends Vue{
   
    public get eMobile(): boolean {
    return this.$vuetify.breakpoint.xsOnly;
  }

    mounted(){
      this.obterArquivo();
    }
    private async obterArquivo(){
      const service = (Container.get(OrcamentoService) as OrcamentoService);
      this.request.Altura = 2;
      this.request.Comprimento = 2;
      this.request.largura = 2;
      this.request.ProdutoId = 3;
       this.pdf = await service.ObterOrcamentoProduto(this.request);
      console.log(this.pdf);
    }
    public baixarContrato() {
      const link = document.createElement('a');
      link.href = this.pdf;
      const nomeArquivo = 'ContratoRematricula' ;
      link.setAttribute('download', nomeArquivo);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    public pdf: string = '';
    private request = new ValorProdutoRequest();
  
  };
  </script>
  <style scoped>
  .visualizador-de-pdf {
    width: 90vw;
    height: 90vh;
  }
  </style>
  