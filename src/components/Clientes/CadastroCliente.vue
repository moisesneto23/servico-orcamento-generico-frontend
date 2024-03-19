<template>
  
    <div justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Criar Cliente</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nome*"
                    required
                  
                    v-model="Cliente.nome"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="CPF*"
                    required
                  
                    v-model="Cliente.cpf"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="telefone*"
                    required
                  
                    v-model="Cliente.telefone"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indica campo obrigatorio</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success"  @click="adicionarCliente()" >
              Salvar
            </v-btn>
            <v-btn color="grey" @click="dialog = false">
              <b>Cancelar</b> 
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn @click="dialog=true" color="purple" :rounded="true">
        <v-icon>mdi-format-list-group-plus</v-icon>
        Cadastrar Cliente
      </v-btn>
    </div>
   
  
</template>


<script lang="ts">

import { Vue, Component } from "vue-property-decorator";

import { StoreNamespaces } from '@/store';
import { Action, State, namespace } from 'vuex-class';

import ClienteDto from "@/Model/ClienteDto";
import { PedidoActionTypes } from "@/store/Pedido/actions";

const pedido = namespace(StoreNamespaces.PEDIDO);

@Component({})
export default class CadastroCliente extends Vue {

    @pedido.Action(PedidoActionTypes.SALVAR_CLIENTE)
  public salvarCliente!:(cliente : ClienteDto) => Promise<any>;

  public dialog = false;
 
  public Cliente = new ClienteDto();

  public async adicionarCliente(){
     this.salvarCliente(this.Cliente);
    this.dialog = false;
  }

}
</script>