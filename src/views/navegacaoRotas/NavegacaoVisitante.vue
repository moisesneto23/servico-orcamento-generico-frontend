<template>
    <div >
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
      <cabecalho-visitante></cabecalho-visitante>
       <router-view></router-view>
    </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import CabecalhoVisitante from '@/views/visitante/CabecalhoVisitante.vue'
import { State } from "vuex-class";
@Component({
  components:{
    CabecalhoVisitante,
  }
})
export default class NavegacaoVisitante extends Vue {
  @State
  public carregamento!: boolean;
}
</script>
