<template>
  <div>
    <h1>login</h1>

    <v-container>
      <v-col>

          <v-text-field
            v-model="email"
            tipy="email"
            label="E-mail"
            required
          ></v-text-field>

         <v-text-field
            v-model="senha"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
           
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Senha"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-btn  color="secondary" style="background-color: blue"  large class="mr-4" @click="fazerLogin()"> Fazer Login </v-btn>
      </v-col>
    </v-container>
    <h3><v-btn text color="">Esqueci a Senha</v-btn></h3>
  </div>
</template>




<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import Rotas from "@/router/Rotas";
import Login from '@/Model/Login';
import { Action } from "vuex-class";
import { GlobalActionTypes } from "@/store/actions";

@Component({
  components: {},
})
export default class Loginin extends Vue {

  public email = '';

  public senha = '';

 
  public show1= false;

  @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>

@Action(GlobalActionTypes.FAZER_LOGIN)
private fazLogin!: (login:Login)=> Promise<void>;

public fazerLogin(){

      this.AtivarCarregamento();
      const login = new Login(this.email, this.senha);
       this.fazLogin(login).then(()=>{
        this.DesativarCarregamento();
        this.$router.push(Rotas.Inicio);
      }).catch(()=>this.DesativarCarregamento());  
};

}
</script>
<style scoped>

</style>
