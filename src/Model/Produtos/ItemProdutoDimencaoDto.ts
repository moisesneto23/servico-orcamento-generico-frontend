import { DimencaoDto } from "../Itens/DimencaoDto";
import ItemDto from "../Itens/ItemDto";
import ProdutoDto from "./ProdutoDto";


  export default class ItemProdutoDimencaoDto {
    public id!: number;
    public nome!: string;
    public item!: ItemDto | null;
    public valorTotal!: number;
    public itemId!: number;
    public quantidade: number = 1;
    public valorAdicional: number | null = 0;
    public produto!: ProdutoDto | null;
    public produtoId!: number;
    public categoriaItemId!: number;
    public dimencao!: DimencaoDto | null;
    public dimencaoId!: number;
    public valorVenda!: number;
    public valorCompra!: number | null;
    public somatorioLargura: number | null = 0;
    public somatorioAltura: number | null = 0;
    public somatorioComprimento: number | null = 0;
    public coeficienteComprimento: number | null = 1;
    public coeficienteLargura: number | null = 1;
    public coeficienteAltura: number | null = 1;
  }
  