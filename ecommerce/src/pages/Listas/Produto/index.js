import React, {useState, useEffect} from 'react';
import api from '../../../services/api';
import Header from '../../../components/Header'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from "react-router-dom";
import SideBar from '../../../components/Sidebar/index';
import { ProdutoStyle, Wrap, Tabela } from './style';
import{useParams} from 'react-router-dom';
import Modal from '../../../components/Modal/Produto';

const Produto = () => {
    const[produto, setProduto] = useState([]);
    const[valorFiltro, setValorFiltro] = useState('');
    const { id } = useParams();

    
    const loadProduto = async () => {
    try{
            const response = await api.get('produto');
            setProduto(response.data);
        } catch (error) {
            console.log('loadProduto error', error);
        }
    };
    useEffect(() => {
        loadProduto();
    }, []);

    const addCarrinho = (produto) => {
        let listaCarrinho = JSON.parse(localStorage.getItem("itemCarrinho")) || [] ;
        let Existente = false;

        listaCarrinho.forEach(item => {
            if(item.id === produto.id) {
                Existente = true;
                item.volume++;
            }
        });

        if(Existente === false) {
            listaCarrinho.push({...produto, volume:1});

        }

        localStorage.setItem("itemCarrinho", JSON.stringify(listaCarrinho));
    }

    const removeProduto = async (produto) => {
        await api.delete(`produto/${produto.id}`);
        loadProduto();
      }


    const filtrarProdutos = (preco) => {
        
        if (preco <= 0) {
            loadProduto();
            return;
        } else {
            setValorFiltro('');
            let newproduto = produto.filter(produto => produto.valor <= preco);
            return setProduto(newproduto);
        }
        
    }

    return (
        <>
        <Header />
        <Wrap> 
            <SideBar></SideBar>
            
            <Tabela>
                <div>
                    <span>
                        Adicionar novo Produto
                        <Link to='/cadastro/produto' style={{textDecoration:'none', color:'white', marginRight:'10px'}}><AddCircleIcon size={22}  style={{marginLeft: 10} } /></Link> 
                    </span>
                        <input 
                            value={valorFiltro} 
                            onChange={preco => setValorFiltro(preco.target.value)} 
                            type='number'>
                        </input>
                        <button onClick={() => filtrarProdutos(valorFiltro)}>Filtrar</button>
                        <button onClick={() => filtrarProdutos(0)}>Zerar</button>
                </div>
                {produto.filter(produto => produto.idCategoria === parseInt(id)).map(produtosFiltrados => (
                    <ProdutoStyle key={produtosFiltrados.id}>
                       
                            <div className="nome">
                                <strong>{produtosFiltrados.nome}</strong>
                            </div>
                            <div className="bla">
                                <p>{produtosFiltrados.descricao}</p>
                            </div>
                            <div className="preco">
                                <p>R$ {produtosFiltrados.valor}</p>
                                <AddShoppingCartIcon size={22} onClick={() => addCarrinho(produtosFiltrados)} style={{marginLeft: 10, cursor:"pointer"}}></AddShoppingCartIcon>
                                <span>
                                        
                                        <DeleteIcon size={22} onClick={() => removeProduto(produtosFiltrados)} style={{marginLeft: 10, cursor:"pointer"}} />
                                        <Modal produto={produtosFiltrados}/>
                                       
                                </span>
                            </div>
                    </ProdutoStyle>
                ))}                
            </Tabela>   
        </Wrap>
        </>
    );
}
export default Produto;