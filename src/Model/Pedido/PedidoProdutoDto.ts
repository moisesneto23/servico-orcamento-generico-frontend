import ProdutoDto from "../Produtos/ProdutoDto";

export default class PedidoProdutoDto {
    public id !: number;
    public largura!: number;
    public altura?: number;
    public comprimento?: number;
    public valorAdicional: number = 0;
    public quantidade: number = 1;
    public produtoId!: number;
    public pedidoId!: number;
}