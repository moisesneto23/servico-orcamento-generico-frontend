import { Inject } from 'typescript-ioc';
import { AppHttpAxios } from './../../axios/AppHttpAxios';
import ClienteDto from '@/Model/ClienteDto';
export default class ClienteService {
    
    @Inject
private $http!: AppHttpAxios;
private idEmpresa = this.pegaIdEmpresa();
private pegaIdEmpresa(): number{
    let id = localStorage.getItem('businessId') || '0';
    return parseInt(id);
}






    public async salvarCliente(Cliente: ClienteDto): Promise<any> {
        const result = await this.$http.post(`empresas/${this.idEmpresa}/clientes`, Cliente);
    }


    public async editarCliente(Cliente: ClienteDto): Promise<ClienteDto> {
        const result = await this.$http.patch(`empresas/${this.idEmpresa}/clientes`, Cliente);
        return result.data;
    }

    public async delete(id: any) : Promise<any>{
        const url =`empresas/${this.idEmpresa}/clientes${id}`;
        await this.$http.delete(url);
    }

    public async obterTodosClientes() {
        const result = await this.$http.get(`empresas/${this.idEmpresa}/clientes`);
        return result.data;
      }
};