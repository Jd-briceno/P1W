import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import robotImage from '../assets/ImagenPrincipalRobots.png';

const RobotList = ({ robots, onRobotClick, selectedRobot }) => {
    return (
        <div className="container mt-5">
            <h2 className="text-center">Adopta un Robot con Robot Lovers!</h2>
            <div className="text-center">
                <img src={robotImage} alt="Imagen de robots" className="img-fluid my-4" style={{ maxHeight: '300px' }} />
            </div>
            <div className="row">
                <div className="col-md-8">
                    <table className="table robot-table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Modelo</th>
                                <th>Empresa Fabricante</th>
                            </tr>
                        </thead>
                        <tbody>
                            {robots.map((robot) => (
                                <tr key={robot.id} onClick={() => onRobotClick(robot)}>
                                    <td>{robot.id}</td>
                                    <td>{robot.nombre}</td>
                                    <td>{robot.modelo}</td>
                                    <td>{robot.empresa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    {selectedRobot ? (
                        <div className="robot-detail-card">
                            <h3>{selectedRobot.nombre}</h3>
                            <img src={selectedRobot.imagen} alt={selectedRobot.nombre} className="img-fluid mb-3" />
                            <ul>
                                <li><strong>Año de Fabricación:</strong> {selectedRobot.anioFabricacion}</li>
                                <li><strong>Capacidad de Procesamiento:</strong> {selectedRobot.capacidadProcesamiento}</li>
                                <li><strong>Humor:</strong> {selectedRobot.humor}</li>
                            </ul>
                        </div>
                    ) : (
                        <p className="text-center">Selecciona un robot para ver más detalles.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RobotList;