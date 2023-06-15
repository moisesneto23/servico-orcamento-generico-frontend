<template>
  
    <div justify="center">
      <v-dialog v-model="dialogproduto" persistent max-width="800px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Criar produto Unitario</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nome do produto*"
                     v-model="produto.nome"
                    required
                  ></v-text-field>
                </v-col>
               
                <v-col cols="12" sm="6">
                  <v-select
                    :items="descricaoCategorias"
                    label="Selecione a Categoria do produto*"
                    required
                    v-model="select"
                  ></v-select>
                </v-col>
              
                
              </v-row>
            </v-container>
            <small>*indica campo obrigatorio</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark  @click="selecionaIdSelect(), salvarproduto()">
              Salvar
            </v-btn>
            <v-btn color="blue" text @click="dialogproduto = false">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn @click="dialogproduto=true"  color="primary" :rounded="true">
        <v-icon>mdi-shape-square-plus</v-icon>
        Criar Produto
      </v-btn>
    </div>
   
  
</template>


<script lang="ts">
import ProdutoDto from "@/Model/Produtos/ProdutoDto";
import { StoreNamespaces } from "@/store";
import { Vue, Component } from "vue-property-decorator";
import { Action, namespace } from "vuex-class";
import { ProdutosActionTypes } from "@/store/Produtos/actions";
import CategoriaProdutoDto from "@/Model/Produtos/CategoriaProdutoDto";
import { GlobalActionTypes } from "@/store/actions";
const produto = namespace(StoreNamespaces.PRODUTO);

@Component({})
export default class CadastroProduto extends Vue {
  @produto.Action(ProdutosActionTypes.SALVAR_PRODUTO)
  public salvaproduto!:(produto: ProdutoDto) => Promise<any>;

 @produto.State
  private categoriasProduto!: CategoriaProdutoDto[];

  @Action(GlobalActionTypes.ATIVAR_CARREGAMENTO)
    private AtivarCarregamento!:() => Promise<void>

    @Action(GlobalActionTypes.DESATIVAR_CARREGAMENTO)
    private DesativarCarregamento!:() => Promise<void>

  public produto = new ProdutoDto();
  // public selecuinaIdSelect(){
  // this.idSelect = this.categoriaProduto.find(x=>x.descricao == this.select)?.id;
  //}
  public idSelect?: number;
  public select = '';
  public async salvarproduto(){
    this.AtivarCarregamento();
    this.produto.categoriaProdutoId = this.idSelect || 0;
    await this.salvaproduto(this.produto).then(()=>{
        //this.descricaoTipos;
      this.dialogproduto = false;
      this.DesativarCarregamento();
    }).catch(()=>{
      this.DesativarCarregamento();
      alert("Algo deu errado nesta operação")
    });
  }
  public selecionaIdSelect(){
  this.idSelect = this.categoriasProduto.find(x=>x.descricao == this.select)?.id;
}

  // public get descricaoTipos(){
  //   return this.categoriaProduto.map(c=>c.descricao);
  // }
  public dialogproduto = false;

  @produto.Action(ProdutosActionTypes.OBTER_CATEGORIAS_PRODUTO)
  public obterTodasCategorias!:() => Promise<any>;

  //  @produto.Action(ProdutosActionTypes.SALVAR_TIPO_PRODUTO)
  // public salvarTipoItem!:(tipo: TipoProdutoModel) => Promise<any>;
  
  public get descricaoCategorias(){
    return this.categoriasProduto.map((c)=>c.descricao);
  }
  public async  mounted(){
   await this.obterTodasCategorias();
  }



  // public adicionarTipo(){
   
  //   this.tipo.categoriaProdutoId = this.idSelect || 0;
  //   this.salvarTipoItem(this.tipo).then(()=>{
  //      this.dialogTipo = false;
  //   });
}
</script>