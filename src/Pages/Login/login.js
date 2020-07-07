import React, { useState, useEffect} from "react";
import styled from "styled-components"
import Axios from "axios";
import { useHistory } from 'react-router-dom'


const ContainerLogin = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  border: 1px solid black;
`
const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 40px;
  height: 400px;
  width: 400px;
  border: 1px solid black;
  text-align: center;
  align-items: center;

> input {
  height: 30px;
  width: 250px;
  margin: 15px;
}

> button {
  height: 30px;
  width: 200px;
  margin: 5px;
  
}
`
  const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"



export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()


  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const login = async () => {
    const loginBody = {
      email: email,
      password: password
    }
    try {
      const response = await Axios.post(`${baseUrl}/login`, loginBody)
      window.localStorage.setItem("token", response.data.token)
      alert("😃,Você Está Logado")
      history.push('/feed')
    } catch (error) {
      console.log(error)
      alert("😱, Algo Deu Errado")
    }
  }
  const signUp = () => {
    history.push('/signUp')
  }

  return (
    <ContainerLogin>
      <FormDiv>
        <h1>Login</h1>
        <input
          placeholder="Email"
          value={email} onChange={handleEmail}
        />
        <input
          placeholder="Senha"
          value={password} onChange={handlePassword}
        />
        <button onClick={login}>Entrar</button>
        <button onClick={signUp}>Cadastrar</button>
      </FormDiv>
    </ContainerLogin>
  );
}