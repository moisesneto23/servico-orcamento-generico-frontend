<template>
  
    <div justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Editar Produto</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nome do produto*"
                    required
                    v-model="exibeProduto.nome"
                  ></v-text-field>
                </v-col>
                
              </v-row>
            </v-container>
            <small>*indica campo obrigatorio</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" class="mx-4" @click="processarEdicao(exibeProduto)">
              Salvar Edição
            </v-btn>
            
            <v-btn color="grey" @click="dialog = false">
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
import { StoreNamespaces } from "@/store";
import { Action, namespace } from "vuex-class";
import { ProdutosActionTypes } from "@/store/Produtos/actions";
import ProdutoDto from "@/Model/Produtos/ProdutoDto";
import { GlobalActionTypes } from "@/store/actions";

const produto = namespace(StoreNamespaces.PRODUTO);

@Component({})
export default class EdicaoTipoProduto extends Vue {
  public dialog = false;
 @produto.Action(ProdutosActionTypes.EDITAR_PRODUTO)
  public editaProduto!:(produto: ProdutoDto) => Promise<any>;

    @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>
  @Prop()
  public produto!: ProdutoDto;
  public get exibeProduto(){
    return this.produto;
  }
  
  public processarEdicao(produto: ProdutoDto){
    this.editarProduto(produto);
  }

  private async editarProduto(produto: ProdutoDto): Promise<any>{
    this.AtivarCarregamento();
       await this.editaProduto(produto).then(()=>{
        this.DesativarCarregamento();
        this.dialog = false;
        }).catch(()=>{
      this.DesativarCarregamento();
      alert("Algo deu errado nesta operação")
    });
  }
}
</script>