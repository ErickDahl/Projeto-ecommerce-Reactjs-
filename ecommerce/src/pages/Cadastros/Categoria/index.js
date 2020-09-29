import React, {useState} from 'react'; 
import api from '../../../services/api';
import {Form, Textarea} from '../../../styles/formStyle';
import {Wrap, Tabela, Header} from './styles';
import logo from "../../../assets/logo3.png";
import Sidebar from "../../../components/Sidebar";

const CadastroCategoria = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function handleAddCategoria(e) {
        e.preventDefault();

        if (nome === '' || descricao === '') {
            setErrorMessage('Preencha todos os campos solicitados');
            return;
        }

        const params = {
            nome: nome,
            descricao: descricao
        }

        try {
            await api.post('categoria', params);
            alert('Sucesso');
            setNome('');
            setDescricao('');
            setErrorMessage('');

        } catch (error) {
            console.log ('handleAddCategoria error', error);
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
                        <Form onSubmit={handleAddCategoria}>
                            <input value={nome} 
                            onChange={e => setNome(e.target.value)} 
                            type='text' 
                            placeholder='Digite o nome da Categoria'></input>
                            
                            <Textarea  value={descricao} 
                            onChange={e => setDescricao(e.target.value)} 
                            type='text' 
                            placeholder='Digite a descrição'></Textarea >
                            
                            <button type='submit'>Enviar</button>
                        </Form>
                    </div>
                        <p>{errorMessage}</p>
                </Tabela>
            </Wrap>
        </>
    );
}
export default CadastroCategoria;