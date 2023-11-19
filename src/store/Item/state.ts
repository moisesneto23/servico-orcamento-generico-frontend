import CategoriaModel from '@/Model/Itens/CategoriaDto';
import  TipoModel  from '@/Model/Itens/TipoModel';
import ItemModel from '@/Model/Itens/ItemDto';
import { DimencaoDto } from '@/Model/Itens/DimencaoDto';


export class ItemState {
  public itens?: ItemModel[];
  public tipos?: TipoModel[] ;
  public categorias?: CategoriaModel[] ;
  public dimencoes?: DimencaoDto[];

}

export const state: ItemState = {
  itens: [],
  tipos: [],
  categorias: [],
  dimencoes: [],
};
