
import EmpresaDto from '../Empresa/EmpresaDto';

export default class ItemDto {
  public id!: number;
  public nome!: string;
  public valorVenda!: number;
  public valorCompra!: number;
  public empresa!: EmpresaDto | null;
  public empresaId!: number;
}