export default class PedidoProdutoDto {
    public id !: number;
    public largura!: number;
    public altura?: number;
    public comprimento?: number;
    public valorAdicional: number = 0;
    public quantidade: number = 1;
    public produtoId!: number;
    public pedidoId!: number;
    public nomeProduto!: string;

    // Construtor com parâmetros opcionais
    constructor(
        id?: number,
        largura?: number,
        altura?: number,
        comprimento?: number,
        valorAdicional: number = 0,
        quantidade: number = 1,
        produtoId?: number,
        pedidoId?: number,
        nomeProduto?: string
    ) {
        // Atribui os valores fornecidos ou valores padrão/undefined
        this.id = id || 0;
        this.largura = largura || 0;
        this.altura = altura;
        this.comprimento = comprimento;
        this.valorAdicional = valorAdicional;
        this.quantidade = quantidade;
        this.produtoId = produtoId || 0;
        this.pedidoId = pedidoId || 0;
        this.nomeProduto = nomeProduto || "";
    }
}
