<template>
<nav>
  <span> <v-btn text class="mx-4 my-4"> <router-link :to="Login">  <v-btn color="purple" text><h2>Login</h2></v-btn></router-link> </v-btn> </span >
      <span> <v-btn text class="mx-4 my-2"> <router-link :to="CadastroEmpresa">  <v-btn color="purple" text><h2>Cadastro Empresa</h2></v-btn></router-link> </v-btn> </span>
       <!-- <span> <v-btn text> <router-link :to="Sobre">  <v-btn color="purple" text><b>Login</b></v-btn></router-link> </v-btn> </span> -->

    </nav>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Rotas from '@/router/Rotas';
@Component({
  components: {

  }
})
export default class CabecalhoVisitante extends Vue{
 public Login = Rotas.Visitante.Login;
 public CadastroEmpresa = Rotas.Visitante.CadastroEmpresa;
 public Sobre = Rotas.Visitante.Sobre;
}
</script>

