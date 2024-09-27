import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RobotList from './components/RobotList';
import Footer from './components/Footer';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [selectedRobot, setSelectedRobot] = useState(null);

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };

    const handleRobotClick = (robot) => {
        setSelectedRobot(robot);
    };

    // Lista de robots simulada
    const robots = [
        { id: 1, nombre: 'Pedrito', modelo: 'PR-001', empresa: 'Robotico Corp', imagen: 'path-to-image', anioFabricacion: 2020, capacidadProcesamiento: '1.8 GHz', humor: 'Alegre y juguetón.' },
        { id: 2, nombre: 'IronChef', modelo: 'IC-3000', empresa: 'RoboCocina Inc.', imagen: 'path-to-image', anioFabricacion: 2021, capacidadProcesamiento: '2.0 GHz', humor: 'Serio y preciso.' },
        { id: 3, nombre: 'Chispita', modelo: 'LT-007', empresa: 'SparkBots Ltd', imagen: 'path-to-image', anioFabricacion: 2022, capacidadProcesamiento: '2.4 GHz', humor: 'Curioso y juguetón.' },
        // Otros robots...
    ];

    return (
        <div>
            {!isAuthenticated ? (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
            ) : (
                <RobotList robots={robots} onRobotClick={handleRobotClick} selectedRobot={selectedRobot} />
            )}
            <Footer />
        </div>
    );
}

export default App;