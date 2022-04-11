import React from 'react';

function Pessoa({nome,idade , profissão , foto}) {
    return <div>
         <imag src={foto} alt={nome} />
         <h2>Nome: {nome}</h2>
         <p>Idade: {idade}</p>
         <p>profissão: {profissão}</p>

        </div>
}

export default Pessoa;