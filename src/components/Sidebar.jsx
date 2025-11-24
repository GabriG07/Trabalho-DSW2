import { useState } from "react";
import logo from "../assets/img/IndigoComics.png";
import homeIcon from "../assets/img/home.png";
import collectionIcon from "../assets/img/suaColecao.png";
import favsIcon from "../assets/img/favoritos.png";
import newsIcon from "../assets/img/novidades.png";
import configsIcon from "../assets/img/configs.png";
import leaveIcon from "../assets/img/sair.png";
import "../assets/sidebar.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ closed, setClosed }) {

    const navigate = useNavigate();

    function toggleSidebar() {
        setClosed(!closed);
    }

    return (
        <>
            <button id="toggle-button" className={`${closed ? "closed" : ""}`} onClick={toggleSidebar} aria-label="Abrir menu de navegação">☰</button>

            <nav className={`sidebar ${closed ? "closed" : ""}`} id="sidebar">
                <div className="sidebar-top">
                    <img className="logo" src={logo} alt="logo" onClick={() => navigate("/")} />
                    <ul>
                        <li onClick={() => navigate("/")}><img src={homeIcon} alt="Botão Home" /><span>Menu</span></li>
                        <li><img src={collectionIcon} alt="Botão de Coleção" /><span>Sua Coleção</span></li>
                        <li><img src={favsIcon} alt="Botão de Favoritos" /><span>Favoritos</span></li>
                        <li><img src={newsIcon} alt="Botão de Novidades" /><span>Novidades</span></li>
                    </ul>
                </div>

                <div className="sidebar-bottom">
                    <ul>
                        <li><img src={configsIcon} alt="Botão de Configurações" /><span>Configurações</span></li>
                        <li><img src={leaveIcon} alt="Botão de Sair" /><span>Sair</span></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}