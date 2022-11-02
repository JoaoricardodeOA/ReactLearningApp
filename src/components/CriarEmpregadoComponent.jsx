import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import EmpregadoService from '../services/EmpregadoService'

const CriarEmpregadoComponent = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const history = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const empregado = {firstname, lastname, email}

        if(id){
            EmpregadoService.updateEmpregados(id, empregado).then((response) => {
                history('/')
            }).catch(error => {
                console.log(error)
            })

        }else{
            EmpregadoService.createEmpregados(empregado).then((response) =>{

                console.log(response.data)
    
                history('/');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        EmpregadoService.getEmpregadoById(id).then((response) =>{
            setFirstname(response.data.firstname)
            setLastname(response.data.lastname)
            setEmail(response.data.email)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 style={{marginTop:"2%"}} className = "text-center">Atualizar Empregado</h2>
        }else{
            return <h2 style={{marginTop:"2%"}} className = "text-center">Adicionar Empregado</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3" style={{marginTop:"2%"}}>
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nome:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Nome"
                                        name = "firstname"
                                        className = "form-control"
                                        value = {firstname}
                                        onChange = {(e) => setFirstname(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Sobrenome :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Sobrenome"
                                        name = "lastname"
                                        className = "form-control"
                                        value = {lastname}
                                        onChange = {(e) => setLastname(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Enviar </button>
                                <Link to="/" className="btn btn-danger" style={{marginLeft:"2%"}}> Cancelar </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default CriarEmpregadoComponent