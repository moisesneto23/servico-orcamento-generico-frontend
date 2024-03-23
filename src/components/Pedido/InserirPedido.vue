<template>
    <div id="InserirPedido">
     
  <v-btn @click="acionarInsercao()" color="primary" rounded :disabled="btnFalse"> <h6>Inserir pedido</h6></v-btn>
  <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nome da categoria*"
                    required
                  
                    v-model="descricao"
                  ></v-text-field>
                </v-col>
                
              </v-row>
    </div>
  </template>
  <script lang="ts">

import { Vue, Component } from "vue-property-decorator";
  
  @Component({
    components: {
   
    },
  })
  export default class InserirPedido extends Vue {
    public tab = null;
    public get btnFalse (){
        return this.descricao.length < 4;
    }
    public descricao = '';

    public acionarInsercao(){
        this.$emit('inserindo-pedido',this.descricao)
    }

  }
  </script>