import { AppHttpAxios } from '@/axios/AppHttpAxios';
import { Inject } from 'typescript-ioc';
import {ValorProdutoRequest } from './Request/ObterOrcamentoRequest';
import qs from 'qs';
export class OrcamentoService {
    @Inject
    private $http!: AppHttpAxios;

    public async ObterOrcamentoProduto(request: ValorProdutoRequest): Promise<string> {
        const queryString = qs.stringify(request);
        const response = await this.$http.get(`orcamento/?${queryString}`,{responseType: 'blob', timeout: 120000});
        //const url = `${this.urlBase}/api/v1/contratos/alunos/${codAluno}/periodos-letivos/${codPeridoLetivo}/pdf`;
       // const response = await this.http.get(url, {responseType: 'blob', timeout: 120000});
      // const blob = this.criarBlob(response.data.arquivoOrcamento.fileContents);
     // const response = await this.http.get(url, {responseType: 'blob', timeout: 120000});
     return URL.createObjectURL(response.data);
       //return URL.createObjectURL(blob);
       // return URL.createObjectURL(response.data.arquivoOrcamento);
//return response.data.arquivoOrcamento;
      }
      public criarBlob(response: any): Blob {
        return new Blob([response.data], {
          type: 'application/pdf',
        });
      }
    
}



