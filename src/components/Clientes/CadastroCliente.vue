<template>
  
    <div justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Criar Categoria de Produto</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nome da categoria*"
                    required
                  
                    v-model="CategoriaProduto.descricao"
                  ></v-text-field>
                </v-col>
                
              </v-row>
            </v-container>
            <small>*indica campo obrigatorio</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark  @click="adicionarCategoriaProduto" >
              Salvar
            </v-btn>
            <v-btn color="blue" text @click="dialog = false">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn @click="dialog=true" color="primary" :rounded="true">
        <v-icon>mdi-format-list-group-plus</v-icon>
        Cadastrar Cliente
      </v-btn>
    </div>
   
  
</template>


<script lang="ts">

import { Vue, Component } from "vue-property-decorator";

import { StoreNamespaces } from '@/store';
import { Action, namespace } from 'vuex-class';
import { ProdutosActionTypes } from "@/store/Produtos/actions";
import {CategoriaProdutoDto} from "@/Model/Produtos/CategoriaProdutoDto";
import { GlobalActionTypes } from "@/store/actions";

const produto = namespace(StoreNamespaces.PRODUTO);

@Component({})
export default class CadastroCliente extends Vue {

  @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>

    @produto.Action(ProdutosActionTypes.SALVAR_CATEGORIA_PRODUTO)
  public salvarCategoriaProduto!:(categoria : CategoriaProdutoDto) => Promise<any>;

  public dialog = false;
 
  public CategoriaProduto = new CategoriaProdutoDto();

  public async adicionarCategoriaProduto(){
    this.AtivarCarregamento();
    await this.salvarCategoriaProduto(this.CategoriaProduto).then(()=>{
      this.DesativarCarregamento();
    });
    this.dialog = false;
  }

}
</script>