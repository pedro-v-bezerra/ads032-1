import { useRef, useState } from "react";
export default function LoginForm(props) {
  const refEmail = useRef();
  const refSenha = useRef();
  const [erroEmail, setErroEmail] = useState();
  const [erroSenha, setErroSenha] = useState();
  const [erroEmailESenha, setErroEmailESenha] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    if (!refEmail.current.value && !refSenha.current.value) {
      setErroEmailESenha("Preencha seus dados");
      setErroEmail("");
      setErroSenha("");
      refEmail.current.focus()
      return;
    } else {
      setErroEmailESenha("");
    } 
    if (!refEmail.current.value) {
      setErroEmail("Email obrigatório");
      refEmail.current.focus()
    } else {
      setErroEmail("");
    }
    if (!refSenha.current.value) {
      setErroSenha("Senha Incorreta");
      refSenha.current.focus()
      return;
    } else {
      setErroSenha("");
    }
    if (erroEmail != "" || erroSenha != "") {
      return;
    }
    props.onSubmit(event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" ref={refEmail} />
        {erroEmail && <p>{erroEmail}</p>}
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" name="senha" ref={refSenha} />
        {erroSenha && <p>{erroSenha}</p>}
        {erroEmailESenha && <p>{erroEmailESenha}</p>}
      </div>
      <button>Entrar</button>
    </form>
  );
}
