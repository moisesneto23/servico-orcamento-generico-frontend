import ProdutoDto from "./ProdutoDto";
import ItemDto from "../Itens/ItemDto";
import { DimencaoDto } from "../Itens/DimencaoDto";


export default class ItemProdutoDimencaoDto {
  public id!: number;
  public nome!: string;
  public valorTotal!: number;
  public quantidade: number = 1;
  public valorAdicional: number = 0;
  public produto!: ProdutoDto;
  public produtoId!: number;
  public dimencao!: DimencaoDto;
  public dimencaoId!: number;
  public valorVenda!: number;
  public valorCompra!: number;
  public somatorioLargura!: number ;
  public somatorioALtura!: number ;
  public somatorioComprimento!: number ;
  public coeficienteComprimento!: number ;
  public coeficienteLargura!: number;
  public coeficienteAltura!: number;
  public item!: ItemDto;
  public itemId!: number;
  public  nomeUnidadeMedida!: string;
}
