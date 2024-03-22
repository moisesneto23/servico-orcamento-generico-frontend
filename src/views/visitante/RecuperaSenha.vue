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
etapa 2
<template>
  <div>
    <!-- Digitar o código de recuperação de senha -->
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Código de Recuperação de Senha*"
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
            label="Nova Senha*"
            required
            v-model="newPassword"
            type="password"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <!-- Confirmar a nova senha -->
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Confirmar Nova Senha*"
            required
            v-model="confirmPassword"
            type="password"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <!-- Botões de ação -->
    <v-container>
      <v-row>
        <v-btn color="primary" @click="submitPasswordReset">
          Enviar Nova Senha
        </v-btn>
        <v-btn color="grey" @click="cancelPasswordReset">
          Cancelar
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>



    </div>
  </template>
  
  <script lang="ts">
  import EmailService from "@/Service/EmailService";
import { GlobalActionTypes } from "@/store/actions";
import { Inject } from "typescript-ioc";
import { Vue, Component } from "vue-property-decorator";
import { Action } from "vuex-class";
  
  @Component({})
  export default class PasswordRecovery extends Vue {
    @Inject
    private emailService!: EmailService;

    @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>
    public mensagemAlerta ='';
    public dialog = false;
    public email = "";
    public etapaAtual = 2;
  
    public async enviarEmail() {
      this.AtivarCarregamento();
       this.emailService.pedidoCodigoTrocaSenha(this.email)
      .then((dado)=>{
        this.mensagemAlerta = dado;
        this.DesativarCarregamento();
        alert(this.mensagemAlerta);
        if(this.mensagemAlerta !== 'Email não cadastrado'){
          this.etapaAtual = 2;
        }
      }).catch(()=>{this.DesativarCarregamento();
        alert("serviço indisponivel no momento");
        }
      );

      this.dialog = false;
    }

    public recoveryCode: string = "";
  public newPassword: string = "";
  public confirmPassword: string = "";

  submitPasswordReset() {
    // Implementar a lógica para enviar a nova senha ao servidor
    if (this.newPassword !== this.confirmPassword) {
      alert("As senhas não coincidem. Por favor, tente novamente.");
      return;
    }

    console.log("Enviando nova senha:", this.newPassword);
    console.log("Código de recuperação de senha:", this.recoveryCode);
    // Aqui você pode chamar uma função para enviar a nova senha e o código de recuperação de senha ao servidor
  }

  cancelPasswordReset() {
    // Implementar a lógica para cancelar o processo de redefinição de senha, se necessário
    console.log("Cancelando redefinição de senha");
    // Por exemplo, você pode limpar os campos de entrada ou redirecionar o usuário para outra página
  }
  }
  </script>
  
  