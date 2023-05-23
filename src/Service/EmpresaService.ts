import { AppHttpAxios } from '@/axios/AppHttpAxios';
import Login from '@/Model/Login';
import { Inject } from 'typescript-ioc';
import InformacoesEmpresa  from '../Model/InformacoesEmpresa';
import EmpresaDto from '@/Model/Empresa/EmpresaDto';

export default class EmpresaService  {
    
    @Inject
    private $http!: AppHttpAxios;

    public async obterInformacoesEmpresa(login: Login): Promise<InformacoesEmpresa> {
        const res = await this.$http.post('Usuario/Login',login);
        console.log(res.data);
        return res.data;
    }

    public async cadastrarEmpresa(empresa: EmpresaDto) : Promise<any>{
        const res = await this.$http.post('Empresa',empresa);
        console.log(res.data);
        return res.data;
    }
}
