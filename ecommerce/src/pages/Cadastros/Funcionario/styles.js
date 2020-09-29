import styled from 'styled-components';


export const Header = styled.div`
    display: flex;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 5px;
    justify-content:center;
`

export const Wrap = styled.div`
    display: flex;
`

export const Tabela = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:center;

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

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    input[type=number] {
    -moz-appearance:textfield;
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
    }
`;