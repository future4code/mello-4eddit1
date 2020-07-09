import React from "react";
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


const ContainerLanding = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  border: 1px solid black;
  text-align: center;

`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 85px;
  height: 300px;
  width: 300px;
  border: 1px solid black;
  text-align: center;
  align-items: center;

> button {
  
  height: 30px;
  width: 200px;
  margin: 5px;
  
}
`


export default function Landing() {

  const history = useHistory()

  const signUp = () => {
    history.push('/signUp')
  }
  const login = () => {
    history.push('/login')
  }


  return (
    <ContainerLanding>
      <Section>
        <button onClick={login}>Login</button>
        <button onClick={signUp}>Cadastrar</button>
      </Section>
    </ContainerLanding>
  );
}
