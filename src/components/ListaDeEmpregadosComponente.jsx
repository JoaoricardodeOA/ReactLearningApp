import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import EmpregadoService from '../services/EmpregadoService';


const ListaDeEmpregadosComponente = () => {
    const [empregados, setEmpregados] = useState([])
    
    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = () => {
        EmpregadoService.getEmpregados().then((response) => {
            setEmpregados(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteEmpregado = (empregadoId) => {
        EmpregadoService.deleteEmpregado(empregadoId).then((response) =>{
            getTodos();
    
           }).catch(error =>{
               console.log(error);
           })
     }
    

        return (
            <div>
                <h2 className="text-center" style={{marginTop:"1%"}}>Lista de Empregados</h2>
                <div className="text-center" style={{marginTop:"3%", marginBottom:"2%"}}>
                    <a href="/Cadastro" className="btn btn-primary" > Cadastro</a>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>Email</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                empregados.map(
                                    empregado =>
                                    <tr key = {empregado.id}>
                                        <td>{empregado.firstname}</td>
                                        <td>{empregado.lastname}</td>
                                        <td>{empregado.email}</td>
                                       <td>
                                        <Link className="btn btn-success" to={`/Atualizar/${empregado.id}`} >Atualizar</Link>
                                            <button className="btn btn-danger" onClick={()=>deleteEmpregado(empregado.id)} style={{marginLeft:"3%"}} >Deletar</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

}

export default ListaDeEmpregadosComponente