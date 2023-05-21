<template>
    <v-container>
      <v-form ref="form">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="Empresa.nome"
            label="Nome da Empresa"
            required
            color="teal"
            :error-messages="getErrorMessage('nomeEmpresa')"
            ref="nomeEmpresa"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="Colaborador.email"
            label="E-mail"
            required
            type="email"
            color="teal"
            :rules="emailRules"
            ref="email"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="Colaborador.nome"
            label="Nome do Proprietario"
            required
            color="teal"
            :error-messages="getErrorMessage('nomeGerente')"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
          v-model="Empresa.telefone"
            label="Telefone da empresa"
            required
            v-mask="'(##) #####-####'"
            color="teal"
            :error-messages="getErrorMessage('telefone')"
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="Empresa.cnpj"
            label="CNPJ"
            required
            v-mask="'##.###.###/####-##'"
            color="teal"
            :error-messages="getErrorMessage('cnpj')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="Colaborador.cpf"
            label="CPF do proprietário"
            required
            v-mask="'###.###.###-##'"
            color="teal"
            :error-messages="getErrorMessage('cpf')"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="Colaborador.senha"
            label="Senha"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
           :type="show1 ? 'text' : 'password'"
            required
            color="teal"
            @click:append="show1 = !show1"
            :error-messages="getErrorMessage('senha')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="confirmaSenha"
            label="Confirme senha"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
           :type="show1 ? 'text' : 'password'"
            required
            color="teal"
            @click:append="show1 = !show1"
            :error-messages="verificaConfimacoSenha()"
          ></v-text-field>
        </v-col>
      </v-row>

    </v-form>
    <v-form>
      <h2>Endereço</h2>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="Endereco.cidade"
            label="Cidade"
            required
            color="teal"
            :error-messages="getErrorMessage('cidade')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="Endereco.estado"
            label="Estado"
            required
            color="teal"
            :error-messages="getErrorMessage('estado')"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="Endereco.bairro"
            label="Bairro"
            required
            color="teal"
            :error-messages="getErrorMessage('bairro')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
          v-model="Endereco.rua"
            label="Logradouro"
            required
            color="teal"
            :error-messages="getErrorMessage('rua')"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="Endereco.numero"
            label="Numero"
            required
            color="teal"
            :error-messages="getErrorMessage('numero')"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
          v-model="Endereco.cep"
            label="CEP"
            v-mask="'##.###-###'"
            :error-messages="getErrorMessage('cep')"
            color="teal"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-col cols="12" sm="6">
          <v-text-field
          v-model="Endereco.complemento"
            label="Complemento"
            color="teal"
          ></v-text-field>
        </v-col>
      

    </v-form>
    <v-row>
        <v-col cols="12">
          <transition name="fade" mode="out-in">
            <v-btn @click="cadastrarEmpresa()" color="primary" class="btn-animation">Cadastrar</v-btn>
          </transition>
        </v-col>
      </v-row>
    </v-container>

</template>

<style scoped>
.btn-animation-enter-active,
.btn-animation-leave-active {
  transition: opacity 0.5s;
}

.btn-animation-enter,
.btn-animation-leave-to {
  opacity: 0;
}
</style>

<script lang='ts'>
import Rotas from '@/router/Rotas';
import { Vue, Component } from "vue-property-decorator";
import EmpresaService from "@/Service/EmpresaService";
import { Inject } from "typescript-ioc";
import EmpresaDto from '@/Model/Empresa/EmpresaDto';
import { ColaboradorDto } from '@/Model/ColaboradorDto';
import { EnderecoDto } from '@/Model/EnderecoDto';

@Component({
  components:{

  }
})
export default class EtapasCadastroEmpresa extends Vue {
  public drawer = false;
  public group = null;
  public cadastroItens = Rotas.Cadastros.CadastroItens;
  public cadastroProdutos = Rotas.Cadastros.CadastroProdutos;
  public Empresa: EmpresaDto = new EmpresaDto();
  public Colaborador = new ColaboradorDto();
  public Endereco = new EnderecoDto();
  @Inject
  public empresaService!: EmpresaService;

  public nome!: string;

  public Inicio = Rotas.Inicio;
  public CadastroItens = Rotas.Cadastros.CadastroItens;
  public Ajuda = Rotas.Ajuda;
  public RealizaOrcamento = Rotas.Cadastros.RealizaOrcamento;


  public async cadastrarEmpresa(){
  if(this.validacaoFormularaio() && this.verificaConfimacoSenha() === null ){
    alert('tudo certo')
  }

  }
  //opção usando Rules para validar formulario
  public emailRules: ((v: string) => string | boolean)[] = [
    (v: string) => !!v || 'E-mail é obrigatório',
    (v: string) =>
      /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ||
      'E-mail inválido',
  ];

  public verificaConfimacoSenha(): string[] | null {
    return this.Colaborador.senha === this.confirmaSenha ? null :["Confirmação de senha incorreta"];
  }

  public sair(){
    localStorage.removeItem('ocirenegotnemacro');
    this.$router.push(Rotas.Visitante.Login);
  }

  get numberValidation() {
    return [(value: string) => /^\d+$/.test(value) || 'Apenas números são permitidos.'];
  }

  public show1= false;

  public confirmaSenha: string = ''; 

// opção usando "error-messages" para validar formulario
  public getErrorMessage(fieldName: string): string[] | null {
    // Retorna as mensagens de erro para o campo especificado
    switch (fieldName) {
      case "nomeEmpresa":
        return !this.Empresa.nome ? ["Campo obrigatório"] : null;
      case "nomeGerente":
        return !this.Colaborador.nome ? ["Campo obrigatório"] : null;
      case "telefone":
        return !this.Empresa.telefone ? ["Campo obrigatório"] : null;
      case "cnpj":
        return !this.Empresa.cnpj ? ["Campo obrigatório"] : null;
      case "cpf":
        return !this.Colaborador.cpf ? ["Campo obrigatório"] : null;
       case "senha":
         return !this.Colaborador.senha ? ["Campo obrigatório"] : null;
       case "cidade":
         return !this.Endereco.cidade ? ["Campo obrigatório"] : null;
        case "estado":
         return !this.Endereco.estado ? ["Campo obrigatório"] : null;
         case "bairro":
         return !this.Endereco.bairro ? ["Campo obrigatório"] : null;
        case "rua":
         return !this.Endereco.rua ? ["Campo obrigatório"] : null;
         case "numero":
         return !this.Endereco.numero ? ["Campo obrigatório"] : null;
        case "cep":
         return !this.Endereco.cep ? ["Campo obrigatório"] : null;

      default:
        return null;
    }
  }
  private validacaoFormularaio(): boolean {
    if(    !this.Empresa.nome   ||
      !this.Colaborador.nome    ||
  !this.Empresa.telefone        ||
     !this.Empresa.cnpj         ||
      !this.Colaborador.cpf     ||
        !this.Colaborador.senha ||
       !this.Endereco.cidade    ||
      !this.Endereco.estado     ||
        !this.Endereco.bairro   ||
         !this.Endereco.rua     ||
          !this.Endereco.numero ||
        !this.Endereco.cep  || 
        !/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.Colaborador.email)
        
        ){
          return false
        }
        return true
  }
}
</script>
