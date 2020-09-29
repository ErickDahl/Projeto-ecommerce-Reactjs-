import styled from 'styled-components';

export const Form = styled.form`
margin-top:40px;
max-width: 700px;
display:flex;
justify-content: space-around;
flex-direction:column;


input{
    height: 40px;
    padding: 10px;
    border-radius: 5px;
    width: 300px;
    border:2px solid;
    background: #F2FDFD;
    margin-bottom: 10px;
    color:#000;
    border-color: #5ce1e6;

}    
button {
    display:flex;
    height: 40px
    font-weight: bold;
    border: 2px solid #5ce1e6;
    background: #abcd;
    width: 300px;
    align-self:center;
    justify-content:center;
    padding:5px;    
    border-radius: 5px;
    transition: 0.15s;
    
    
    &:hover{
        opacity:0.9;
        
        background-image: linear-gradient(to left, #b3c2d1, #9AA6B3);
        
    }
}
`;

export const Textarea = styled.textarea`{
    resize: none;
    height: 100px;
    padding: 10px;
    border: 0;
    border-radius: 5px;
    max-width: 300px;
    border:2px solid;
    background: #F2FDFD;
    margin-bottom: 10px;
    border-color: #5ce1e6;


}
`;