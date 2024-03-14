import { Button, Layout, TextField } from "../../components";
import {
  LoginActionContentElement,
  LoginBgImage,
  LoginWrapperElement,
} from "./Login.style";
import LoginBg from "../../assets/bg-top.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSenha(value);
  };

  const handleLogin = async (event) => {
    event?.preventDefault();
    const url = ""
    const payLoad = {
      login: email,
      password: senha
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(payLoad)
      });

      if (response.ok == false) {
        const error = response.json()
        alert(error.message)
        return;
      }
      

      const data = await response.json();

      if (data) {
        sessionStorage.setItem('userToken', data.token)
        navigate("/hamburgers")
      }
    } catch(error) {
      console.log("error")
    } finally {
      console.log("finally")
    }
  };

  return (
    <Layout>
      <LoginWrapperElement>
        <LoginActionContentElement>
          <h1>Entre com sua conta</h1>
          <p>Entre com sua conta para fazer pedidos</p>
          <TextField id="email" label="E-mail" type="email"
            onChange={handleEmail}
          />
          <TextField id="password" label="Senha" type="password" 
            onChange={handleSenha}
          />
          <Button onClick={(e) => handleLogin(e)}>Entrar</Button>
        </LoginActionContentElement>
        <LoginBgImage src={LoginBg} alt="placeholder" />
      </LoginWrapperElement>
    </Layout>
  );
}
