import Vue from "vue";
import beforeEnter from "./beforeEnter";
import beforeEach from './beaforeEach';
import VueRouter, { RouteConfig } from "vue-router";
import CadastroEmpresa from "@/views/visitante/CadastroEmpresa.vue";
import Sobre from "@/views/visitante/Sobre.vue";
import Login from "@/views/visitante/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  //ptodas que nãao for visitante tem que ter um componente especifico de navegação
  {
    path: "/Home",
    name: "Visitante",
    component: () => import("@/views/navegacaoRotas/NavegacaoVisitante.vue"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/cadastro-empresa",
        name: "Cadastro Empresa",
        component: CadastroEmpresa,
      },
      {
        path: "/sobre",
        name: "Sobre",
        component: Sobre,
      },
    ],
  },

  {
    path: "/",
    name: "Inicio",
    component: () => import("@/views/navegacaoRotas/NavegacaoInicioOrcamentoGenerico.vue"),
    children: 
    [
      {
        path: "/cadastro/itens",
        name: "Cadastro Itens",
        component: () => import("@/views/Inicio/CadastroItens.vue"),
      },
      {
        path: "/cadastro/produtos",
        name: "Cadastro Produtos",
        component: () => import('@/views/Inicio/CadastroProdutos.vue'),
      },
      {
        path: "/cadastro/orcamento",
        name: "Cadastro Orcamento",
        component: () => import('@/views/Inicio/CadastroOrcamento.vue'),
      },
      {
        path: "/",
        name: "Inicio",
        component: () => import('@/views/Inicio/Inicio.vue'),
      },
      {
        path: "/pedidos",
        name: "Pedidos",
        component: () => import('@/views/Inicio/Pedidos.vue'),
      },
    ],
    beforeEnter,
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("@/views/navegacaoRotas/NavegacaoInicioSistemaDeObra.vue"),
    children: 
    [
      {
        path: "/cadastro/empreendimentos",
        name: "Cadastro Empreendimentos",
        component: () => import("@/views/Inicio/CadastroEmpreendimentos.vue"),
      },
      {
        path: "/cadastro/obras",
        name: "Cadastro Obras",
        component: () => import('@/views/Inicio/CadastroObras.vue'),
      },
      {
        path: "/cadastro/servicos",
        name: "Cadastro Serviços",
        component: () => import('@/views/Inicio/CadastroOrcamento.vue'),
      },
      {
        path: "/",
        name: "Inicio",
        component: () => import('@/views/Inicio/SistemaDeObraHome.vue'),
      },
      {
        path: "/pedidos",
        name: "Pedidos",
        component: () => import('@/views/Inicio/Pedidos.vue'),
      },
    ],
    beforeEnter,
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
router.beforeEach(beforeEach);
export default router;
