<template>
  <div class="CadastroEmpresa">
    <etapas-cadastro-empresa></etapas-cadastro-empresa>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import Rotas from "@/router/Rotas";
import { Action } from 'vuex-class';
import { GlobalActionTypes } from '@/store/actions';
import EtapasCadastroEmpresa from '@/components/visitante/cadastroEmpresa/EtapasCadastroEmpresa.vue';
import Login from "@/Model/Login";


@Component({
  components: {
    EtapasCadastroEmpresa,
  },
})
export default class CadastroEmpresa extends Vue {
}
</script>
