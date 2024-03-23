<template>
  <div justify="center" v-if="etapaAtual === 1">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Recuperação de Senha</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="E-mail*"
                  required
                  v-model="email"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indica campo obrigatório</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="enviarEmail()">
            Enviar E-mail de Recuperação
          </v-btn>
          <v-btn color="grey" @click="dialog = false">
            <b>Cancelar</b>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn @click="dialog = true" color="primary" :rounded="true">
      <v-icon>mdi-lock-reset</v-icon>
      Recuperar Senha
    </v-btn>
  </div>

  <div v-else>
    <template>
      <div>
        <!-- Digitar o código de recuperação de senha -->
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Código de Recuperação de Senha*"
                :error-messages="getErrorMessage('codigoVerificacao')"
                required
                v-model="recoveryCode"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <!-- Digitar a nova senha -->
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :error-messages="getErrorMessage('novaSenha')"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                label="Nova Senha*"
                required
                v-model="newPassword"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <!-- Confirmar a nova senha -->
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :error-messages="getErrorMessage('confirmaSenha')"
                :type="show2 ? 'text' : 'password'"
                @click:append="show2 = !show2"
                label="Confirmar Nova Senha*"
                required
                v-model="confirmPassword"
                ref="confirmaSenha"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <!-- Botões de ação -->
        <v-container>
          <v-row>
            <v-btn
              color="primary"
              :disabled="validacaoFormularaio"
              class="mx-4"
              @click="submitPasswordReset"
            >
              Enviar Nova Senha
            </v-btn>
            <v-btn color="grey" @click="cancelPasswordReset"> Cancelar </v-btn>
          </v-row>
        </v-container>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
  import EmailService from "@/Service/EmailService";
import { RecuperacaoSenhaRequest } from "@/Service/Request/RecuperacaoSenhaRequest";
  import Rotas from "@/router/Rotas";
  import { GlobalActionTypes } from "@/store/actions";
  import { Inject } from "typescript-ioc";
  import { Vue, Component } from "vue-property-decorator";
  import { Action } from "vuex-class";

  @Component({})
  export default class PasswordRecovery extends Vue {
    @Inject
    private emailService!: EmailService;

    @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!: () => Promise<void>;

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!: () => Promise<void>;
    public mensagemAlerta = "";
    public dialog = false;
    public email = "";
    public etapaAtual = 1;

    public async enviarEmail() {
      this.AtivarCarregamento();
      this.emailService
        .pedidoCodigoTrocaSenha(this.email)
        .then((dado) => {
          this.mensagemAlerta = dado;
          this.DesativarCarregamento();
          alert(this.mensagemAlerta);
          if (this.mensagemAlerta !== "Email não cadastrado") {
            this.etapaAtual = 2;
          }
        })
        .catch(() => {
          this.DesativarCarregamento();
          alert("serviço indisponivel no momento");
        });

      this.dialog = false;
    }

    public show1 = false;
    public show2 = false;
    public recoveryCode: string = "";
    public newPassword: string = "";
    public confirmPassword: string = "";

    submitPasswordReset() {
      if (this.newPassword !== this.confirmPassword) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        return;
      }
      var request = new RecuperacaoSenhaRequest();
      
      request.email = this.email;
      request.codigoConfirmacao = this.recoveryCode;
      request.novaSenha =this.newPassword;

      this.AtivarCarregamento()
      this.emailService.trocaDeSenha(request).then( ()=> {
        this.DesativarCarregamento();
        alert("Sua senha foi alterada com Sucesso!");
        this.$router.push(Rotas.Visitante.Login);
      }).catch(() => {
        this.DesativarCarregamento();
        alert('Erro ao alterar senha');
      });

    }

    cancelPasswordReset() {
      this.$router.push(Rotas.Visitante.Login);
    }

    public getErrorMessage(fieldName: string): string[] | null {
      switch (fieldName) {
        case "codigoVerificacao":
          return !this.recoveryCode ? ["Campo obrigatório"] : null;
        case "novaSenha":
          return !this.newPassword ? ["Campo obrigatório"] : null;
        case "confirmaSenha":
          return !this.confirmPassword ? ["Campo obrigatório"] : null;

        default:
          return null;
      }
    }

    public get validacaoFormularaio(): boolean {
      if (
        !this.recoveryCode ||
        !this.newPassword ||
        !this.confirmPassword ||
        this.confirmPassword !== this.newPassword
      ) {
        return true;
      }
      return false;
    }
  }
</script>
