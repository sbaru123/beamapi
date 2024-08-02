import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';
import { Link, Navigate } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        streetAddress: '',
        state: '',
        zipCode: '',
        purposeUsage: '',
        area: '',
        noOfFloors: '',
        yearBuilt: '',
        password: ''
    });
    const [redirect, setRedirect] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/signup', formData)
            .then(response => {
                console.log(response.data);
                if (response.data.message === 'User registered successfully') {
                    setRedirect(true);
                } else {
                    console.error('Signup failed:', response.data);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    if (redirect) {
        return <Navigate to="/users" />;
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className="card">
                <div className="card-header">
                    <img src="./logo.png" alt="Logo" className="logo mb-2" />
                    <h2>Building Energy Analysis & Monitoring</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Name</label>
                                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Street Address</label>
                                <input type="text" className="form-control" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label>State</label>
                                <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} required maxLength="2" />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label>Zip Code</label>
                                <input type="text" className="form-control" name="zipCode" value={formData.zipCode} onChange={handleChange} required maxLength="10" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Purpose & Usage</label>
                                <input type="text" className="form-control" name="purposeUsage" value={formData.purposeUsage} onChange={handleChange} required maxLength="255" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Area</label>
                                <input type="text" className="form-control" name="area" value={formData.area} onChange={handleChange} required maxLength="255" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>No. of Floors</label>
                                <input type="number" className="form-control" name="noOfFloors" value={formData.noOfFloors} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Year Built</label>
                                <input type="number" className="form-control" name="yearBuilt" value={formData.yearBuilt} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required maxLength="255" />
                            </div>
                        </div>
                        <button type="submit" className='btn btn-primary w-100'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
