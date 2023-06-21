<template>
  
    <div justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Editar Item</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nome da categoria*"
                    required
                    v-model="itemEdicao.nome"
                  ></v-text-field>
                </v-col>
                
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Valor de compra"
                    hint="custo de compra do item"
                     v-model="itemEdicao.valorCompra"
                     type="number"
                  ></v-text-field>
                </v-col>

                 <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Valor de venda"
                    hint="pretenção de venda do item"
                     v-model="itemEdicao.valorVenda"
                     type="number"
                  ></v-text-field>
                </v-col>
               
              </v-row>
            </v-container>
            <small>*indica campo obrigatorio</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark  @click="editarItem(itemEdicao)" class="mt-8">
              Salvar Edição
            </v-btn>
            
            <v-btn color="blue" text @click="dialog = false">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
             <v-btn text  @click="dialog=true"><v-icon x-large>mdi-circle-edit-outline</v-icon> </v-btn>
       
    </div>
   
  
</template>


<script lang="ts">
import { Vue, Component,Prop } from "vue-property-decorator";
import { StoreNamespaces } from "@/store";
import { Action, namespace } from "vuex-class";
import { ItensActionTypes } from "@/store/Item/actions";
import ItemDto from "@/Model/Itens/ItemDto";
import { GlobalActionTypes } from "@/store/actions";

const item = namespace(StoreNamespaces.ITEM);

@Component({})
export default class EdicaoItem extends Vue {
  public dialog = false;

 @item.Action(ItensActionTypes.EDITAR_ITEM)
  public editaItem!:(item: ItemDto) => Promise<any>;

    @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>

  @Prop()
  public itemEdicao!: ItemDto;
  

  public async editarItem(item: ItemDto): Promise<any>{
    this.AtivarCarregamento();
       await this.editaItem(item).then(()=>{
      this.DesativarCarregamento();
      this.dialog = false;
    }).catch(()=>{
      this.DesativarCarregamento();
      alert("Algo deu errado nesta operação")
    });
  }
}
</script>