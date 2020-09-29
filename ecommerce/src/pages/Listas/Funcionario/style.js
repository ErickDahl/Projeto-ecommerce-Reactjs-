import styled from 'styled-components';

export const FuncStyle = styled.div`
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
    
    .bla{
        width: 60%;
    }
    
    .preco{
        justify-content:flex-end;
        align-self:center;
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

    button {
    height: 40px
    font-weight: bold;
    border: 2px solid #5ce1e6;
    background: #abcd;
    margin-left:15px;
    width: 100px;
    justify-content:center;
    padding:5px;    
    border-radius: 5px;
    transition: 0.15s;
    }

    input{
        height: 40px;
        padding: 10px;
        border-radius: 5px;
        max-width: 300px;
        border:2px solid;
        background: #F2FDFD;
        margin-bottom: 10px;
        color:#000;
        border-color: #5ce1e6;

        -moz-appearance:textfield;
        appearance:textfield;
    }
`;



