
import searchIcon from "../assets/img/search.png"
import notificationIcon from "../assets/img/notification.png"
import profilePicture from "../assets/img/profilePicture.png"
import "../assets/header.css";


export default function Header() {

    return (
        <>
            <header>
                <div className="search-container">
                    <input type="text" className="search-bar" placeholder="Pesquise um quadrinho ou autor" />
                    <img src={searchIcon} alt="Ícone de Busca" />
                </div>

                <div className="notification-profile-container">
                    <button className="notification-button">
                        <img src={notificationIcon} alt="Botão de Notificações" />
                    </button>
                    <div className="profile-info">
                        <img src={profilePicture} alt="Foto de Perfil" />
                        <span className="profile-name">PedrinhoZik412</span>
                    </div>
                </div>
            </header>
        </>
    );
}