import ClienteDto from "../ClienteDto";
import pedidoProdutoDto from "./PedidoProdutoDto";

export default class PedidoDto {
    public descricao!: string;
    public valorTotal?: number;
    public empresaId!: number;
    public cliente?: ClienteDto;
    public pedidoProdutos?: pedidoProdutoDto[];

}