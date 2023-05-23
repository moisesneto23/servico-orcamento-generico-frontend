import CategoriaProdutoDto from "./CategoriaProdutoDto";
import ProdutoItemDimencaoDto from "./ProdutoItemDimencaoDto";


export default class ProdutoModel {
  public id!: number;
  public nome!: string;
  public valorVenda!: number;
  public valorCusto!: number;
  public categoriaProduto!: CategoriaProdutoDto;
  public categoriaProdutoId!: number;
  public ProdutosItensDimencao: ProdutoItemDimencaoDto[] = [];
}