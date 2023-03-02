<template>
  <div class="CadastroEmpresa">
    <div>
    <h1>Cadastro Empresa</h1>
    
    <input type="text" name="nome" placeholder="digite o NOME da empresa"><br>
    <input type="text" name="cnpj" placeholder="digite o CNPJ da empresa" required><br>
    <input type="email" name="email" placeholder="digite o EMAIL da empresa" required><br>
    <input type="email" name="confirmaemail" placeholder="confirme o EMAIL" required><br>
    <input type="password" name="senha" placeholder="digite a SENHA da empresa" required><br>
    <input type="password" name="confirmasenha" placeholder="confirme a SENHA " required><br>
    <input type="tel" name="telefone" placeholder="digite o CELULAR da empresa" required><br>
  <button>confirmar cadastro</button>
 </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component({
  components:{

  }
})
export default class CadastroUsuario extends Vue {
  public drawer = false;
  private group = null;

  

}
</script>
<style scoped>
.CadastroEmpresa{
  background-color: rgb(182, 168, 150);
  margin: 5px 80px;
}
input{
  background-color: aqua;
  margin: 8px;
  font-size: 1.3em;
  padding: 5px;
}
button{
  background-color: azure;
  font-size: 1.5em;
  margin: 8px;
  padding: 3px;
  border: black 3px solid ;
  border-radius: 20px;
}
button:hover{
background-color: rgb(101, 181, 246)
};
</style>
