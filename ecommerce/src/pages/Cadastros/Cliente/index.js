import React, {useState} from 'react';
import {Form} from '../../../styles/formStyle';
import {Wrap} from './styles';
import api from '../../../services/api';
import logo from "../../../assets/logo3.png";
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import { Alert, AlertTitle } from '@material-ui/lab';
import {useHistory} from 'react-router-dom';



const Clientes = () => {
    const history = useHistory();
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    

    const useStyles = makeStyles((theme) => ({
        root: {
            position: "absolute",
            alignSelf:"center",
          '& > * + *': {
            marginTop: theme.spacing(2),
            
          },
        },
      }));
      const classes = useStyles();
      const [alerta, setAlerta] = useState(false);
    
   async function handleAddCliente(e){
       e.preventDefault();
       
       if(nome === '' || cpf === '' || usuario === '' || email === '') {
           setErrorMessage ('Preencha todos os campos solicitados');
           return;
       }

       const params = {
        nome: nome,
        usuario: usuario,
        cpf: cpf,
        email: email,
        dataNascimento: "1992-02-01T00:00:00Z",
        endereco: {
            rua: "Rua dos Bobos",
            numero: "0",
            complemento: "",
            bairro: "Castanheira",
            cidade: "Metropolis",
            estado: "SP",
            cep: "23451234",
           }
       }

       try {
            await api.post('cliente', params);
            const response = await api.get('cliente');
            const clienteLogado = response.data.pop() || [];
            localStorage.setItem("clienteLogado", JSON.stringify(clienteLogado));
            setAlerta(true);
            setTimeout( () => history.push('/categoria'), 2500);
            setNome('');
            setCpf('');
            setEmail('');
            setUsuario('');
            setErrorMessage('');
            
           
       } catch (error) {
           console.log ('handleAddCliente error', error);
       }
       console.log('form submitted');
       
    }

    return (
        <Wrap>
            <img src={logo} alt="" />
            <h1>Seja bem vindo!</h1>
            <p> Por favor digite seus dados para iniciar sua sessão.</p>
            <Form onSubmit={handleAddCliente}>
                <input value={nome} 
                onChange={e => setNome(e.target.value)} 
                type='text' 
                placeholder='Digite seu nome'></input>
                
                <input value={cpf} 
                onChange={e => setCpf(e.target.value)} 
                type='text' 
                placeholder='Digite seu cpf'></input>
                
                <input value={email} 
                onChange={e => setEmail(e.target.value)} 
                type='email' 
                placeholder='Digite seu email' required></input>
                
                <input value={usuario} 
                onChange={e => setUsuario(e.target.value)} 
                type='text' 
                placeholder='Digite seu Usuario'></input>
                
                <button type='submit' disabled={alerta}
                    variant="outlined"
                    >Enviar</button>
                <div className={classes.root}>
                <Collapse in={alerta}>
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    Bem vindo! <strong>{nome}</strong>, você será redirecionado para sessão de Categorias
                </Alert>
                </Collapse>
                </div>
            </Form>
            <p>{errorMessage}</p>
        </Wrap>
    )
}
export default Clientes;