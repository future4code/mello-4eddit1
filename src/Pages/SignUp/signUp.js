import React from "react";
import styled from "styled-components"
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { useForm } from './hook/useForm'

const ContainerSignUp = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  border: 1px solid black;
`
const FormConteiner = styled.form`
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

export default function SignUp () {
  const {form, onChange } = useForm({ username: "", email: "", password: ""})

  const history = useHistory()

  const handleInputChange = event => {
    const { name, value } = event.target

    onChange(name, value)
  }

  const handleFormValues = (event) => {
    event.preventDefault()
    registerUser()
    history.push("/login")
  }

  const registerUser = () => {
    Axios.post(`${baseUrl}/signup`, form)
    .then(response => {
      alert("Cadastrado Com Sucesso")
    })
    .catch(error => {
      console.log(error)
      alert("Algo Saiu Errado!")
    })
  }
  return (
    <ContainerSignUp>
      <FormConteiner onSubmit={handleFormValues}>
        <h1>Cadastrar</h1>
          <input 
            placeholder="Nome de Usuário"
            value={form.username}
            name="username"
            type="text"
            required
            onChange={handleInputChange}
          />
          <input 
            placeholder="Email"
            value={form.email}
            name="email"
            type="text"
            required
            onChange={handleInputChange}
          />
          <input 
            placeholder="Senha"
            value={form.password}
            name="password"
            type="text"
            required
            onChange={handleInputChange}
          />
          <button>Cadastrar</button>
      </FormConteiner>
    </ContainerSignUp>
  );
}
