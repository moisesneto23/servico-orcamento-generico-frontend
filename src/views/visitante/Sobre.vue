<template>
    <div >
        <h1> Sobre </h1>
        <div>
          <ConversorCsvParaJson />
        </div>
        
    </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import Rotas from '@/router/Rotas';
import ConversorCsvParaJson from '@/components/Fornecedor/ConversorCsvParaJson.vue'

@Component({
  components:{
    ConversorCsvParaJson
  }
})
export default class Sobre extends Vue {

}
</script>
