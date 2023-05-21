import { AppHttpAxios } from '@/axios/AppHttpAxios';
import Login from '@/Model/Login';
import { Inject } from 'typescript-ioc';
import InformacoesEmpresa  from '../Model/InformacoesEmpresa';
import EmpresaDto from '@/Model/Empresa/EmpresaDto';

export class EmpresaRepository  {
    
    @Inject
    private $http!: AppHttpAxios;
    
    public async obterEmpresas(): Promise<EmpresaDto[]> { 
        const result = await this.$http.get('Empresa');
        return result.data;
    }

    public async obterInformacoesEmpresa(login: Login): Promise<InformacoesEmpresa> {
        const res = await this.$http.post('Usuario/Login',login);
        console.log(res.data);
        return res.data;
    }
}

/*public async obterAtividadesTCC(): Promise<DisciplinaExtraCurricularModel[]> {

    const result = await this.$http.get(`${this.endpointBase}api/dispensa/trabalhoConclusaoCurso`, {params: { codigoAluno }});
    return result.data;
}*/