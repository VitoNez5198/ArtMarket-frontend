import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
// import UserViewBuyer from './UserViewBuyer';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import MyContext from '../my_context';

const RegisterView = () => {
    // const [fullName, setFullName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [isRegistered, setIsRegistered] = useState(false); 

    // const { setUser, setUsersInfo } = useContext(MyContext);   

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({});

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // logica registro
    //     console.log('Nombre completo:', fullName);
    //     console.log('Email:', email);
    //     console.log('Contraseña:', password);

    //     setIsRegistered(true);
    // };

    const handleSubmit = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setUsuario({ ...usuario, ...field });
    };

    const registrarUsuario = async () => {
        const urlServer = "http://localhost:3000";
        const endpoint = "/auth/register";
        try {
            await axios.post(urlServer + endpoint, usuario);
            alert("Usuario registrado con éxito");     

            navigate("/Login");

            setTimeout(() => {
                window.location.reload();
            }, 500);

        }   catch (error) {
            alert("Algo salió mal.");
            console.log(error);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100 flex-column">
            <div className="p-1">
                <h5 className="mb-4">Registro de usuario</h5>
                <div className="form-group mb-3">
                    <label>Nombre de usuario</label>
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre de usuario"
                        value={usuario.username}
                        onChange={handleSubmit}
                        name = "username"
                        className='form-control'                        
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Ingresa tu email"
                        value={usuario.email}
                        onChange={handleSubmit}
                        className='form-control'
                        name='email'                        
                    />
                </div>
                <div className="form-group mb-4">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        value={usuario.password}
                        onChange={handleSubmit}
                        className='form-control'
                        name='password'
                    />
                </div>
                <button onClick={registrarUsuario} className="btn btn-dark mb-3" variant="dark">
                    Registrarse
                </button>
            </div>            
        </Container>
    );
};

export default RegisterView;
