<template>
    <div >
      <navegacao></navegacao>
       <router-view></router-view>
    </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import Navegacao from '@/views/navegacao/NavegacaoVisitante.vue'
@Component({
  components:{
    Navegacao,
  }
})
export default class Visitante extends Vue {

}
</script>
