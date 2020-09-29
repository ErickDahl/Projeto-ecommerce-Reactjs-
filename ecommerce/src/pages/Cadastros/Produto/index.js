import React, {useState} from 'react';
import {Form, Textarea} from '../../../styles/formStyle';
import {Wrap, Tabela, Header} from './styles'
import logo from "../../../assets/logo3.png";
import Sidebar from '../../../components/Sidebar';
import api from '../../../services/api';


const Produtos = () => {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [qtdEstoque, setQtdEstoque] = useState('');
    // const [fotoLink, setFotoLink] = useState('');
    const [idFunc, setIdFunc] = useState('');
    const [nomeFunc, setNomeFunc] = useState('');
    const [idCategoria, setIdCategoria] = useState('');
    const [nomeCategoria, setNomeCategoria] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
   async function handleAddProduto(e){
       e.preventDefault();
       
       if(nome === '' || valor === '' || qtdEstoque === '' || descricao === '' || idFunc === '' || idCategoria === '') {
           setErrorMessage ('Preencha todos os campos solicitados');
           return;
       }

       const params = {
        nome: nome,
        valor: parseFloat(valor),
        qtdEstoque: parseInt(qtdEstoque),
        fabricacao: "2020-02-01T00:00:00Z",
        descricao: descricao,
        idFunc: parseInt(idFunc),
        nomeFunc: nomeFunc,
        idCategoria: parseInt(idCategoria),
        nomeCategoria: nomeCategoria,
        fotoLink: "http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/produto/3/foto"
       }
       try {
           await api.post('produto', params);

           setNome('');
           setValor('');
           setQtdEstoque('');
           setDescricao('');
           setIdFunc('');
           setNomeFunc('');
           setIdCategoria('');
           setNomeCategoria('');
        // setFotoLink('');
           setErrorMessage('');
           
       } catch (error) {
           console.log ('handleAddProduto error', error);
       }
       console.log('form submitted');
    }


    async function addNomeFunc(id) {
        if(id === ''){
            alert('ID INVÁLIDO');
        }

        try {
            const response = await api.get(`funcionario/${id}`);
            setNomeFunc(response.data.nome);
        } catch (error) {
            alert('ID INVÁLIDO');
        }
    }
    async function addNomeCategoria(id) {
        if(id === ''){
            alert('ID INVÁLIDO');
        }

        try {
            const response = await api.get(`categoria/${id}`);
            setNomeCategoria(response.data.nome);
        } catch (error) {
            alert('ID INVÁLIDO');
        }
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
                    <Form onSubmit={handleAddProduto}>
                <input value={nome} 
                onChange={e => setNome(e.target.value)} 
                type='text' 
                placeholder='Digite o nome'></input>
                
                <input value={valor} 
                onChange={e => setValor(e.target.value)} 
                type='text' 
                placeholder='Digite o valor'></input>
                
                <input value={qtdEstoque} 
                onChange={e => setQtdEstoque(e.target.value)} 
                type='text' 
                placeholder='Digite a quantidade' required></input>

                <input value={idFunc} 
                onChange={e => setIdFunc(e.target.value)} 
                onBlur={e => addNomeFunc(idFunc)}
                type='text' 
                placeholder='Id do Funcionário' required></input>

                <input value={nomeFunc} 
                onChange={e => setNomeFunc(e.target.value)} 
                type='text' 
                placeholder='Nome do Funcionário' disabled></input>

                <input value={idCategoria} 
                onChange={e => setIdCategoria(e.target.value)} 
                onBlur={e => addNomeCategoria(idCategoria)}
                type='text' 
                placeholder='Id da Categoria' required></input>

                <input value={nomeCategoria} 
                onChange={e => setNomeCategoria(e.target.value)} 
                type='text' 
                placeholder='Nome da Categoria' disabled></input>

                {/* <input value={fotoLink} 
                onChange={e => setFotoLink(e.target.value)} 
                type="text"
                placeholder='Link da imagem'></input> */}
                
                <Textarea value={descricao} 
                onChange={e => setDescricao(e.target.value)} 
                type='text' 
                placeholder='Digite a descrição'></Textarea>
                
                <button type='submit'>Enviar</button>
            </Form>
                    </div>
                    <p>{errorMessage}</p>
                </Tabela>
            </Wrap>
        </>
    )
}
export default Produtos;