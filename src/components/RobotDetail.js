import React from 'react';
import '../styles.css';

const RobotDetail = ({ robot, onBack }) => {
    return (
        <div className="robot-detail-container">
            <button className="btn btn-secondary mb-3" onClick={onBack}>
                Volver al listado
            </button>
            <div className="robot-detail-card">
                <h3>{robot.nombre}</h3>
                <img src={robot.imagen} alt={robot.nombre} className="img-fluid" />
                <ul>
                    <li><strong>Año de Fabricación:</strong> {robot.anioFabricacion}</li>
                    <li><strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</li>
                    <li><strong>Humor:</strong> {robot.humor}</li>
                </ul>
            </div>
        </div>
    );
};

export default RobotDetail;