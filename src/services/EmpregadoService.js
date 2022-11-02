import axios from "axios";

const EMPREGADOS_API_BASE_URL = "http://localhost:8080/api/v1/Empregados";

class EmpregadoService{

    getEmpregados(){
        return axios.get(EMPREGADOS_API_BASE_URL);
    }
    createEmpregados(empregado){
        return axios.post(EMPREGADOS_API_BASE_URL, empregado);
    }
    getEmpregadoById(empregadoId){
        return axios.get(EMPREGADOS_API_BASE_URL + "/" + empregadoId);
    }
    updateEmpregados(empregadoId, employee){
        return axios.put(EMPREGADOS_API_BASE_URL + "/" +empregadoId, employee);
    }
    deleteEmpregado(empregadoId){
        return axios.delete(EMPREGADOS_API_BASE_URL + "/" + empregadoId);
    }
}

export default new EmpregadoService()