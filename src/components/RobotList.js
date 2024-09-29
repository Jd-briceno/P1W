import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import robotImage from '../assets/ImagenPrincipalRobots.png';
import RobotDetail from './RobotDetail';
import RobotTable from './RobotTable';


const RobotList = () => {

    const [selectedRobotId, setSelectedRobotId] = useState(null);
    const [robots, setRobots] = useState([]);
    
    const fetchRobots = async () => {
        try {
            const roman = await fetch("http://localhost:5001/robots")
            const json = await roman.json()
            console.log("hola", json)
            setRobots(json)
        } catch (error) {
            console.log(error)   
        }
    }

    useEffect(() => {
        fetchRobots()
    }, [])

    const handleRobotClick = (robotId) => {
        setSelectedRobotId(robotId);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Adopta un Robot con Robot Lovers!</h2>
            <div className="text-center">
                <img src={robotImage} alt="Imagen de robots" className="img-fluid my-4" style={{ maxHeight: '300px' }} />
            </div>
            <div className="row">
                <div className="col-md-8">
                    <RobotTable robots={robots} onRobotClick={handleRobotClick}/>
                </div>
                <div className="col-md-4">
                    {selectedRobotId ? (
                        <RobotDetail selectedRobotId={selectedRobotId}/>
                    ) : (
                        <p className="text-center">Selecciona un robot para ver más detalles.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RobotList;