import {useState} from 'react'

function Condicional() {

    const [email,setEmail] = useState()
    const [UserEmail,setUserEmail] = useState()
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }
    function limparEmail(e){
        e.preventDefault()
        setUserEmail('')
    }
    return (
        <div>
          <h2> cadastre seu email: </h2>
          <form> 
          <input type="email" placeholder="Digite seu email..."
           onChange={(e)=> setEmail(e.target.value)}/>
          <button  type="submit" onClick={enviarEmail}> Enviar-Email </button>
          {UserEmail && (
              <div>
              <p> O email do usuario é: {UserEmail} </p>   
              <button onclick={limparEmail}>limpar-email</button> 
              </div>
          )} 
          </form>
        </div>
    );
}

export default Condicional;