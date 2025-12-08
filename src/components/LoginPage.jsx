
import { useState, useEffect }from 'react';
import searchIcon from "../assets/img/search.png"
import backgroundImage from "../assets/img/backgroundImage.png";
import logo from "../assets/img/IndigoComics.png";
import { useNavigate } from "react-router-dom";
import "../assets/login_container.css";



export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    
    const navigate = useNavigate();

    async function login() {
        const user = {
            username: username,
            password: senha
        };

        var userToJson = JSON.stringify(user);
        const putUserResponse = fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: userToJson
        }).then(response => response.json())
            .then(json => {
                resetForm();
                console.log(json);
                if (json.status == '200') {
                    localStorage.setItem("localUser", JSON.stringify(json.user));
                    navigate("/home", {
                        state: {
                            userData: json.user,
                        }
                    });
                }
            });
    }
    
    function resetForm() {
        setUsername('');
        setSenha('');
    }

    useEffect(() => {
        var localUser = localStorage.getItem("localUser");
        console.log("localUser " + localUser);
        
        if (localUser != "") {
            var userJson = JSON.parse(localUser);
            console.log(userJson);
            navigate("/home", {
                state: {
                    userData: userJson,
                }
            });
        }

    },[]);

    return (
        <section className="login_page">
            <img src={backgroundImage} alt="backgroundImage" style={{width:"100vw", height:"100vh"}}/>
                <div className="loginContainer">
                    <img className="loginLogo" src={logo} alt="logo"/>
                        <div className="login-search">
                            <input type="text" value={username} onChange={e => setUsername(e.target.value) } className="login_bar_text" placeholder="Nome" />
                            <img src={searchIcon} alt="Ícone de Busca" />
                        </div>
                        <div className="login-search">
                            <input type="password" value={senha} onChange={e => setSenha(e.target.value) } className="login_bar_text" placeholder="Senha" />
                            <img src={searchIcon} alt="Ícone de Busca" />
                        </div>
                        <div className="login_button" onClick={login}>
                            Confirmar
                        </div>
                </div>
        </section>
        
    );
}