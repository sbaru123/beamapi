import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const InfoPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        axios.get('http://localhost:8081/users')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <div className='container'>
            <h2>User Information</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Street Address</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Area</th>
                        <th>No. of Floors</th>
                        <th>Year Built</th>
                        <th>Purpose Usage</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.street_address}</td>
                            <td>{user.state}</td>
                            <td>{user.zip_code}</td>
                            <td>{user.purpose_usage}</td>
                            <td>{user.area}</td>
                            <td>{user.no_of_floors}</td>
                            <td>{user.year_built}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <Link to="/login" className='btn btn-default-border w-100 bg-light rounded-0 text-decoration-none'>Return</Link>
            </div>
        </div>
    );
};

export default InfoPage;
