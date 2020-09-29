import React, {useState, useEffect} from 'react';
import api from '../../../services/api';
import Header from '../../../components/Header'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import Modal from '../../../components/Modal/Funcionario';
import SideBar from '../../../components/Sidebar/index';
import { FuncStyle, Wrap, Tabela } from './style';
// import { Funcionario } from './styles';

const Funcionario = () => {
    const[funcionario, setFuncionario] = useState([]);

    const loadFuncionario = async () => {
        try{
            const response = await api.get('funcionario');
    
            setFuncionario(response.data);
        } catch (error) {
            console.log('loadFuncionario error', error);
        }
    };
    useEffect(() => {
        loadFuncionario();
    }, []);

    const removeFuncionario = async (funcionario) => {
        await api.delete(`funcionario/${funcionario.id}`);
        loadFuncionario();
      }

    return (
        <>
            <Header />
        <Wrap> 
            <SideBar></SideBar>
            
            <Tabela>
                    <div>
                        <span>
                            Adicionar novo funcionário
                            <Link to='/cadastro/funcionario'><AddCircleIcon size={22}  style={{marginLeft: 10, marginTop: 20}}/></Link> 
                        </span>
                        
                    </div>
                    {funcionario.map((funcionario)=> (
                    <FuncStyle key={funcionario.id}>
                       
                            <div className="nome">
                                <strong>{funcionario.nome}</strong>
                            </div>
                            <div className="bla">
                                <p>{funcionario.cpf}</p>
                            </div>
                            <div className="preco">
                               <span>
                                    <DeleteIcon size={22} onClick={() => removeFuncionario(funcionario)} style={{marginRight: 10, cursor:"pointer"}} />
                                    <Modal funcionario={funcionario}/>
                                </span>
                            </div>
                    </FuncStyle>
                ))}                
            </Tabela>   
        </Wrap>
        </>
    );
}

export default Funcionario;