import React from "react";
import Botton from './button.css';
import './index.css';

//se cria componentes quando quero que ele seja modificado mais de uma vez
export default function Header() //todos os componentes precisam ser exportáveis
{
    return (
        <>
            <header>
                <div className='logo'>Logo</div>
                <div className='busca'>Busca</div>
            </header>
        </>
        );
}