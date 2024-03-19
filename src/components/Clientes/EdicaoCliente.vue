<template>
  
    <div justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Criar Categoria</span>
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
            <v-btn dark color="purple" @click="processarEdicao(exibeCliente)">
              Salvar
            </v-btn>
            
            <v-btn color="grey" text @click="dialog = false">
              <b>Cancelar</b> 
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
       <v-btn text @click="dialog=true">
              <v-icon>mdi-circle-edit-outline</v-icon> 
              </v-btn>
    </div>
   
  
</template>


<script lang="ts">
import { Vue, Component,Prop } from "vue-property-decorator";
import { Action, namespace } from "vuex-class";
import { StoreNamespaces } from "@/store";
import {CategoriaProdutoDto} from "@/Model/Produtos/CategoriaProdutoDto";
import { ProdutosActionTypes } from "@/store/Produtos/actions";
import { GlobalActionTypes } from "@/store/actions";
import { PedidoActionTypes } from "@/store/Pedido/actions";
import ClienteDto from "@/Model/ClienteDto";

const pedido = namespace(StoreNamespaces.PEDIDO);
@Component({})
export default class EdicaoCategoriaProduto extends Vue {

  @pedido.Action(PedidoActionTypes.EDITAR_CLIENTE)
  public editarCliente!:(cliente: ClienteDto) => Promise<any>;
    
  public dialog = false;

  @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>


  @Prop()
  public Cliente!: ClienteDto;

  public get exibeCliente(){
    return this.Cliente;
  }

  public processarEdicao(cliente: ClienteDto){

    this.AtivarCarregamento();
    this.editarCliente(cliente).then(()=>{
      this.DesativarCarregamento();
      this.dialog = false; 
      this.$emit('categoriaAlterada',this.Cliente);
    }).catch(()=>{
      this.DesativarCarregamento();
      alert("Algo deu errado nesta operação")
    });
  }

}
</script>