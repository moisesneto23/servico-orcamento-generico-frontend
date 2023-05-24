
import ProdutoDto from "./ProdutoDto";
import ItemDto from "../Itens/ItemDto";
import { DimencaoDto } from "../Itens/DimencaoDto";

export default class ProdutoItemDimencaoDto {
    public id!: number;
    public quantidade!: number;
    public valorAdicional!: number;
    public produtoId!: number;
    public itemId!: number;
    public produto!: ProdutoDto;
    public item!: ItemDto; 
    public dimencao!: DimencaoDto;
}
