import React from 'react';
import './style.css'
import '../App.css'
import { useState } from "react";

export default function LandingPage(){

  const temaClaro = "modo-claro";
  const temaEscuro = "modo-escuro";


  const [estiloAtualizado, setEstiloAtualizado] = useState(true);

  const alterarCor = () => {
    setEstiloAtualizado(!estiloAtualizado);
  };


  return(
    <div className={estiloAtualizado ? temaClaro : temaEscuro} >
      <header className='limitar-secao cabecalho'>
        <img src='./assets/barbearia-logo.png' alt=' logo da barbearia ' className='logo'/>

        <button className={estiloAtualizado ? 'modo-claro' : 'modo-escuro'} onClick={alterarCor}>
          <img src={estiloAtualizado ? './assets/sun.png' : './assets/moon.png'} alt='botão em forma de lua' className='imagem-botao' />
          {estiloAtualizado ? 'Dark' : 'Light'}
        </button>

      </header>

      <section className='secao-banner'>

      </section>

      <section className='container-textos'>
        <div className='secao-textos limitar-secao'>
          <h1>Bem-vindo a Barber Shop</h1>

          <p className='sub-titulo'>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>

          <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concurso de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>

          <p className='assinatura'>S.kelly</p>

        </div>  


      </section>




    </div>
  )
} 