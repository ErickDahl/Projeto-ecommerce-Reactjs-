import styled from 'styled-components';

export const ProdutoStyle = styled.div`
    display:flex;
    margin-top: 10px;
    flex-direction:column 2;
    width: 100%;
    height:75px;
    background-color: #1d1d1d;
    border-radius:5px;
    
    .nome{
        width: 20%;
    }
    
    .desc{
        display:flex;
        width: 60%;
        justify-content: space-between;
    }

    .desc p:last-child{
        display:flex;
        justify-items:flex-end;   
    }
    
    .preco{
        justify-content:flex-end;
        width: 20%;
    }

    div{
        border-radius: 5px ;
        margin-top:10px;
        padding: 5px;
        display:flex;
     
    }
    

`;

export const Wrap = styled.div`
    display:flex;
    flex-direction:column 2;
    justify-content:space-between;
    }
`

export const Tabela = styled.div`
    display:flex;
    margin-top:10px;
    flex-direction:column;
    width:70%;

    .finalizar {
        display:flex;
        justify-content:flex-end;  
        align-items:flex-end;
    }

`;



