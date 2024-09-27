import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import robotImage from '../assets/ImagenPrincipalRobots.png';

function LoginForm({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const validUsername = 'jd.briceno';
        const validPassword = 'password123';

        if (username === validUsername && password === validPassword) {
            onLoginSuccess();
        } else {
            setError('Error de autenticación. Revise sus credenciales');
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