<template>
    <div>
      <v-dialog
        v-model="carregamento"
        persistent
        max-width="290"
      >
        <v-card loading min-height="198">
          <v-card-text class="mt-16">
  
            <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
          </v-card-text>
        </v-card>
      </v-dialog>
      <cabecalho-sistema-de-obra></cabecalho-sistema-de-obra>
  
      <router-view></router-view>
      
    </div>
  </template>
  
  <script lang="ts">
  
  import CabecalhoSistemaDeObra from '@/components/SistemaDeObra/CabecalhoSistemaDeObra.vue';
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { State } from 'vuex-class';
  
  
  @Component({
    components: {
        CabecalhoSistemaDeObra
    }
  })
  export default class NavegacaoInicioSistemaDeObra extends Vue{
    @State
    public carregamento!: boolean;
  
  };
  </script>
  