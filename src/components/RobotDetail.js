import React, { useEffect, useState } from 'react';
import '../styles.css';

const RobotDetail = ({ selectedRobotId }) => {

    console.log(selectedRobotId)
    const [selectedRobot, setSelectedRobot] = useState(null);

    const fetchRobot = async () => {
        try {
            const roman = await fetch(`http://localhost:5001/robots/${selectedRobotId}`)
            const json = await roman.json()
            console.log("hola1", json)
            setSelectedRobot(json)
        } catch (error) {
            console.log(error)   
        }
    }

    useEffect(() => {
        fetchRobot()
    }, [selectedRobotId])

    return (
        <div className="robot-detail-card">
            <h3>{selectedRobot?.nombre}</h3>
            <img src={selectedRobot?.imagen.replace(/^(.*?)(?=images)/, "https://raw.githubusercontent.com/fai-aher/T34-Wiki-Backup/refs/heads/main/")} alt={selectedRobot?.nombre} className="img-fluid mb-3" />
            <ul>
                <li><strong>Año de Fabricación:</strong> {selectedRobot?.anioFabricacion}</li>
                <li><strong>Capacidad de Procesamiento:</strong> {selectedRobot?.capacidadProcesamiento}</li>
                <li><strong>Humor:</strong> {selectedRobot?.humor}</li>
            </ul>
        </div>
    );
};

export default RobotDetail;