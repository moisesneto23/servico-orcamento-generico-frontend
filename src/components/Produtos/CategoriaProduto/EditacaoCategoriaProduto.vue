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
                    label="Nome da categoria*"
                    required
                    v-model="exibeCategoriaProduto.descricao"
                  ></v-text-field>
                </v-col>
                
              </v-row>
            </v-container>
            <small>*indica campo obrigatorio</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success"  @click="processarEdicao(exibeCategoriaProduto)">
              Salvar
            </v-btn>
            
            <v-btn color="grey" text @click="dialog = false">
              <b>Cancelar</b> 
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
       <v-btn text color="#8E24AA" @click="dialog=true">
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

const produto = namespace(StoreNamespaces.PRODUTO);
@Component({})
export default class EdicaoCategoriaProduto extends Vue {

  @produto.Action(ProdutosActionTypes.EDITAR_CATEGORIA_PRODUTO)
  public editarCategoriaProduto!:(categoriaProduto: CategoriaProdutoDto) => Promise<any>;
  public dialog = false;

  @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>


  @Prop()
  private categoriaProduto!: CategoriaProdutoDto;
  public get exibeCategoriaProduto(){
    return this.categoriaProduto;
  }
  
  public processarEdicao(categoriaProduto: CategoriaProdutoDto){
    this.AtivarCarregamento();
    this.editarCategoriaProduto(categoriaProduto).then(()=>{
      this.DesativarCarregamento();
      this.dialog = false; 
      this.$emit('categoriaAlterada',this.categoriaProduto);
    }).catch(()=>{
      this.DesativarCarregamento();
      alert("Algo deu errado nesta operação")
    });
  }

}
</script>