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

  private email = '';

  private senha = '';


  
@Action(GlobalActionTypes.FAZER_LOGIN)
private fazLogin!: (login:Login)=> Promise<void>;
  @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>


public async fazerLogin(){
this.AtivarCarregamento();
      const login = new Login(this.email, this.senha);
      await this.fazLogin(login).then(()=>{
        this.DesativarCarregamento();
        this.$router.push(Rotas.Inicio);
      }).catch(()=>this.DesativarCarregamento());   
};
}
</script>
