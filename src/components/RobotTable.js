import React from 'react';
import '../styles.css';

const RobotTable = ({ robots, onRobotClick }) => {
    return (
        <table className="unique-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Modelo</th>
                    <th>Empresa Fabricante</th>
                </tr>
            </thead>
            <tbody>
                { robots.length !== 0 ? 
                robots.map((robot) => (
                    <tr key={robot.id} onClick={() => onRobotClick(robot.id)}>
                        <td>{robot.id}</td>
                        <td>{robot.nombre}</td>
                        <td>{robot.modelo}</td>
                        <td>{robot.empresaFabricante}</td>
                    </tr>
                )): <></>
                }
            </tbody>
        </table>
    );
};

export default RobotTable;