
import ProdutoDto from '../Produtos/ProdutoDto';
import CategoriaDto from './CategoriaDto';
import { DimencaoDto } from './DimencaoDto';
export default class ItemDto {
  public nome!: string;
  public quantidade: number = 1;
  public valorAdicional: number | null = 0;
  public produto!: ProdutoDto | null;
  public produtoId!: number;
  public categoriaItem!: CategoriaDto | null;
  public categoriaItemId!: number;
  public dimencao!: DimencaoDto;
  public dimencaoId!: number;
  public valorVenda!: number;
  public valorCompra!: number | null;
  public somatorioLargura: number | null = 0;
  public somatorioAltura: number | null = 0;
  public somatorioComprimento: number | null = 0;
  public coeficienteComprimento: number | null = 1;
  public coeficienteLargura: number | null = 1;
  public coeficienteAltura: number | null = 1;;
}