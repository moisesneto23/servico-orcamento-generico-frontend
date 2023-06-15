import InformacoesEmpresa from '@/Model/InformacoesEmpresa'

export class GlobalState {

    public informacoesEmpresa!: InformacoesEmpresa;
    public carregamento = false;

    constructor() {
      this.informacoesEmpresa; 
    }
  }

export const state: GlobalState = new GlobalState();