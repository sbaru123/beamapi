import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homePage.css'; // Assuming you have a CSS file for additional styling

import logo from './logo.png'; // Importing the logo image

function HomePage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Trigger the fade-in effect when the component mounts
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
            el.classList.add('visible');
        });
    }, []);

    const handleStartClick = () => {
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div className="homepage-container d-flex justify-content-center align-items-center">
            <div className="homepage-content text-center p-4 rounded shadow">
                <img src={logo} alt="Logo" className="logo mb-4 fade-in" />
                <h1 className="display-4 mb-3 fade-in fade-in-title">Building Energy Analysis & Monitoring</h1>
                <h2 className="lead mb-4 fade-in fade-in-name">By Suhaan Baru</h2>
                <button onClick={handleStartClick} className="btn btn-success btn-lg fade-in">Start</button>
            </div>
        </div>
    );
}

export default HomePage;
