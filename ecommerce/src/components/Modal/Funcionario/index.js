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


const Modal = ({funcionario}) => {
    const [open, setOpen] = React.useState(false);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const params = {
        nome: nome,
        cpf: cpf
       }

    useEffect(() => {
        setNome(funcionario.nome);
        setCpf(funcionario.cpf);
    }, [funcionario]);

    async function HandleEditFuncionario(funcionario) {
    
        try {
            await api.put(`funcionario/${funcionario.id}`,params);
            handleClose();
            
        } catch (error) {
            alert('HandleEditFuncionario Error', error);
        }
    }

    return (
        <div>         
            <EditIcon size={22} onClick={() => handleOpen()} style={{marginLeft: 10, marginBottom: 5, cursor:"pointer"}} />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Funcionário</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Mude os valores abaixo para editar as informações do funcionário
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
                    value={cpf}
                    onChange={e => setCpf(e.target.value)} 
                    margin="dense"
                    label="Cpf"
                    type="text"
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}  color="primary">
                    Cancelar
                </Button>
                <Button onClick={() => HandleEditFuncionario()} color="primary">
                    Confirmar
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
    export default Modal;