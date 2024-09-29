import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RobotList from './components/RobotList';
import Footer from './components/Footer';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };


    return (
        <div>
            {!isAuthenticated ? (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
            ) : (
                <RobotList/>
            )}
            <Footer />
        </div>
    );
}

export default App;