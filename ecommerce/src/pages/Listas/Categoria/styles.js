import styled from 'styled-components';


const CategoriaStyle = styled.div`
display:flex;
flex-direction: row;
flex-wrap:wrap;
margin-top:20px;
justify-content:space-around;
text-decoration: none;
background:#1D1D1D;
border-radius:10px;
padding:20px;



.itemCategoria{
  display:flex;
  width:20%;  
  height:200px;  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin:10px;
  color: #5ce1e6;
  flex-direction:column-reverse;
  justify-content:space-between;
  border-radius:5px;
 
  .fundo{
    display:flex;
    flex-direction: row;
    background-color: rgba(51, 51, 51, 0.5) ;
    justify-content:space-between;
    height:30%;
    padding:0 10px 10px 10px;
  }
    
  a {
    text-decoration: none;
    color: #5ce1e6;
    display:flex;
    align-self:flex-end;

    &:hover{
        color: #ffffff;            
        transition:0.5s;
    }
  }
  
  .icone{
    display:flex;
    align-self:flex-end;
    
  }

  
}


`;


export default CategoriaStyle;

