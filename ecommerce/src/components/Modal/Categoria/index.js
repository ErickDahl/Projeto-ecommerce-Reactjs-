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


const Modal = ({categoria}) => {
    const [open, setOpen] = React.useState(false);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    

    useEffect(() => {
        setNome(categoria.nome);
        setDescricao(categoria.descricao);
    }, [categoria]);

    async function HandleEditCategoria(categoria) {
        const params = {
            id:categoria.id,
            nome: nome,
            descricao: descricao
        }

        try {
            await api.put(`categoria/${categoria.id}`,params);
            handleClose();
            
        } catch (error) {
            alert('HandleEditCategoria Error', error);
        }
    }

    return (
        <div>         
            <EditIcon size="small" onClick={() => handleOpen()} style={{cursor:"pointer"}} />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Categoria</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Mude os valores abaixo para editar as informações da Categoria
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
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)} 
                        margin="dense"
                        label="Descrição"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}  color="primary">
                    Cancelar
                </Button>
                <Button onClick={() => HandleEditCategoria(categoria)} color="primary">
                    Confirmar
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
    export default Modal;