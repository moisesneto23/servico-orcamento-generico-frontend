export class ItemProdutoModel {
    id!: number;
    quantidade: number = 1;
    valorAdicional!: number | null;
    produtoId!: number;
    itemId!: number;
}