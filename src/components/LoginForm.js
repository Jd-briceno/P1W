import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import robotImage from '../assets/ImagenPrincipalRobots.png';

function LoginForm({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {

        e.preventDefault()
        try {
            const roman = await fetch('http://localhost:5001/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    login: username,
                    password: password
                })
            });            
            const json = await roman.json()
            console.log(json)
            if ("success" === json.status) {
                onLoginSuccess();
            } else {
                setError('Error de autenticación. Revise sus credenciales');
            }

        } catch (error) {
            console.log(error)   
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Adopta un Robot con Robot Lovers!</h2>
            <div className="text-center">
                <img src={robotImage} alt="Imagen de robots" className="robot-image img-fluid" />
            </div>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleLogin} className="w-50">
                    <div className="form-group">
                        <label>Nombre de usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                    <div className="d-flex justify-content-between mt-4">
                        <button type="submit" className="btn btn-primary">Ingresar</button>
                        <button type="button" className="btn btn-danger">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;