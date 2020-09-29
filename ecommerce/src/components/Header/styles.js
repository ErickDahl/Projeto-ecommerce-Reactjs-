import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  background: #121212;
  border-radius: 10px;
  padding: 5px;
  img{
    max-width:250px;
    align-self:center;
    padding:20px;
  }
  ul {
    padding:10px;
    display: flex;
    list-style: none;
    align-items:flex-end;
    
    
    li {
      font-size: 15px;
      padding: 0px;
      color: #5ce1e6;
      
      
      
      & + li {
        margin-left: 10px;
      }

      a {
        text-decoration: none;
        color: #5ce1e6;

        &:hover{
            color: #ffffff;            
            transition:0.5s;
        }
      }      
    }
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #535652;
`;

