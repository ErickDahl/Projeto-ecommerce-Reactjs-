import React, {useState} from 'react';
import api from '../../../services/api';
import { Link } from "react-router-dom";
import {Wrap, Tabela, Header} from './styles'
import logo from "../../../assets/logo3.png";
import {Form} from '../../../styles/formStyle';
import Sidebar from '../../../components/Sidebar';

const Funcionario = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    
   async function handleAddFuncionario(e){
       e.preventDefault();
       
       if(nome === '' || cpf === '') {
           setErrorMessage ('Preencha todos os campos solicitados');
           return;
       };

       const params = {
        nome: nome,
        cpf: cpf
       }

       try {
           await api.post(`funcionario`, params);
           alert('Sucesso');
           setNome('');
           setCpf('');
           
           
       } catch (error) {
           console.log ('handleAddFuncionario error', error);
       }
       console.log('form submitted');
    }

    return (
        <>
            <Header>
                <img src={logo} alt="logo"></img>
            </Header>
            <Wrap> 
            <Sidebar></Sidebar>
                <Tabela>
                    <div className="alinhamento">
                        <Form onSubmit={handleAddFuncionario}>
                            <input value={nome} 
                            onChange={e => setNome(e.target.value)} 
                            type='text' 
                            placeholder='Digite seu nome'></input>
                            
                            <input value={cpf} 
                            onChange={e => setCpf(e.target.value)} 
                            type='text' 
                            placeholder='Digite seu cpf'></input>                             
                            
                            <button type='submit'>Enviar</button>
                        </Form>
                    </div>
                    <p>{errorMessage}</p>
                </Tabela>
            </Wrap>
        </>
    )
}
export default Funcionario;