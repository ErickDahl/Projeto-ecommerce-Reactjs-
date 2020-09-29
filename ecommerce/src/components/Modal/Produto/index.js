import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import api from '../../../services/api';


const Modal = ({produto}) => {
    const [open, setOpen] = React.useState(false);
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [qtdEstoque, setQtdEstoque] = useState('');
    const [idFunc, setIdFunc] = useState('');
    const [nomeFunc, setNomeFunc] = useState('');
    const [idCategoria, setIdCategoria] = useState('');
    const [nomeCategoria, setNomeCategoria] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const params = {
        nome: nome,
        valor: parseFloat(valor),
        qtdEstoque: parseInt(qtdEstoque),
        descricao: descricao,
        idFunc: parseInt(idFunc),
        nomeFunc: nomeFunc,
        idCategoria: parseInt(idCategoria),
        nomeCategoria: nomeCategoria,
       }

    useEffect(() => {
        setNome(produto.nome);
        setValor(produto.valor);
        setDescricao(produto.descricao);
        setQtdEstoque(produto.qtdEstoque);
        setIdFunc(produto.idFuncionario);
        setNomeFunc(produto.nomeFuncionario);
        setIdCategoria(produto.idCategoria);
        setNomeCategoria(produto.nomeCategoria);
        // console.log(produto);
    }, [produto]);

    async function HandleEditProduto(produto) {
    
        try {
            await api.put(`produto/${produto.id}`,params);
            handleClose();
            
        } catch (error) {
            alert('HandleEditProduto Error', error);
        }
    }

    return (
        <div>         
            <EditIcon size={22} onClick={() => handleOpen()} style={{marginLeft: 10, marginBottom: 5, cursor:"pointer"}} />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Produto</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Mude os valores abaixo para editar as informações do produto
                </DialogContentText>
                <TextField
                    autoFocus 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    margin="dense"
                    label="Nome"
                    type="text"
                    fullWidth
                />
                <TextField
                    value={valor}
                    onChange={e => setValor(e.target.value)} 
                    margin="dense"
                    label="Valor"
                    type="text"
                    fullWidth
                />
                <TextField
                    value={qtdEstoque}
                    onChange={e => setQtdEstoque(e.target.value)}
                    margin="dense"
                    label="Estoque"
                    type="text"
                    fullWidth
                />
                <TextField
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                    margin="dense"
                    label="Descrição"
                    type="text"
                    fullWidth
                />
                <TextField
                    value={idFunc}
                    onChange={e => setIdFunc(e.target.value)}
                    margin="dense"
                    label="Id Funcionário"
                    type="text"
                    fullWidth
                />
                <TextField
                    value={nomeFunc}
                    onChange={e => setNomeFunc(e.target.value)}
                    margin="dense"
                    label="Nome Funcionário"
                    type="text"
                    fullWidth
                />
                <TextField
                    value={idCategoria}
                    onChange={e => setIdCategoria(e.target.value)}
                    margin="dense"
                    label="Id da Categoria"
                    type="text"
                    fullWidth
                />
                <TextField
                    value={nomeCategoria}
                    onChange={e => setNomeCategoria(e.target.value)}
                    margin="dense"
                    label="Nome da Categoria"
                    type="text"
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}  color="primary">
                    Cancelar
                </Button>
                <Button onClick={() => HandleEditProduto()} color="primary">
                    Confirmar
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
    export default Modal;