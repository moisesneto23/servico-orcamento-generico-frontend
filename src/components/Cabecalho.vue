<template>
  <div>
    <v-app-bar color="primary" dark width="100%">
      <v-app-bar-nav-icon x-large @click.stop="(drawer = !drawer)"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <v-row align="center" justify="center" class="fill-height">
          <v-btn class="ml-8" @click="recaregar();" text>
            <v-col>
              {{ nomePagina }}
            </v-col>
          </v-btn>
        </v-row>
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="sair()" color="#B71C1C">Sair</v-btn>
    </v-app-bar>

    <v-navigation-drawer 
      v-model="drawer" absolute
      left
      temporary
      class="navigation"
      style="padding-top: 60px;">
      <v-list>
        <v-list-item-group v-model="group">

          <v-list-item :to="Inicio">
            <v-list-item-icon>
              <v-icon color="primary">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-primary">Inicio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="RealizaOrcamento">
            <v-list-item-icon>
              <v-icon color="primary">mdi-calculator</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-primary">Orçamento</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="Pedidos">
            <v-list-item-icon>
              <v-icon color="primary">mdi-shape-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-primary">Pedidos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="cadastroProdutos">
            <v-list-item-icon>
              <v-icon color="primary">mdi-shape-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-primary">Cadastro Produtos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="cadastroItens">
            <v-list-item-icon>
              <v-icon color="primary">mdi-shape-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-primary">Cadastro Itens</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="Ajuda">
            <v-list-item-icon>
              <v-icon color="primary">mdi-help</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-primary">Ajuda</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang='ts'>
import Rotas from '@/router/Rotas';
import { Vue, Component } from "vue-property-decorator";
import EmpresaService from "@/Service/EmpresaService";
import { Inject } from "typescript-ioc";
import EmpresaDto from '@/Model/Empresa/EmpresaDto';

@Component({
  components:{

  }
})
export default class Cabecalho extends Vue {
  public drawer = false;
  public group = null;
  public cadastroItens = Rotas.Cadastros.CadastroItens;
  public cadastroProdutos = Rotas.Cadastros.CadastroProdutos;
  public Empresas: EmpresaDto[] = [];
  @Inject
  public empresaService!: EmpresaService;
  public Inicio = Rotas.Inicio;
  public CadastroItens = Rotas.Cadastros.CadastroItens;
  public Ajuda = Rotas.Ajuda;
  public RealizaOrcamento = Rotas.Cadastros.RealizaOrcamento;
  public Pedidos = Rotas.Cadastros.Pedidos;
  
  public sair(){
    localStorage.removeItem('ocirenegotnemacro');
    this.$router.push(Rotas.Visitante.Login);
  }

  public recaregar(){
    location.reload();
  }

  public get nomePagina() {
    return this.$route.name;
  } 
}
</script>

<style></style>
