import React, {useState, useEffect} from 'react';
import api from '../../../services/api';
import img from '../../../assets/sem-foto.gif';
import Header from '../../../components/Header';
import {Link} from "react-router-dom";
import Modal from '../../../components/Modal/Categoria';


import CategoriaStyle from './styles';
import 'fontsource-roboto';


const Categoria = () => {
    const[categoria, setCategoria] = useState([]);

    const loadCategoria = async () => {
        try{
            const response = await api.get('categoria');
            // console.log('loadCategoria', response.data);

            setCategoria(response.data);
        } catch (error) {
            console.log('loadCategoria error', error);
        }
    };
    useEffect(() => {
        loadCategoria();
    }, []);
    
    return (
        <>
        <Header/>
        <CategoriaStyle>
            {categoria.map((categoria) => (
                <div className="itemCategoria" key={categoria.id} style={{backgroundImage: `url(${img})`}}>
                    
                    <div className="fundo">
                        <strong><Link to={`/produto/${categoria.id}`}>{categoria.nome}</Link></strong>
                        <div className="icone">
                            <Modal categoria={categoria}/>
                        </div>  
                    </div>               
                    
                </div>
            ))}
        </CategoriaStyle>
       
        </>
      );
}

export default Categoria;


