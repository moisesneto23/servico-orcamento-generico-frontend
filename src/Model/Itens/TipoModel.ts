import  CategoriaModel  from '@/Model/Itens/CategoriaModel';
import ItemModel from '@/Model/Itens/ItemModel'
export default class TipoModel{
public id!: number;
public descricao!: string;
public categoriaItemId!: number;
public CategoriaItem!: CategoriaModel;
} 