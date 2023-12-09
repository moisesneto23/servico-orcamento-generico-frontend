import ClienteDto from "../ClienteDto";
import pedidoProdutoDto from "./PedidoProdutoDto";

export default class PedidoDto {
    public id !: number;
    public descricao!: string;
    public valorTotal?: number;
    public empresaId!: number;
    public cliente?: ClienteDto;
    public pedidoProdutos?: pedidoProdutoDto[];

}