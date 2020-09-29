import React, {useState, useEffect} from 'react';
import Header from '../../../components/Header'
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SideBar from '../../../components/Sidebar/index';
import { ProdutoStyle, Wrap, Tabela } from './style';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import api from '../../../services/api';
const Produto = () => {

    const [carrinho, setCarrinho] = useState([]);
    const [valorTotal, setValorTotal] = useState(0);

    const loadCarrinho = async () => {
        try{
                const response = await JSON.parse(localStorage.getItem("itemCarrinho")) || [];
                setCarrinho(response);
                if(response.length === 0) {
                    alert("CARRINHO VAZIO!")
                }
            } catch (error) {
                console.log('loadCarrinho error', error);
            }
        };
        
        useEffect(() => {
            loadCarrinho();
            somaTotal();
        }, []);

    const somaTotal = () => {
        let listaCarrinho = JSON.parse(localStorage.getItem("itemCarrinho")) || [];
        let total = 0;
        

        listaCarrinho.forEach(item => {
            total = total + (item.valor * item.volume)
        })

        setValorTotal(total);
    }
    
    const addCarrinho = (id) => {
        let listaCarrinho = JSON.parse(localStorage.getItem("itemCarrinho")) || [];

        listaCarrinho.forEach(item => {
            if(item.id === id) {
                item.volume++;
            }
        });

        localStorage.setItem("itemCarrinho", JSON.stringify(listaCarrinho));
        loadCarrinho();
        somaTotal();
    }

    const removeProduto = async (id) => {
        let listaCarrinho = JSON.parse(localStorage.getItem("itemCarrinho")) || [];

        listaCarrinho.forEach(item => {
            if(item.id === id && item.volume >= 1) {
                item.volume--;
                if (item.volume <= 0){
                    const IndexProduto = obj => obj.id === id;
                    listaCarrinho.splice(listaCarrinho.findIndex(IndexProduto), 1);
                }
            } 
        });

        localStorage.setItem("itemCarrinho", JSON.stringify(listaCarrinho));
        loadCarrinho();
        somaTotal();
      }

      const handleAddPedido = async (status) => {
        let listaCarrinho = JSON.parse(localStorage.getItem("itemCarrinho")) || [];
        let clienteLogado = JSON.parse(localStorage.getItem("clienteLogado")) || [];
        let validarCompra = true;

        if(listaCarrinho.length === 0) {
            alert('Adicionar items ao carrinho!');
            return;
        }
        listaCarrinho.forEach(item => {
            if(item.qtdEstoque <= 0) {
                validarCompra = false;
                alert(`${item.nome} fora de estoque!\nQauntidade máxima ${item.qtdEstoque}`);
            } 
        });

        
 
        const params = {
            dataPedido: "2020-09-10T12:13:12Z",
            pedidoStatus: status,
            idCliente: clienteLogado.id,
            nomeCliente: clienteLogado.nome
        }
 
        try {
            if(validarCompra){
                await api.post('pedido', params);
                alert("Sucesso");
            } else {
                alert(`Verifique seu carrinho!`);
            }   
            
        } catch (error) {
            console.log ('handleAddPedido error', error);
        }
        console.log('pedido submitted');
        
     }
      
        return (
            <>
            
            <Header />
            <Wrap> 
                <SideBar></SideBar>
                
                <Tabela>
                    
                    {carrinho.map(produto => (
                        <ProdutoStyle key={produto.id}>
                        
                                <div className="nome">
                                    <strong>{produto.nome}</strong>
                                </div>
                                <div className="desc">
                                    <p>{produto.descricao}</p>
                                    <p>Quantidade: {produto.volume}</p>
                                </div>
                                
                                <div className="preco">
                                    
                                    <p>R$ {produto.valor * produto.volume}</p>
                                    <AddShoppingCartIcon size={22} onClick={() => addCarrinho(produto.id)} style={{marginLeft: 10, cursor:"pointer"}} />
                                    <span>
                                            <DeleteIcon size={22} onClick={() => removeProduto(produto.id)} style={{marginLeft: 10, cursor:"pointer"}} />
                                    </span>
                                    
                                </div>
                                
                        </ProdutoStyle>
                        
                    ))} 
                    <div className="finalizar">
                        <Chip style={{backgroundColor:"green", fontSize:"16px", color:'white'}} label={`Valor Total: R$${valorTotal}`}/>
                        <Button onClick={() => handleAddPedido("AGUARDANDO_PAGAMENTO")} style={{backgroundColor:"green", color:'white'}} variant="contained">Cartão</Button>
                        <Button onClick={() => handleAddPedido("PAGO")} style={{backgroundColor:"green", color:'white'}} variant="contained">Boleto</Button>
                    </div>
                </Tabela>   
            </Wrap>
            </>
        );
}
export default Produto;