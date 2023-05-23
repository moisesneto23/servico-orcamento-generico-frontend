import CategoriaModel from '@/Model/Itens/CategoriaDto';
import  TipoModel  from '@/Model/Itens/TipoModel';
import ItemModel from '@/Model/Itens/ItemDto';


export class ItemState {
  public itens?: ItemModel[];
  public tipos?: TipoModel[] ;
  public categorias?: CategoriaModel[] ;

}

export const state: ItemState = {
  itens: [],
  tipos: [],
  categorias: [],
};
