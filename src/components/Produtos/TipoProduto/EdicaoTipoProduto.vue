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
                    v-model="exibeTipoProduto.descricao"
                  ></v-text-field>
                </v-col>
                
              </v-row>
            </v-container>
            <small>*indica campo obrigatorio</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark  @click="processarEdicao(exibeTipoProduto)" class="mt-8">
              Salvar Edição
            </v-btn>
            
            <v-btn color="blue" text @click="dialog = false">
              Cancelar
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
import TipoModel from "@/Model/Itens/TipoModel";
import { StoreNamespaces } from "@/store";
import { namespace } from "vuex-class";
import { ItensActionTypes } from "@/store/Item/actions";

const item = namespace(StoreNamespaces.ITEM);

@Component({})
export default class EdicaoTipoProduto extends Vue {
  public dialog = false;
 @item.Action(ItensActionTypes.EDITAR_TIPO_ITEM)
  public editaTipoItem!:(tipo: TipoModel) => Promise<any>;
  @Prop()
  public tipoProduto!: TipoModel;
  public get exibeTipoProduto(){
    return this.tipoProduto;
  }
  
  public processarEdicao(tipo: TipoModel){
    this.editarTipoItem(tipo);
    this.dialog = false;
  }

  private async editarTipoItem(tipo: TipoModel): Promise<any>{
       await this.editaTipoItem(tipo).then(()=>{
        });
  }
}
</script>