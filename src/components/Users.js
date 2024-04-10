import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const users = [
    { id: 1, name: 'John', classes: 'Java1, C, C#', program: 'SDNE' },
    { id: 2, name: 'Alice', classes: 'Java2, Networking, C#', program: 'SI' },
    { id: 3, name: 'Bob', classes: 'Database, C#', program: 'BCS' },
    { id: 4, name: 'Janice', classes: 'C#', program: 'CP' },
    { id: 5, name: 'Dennis', classes: 'PHP, Networking', program: 'NCS' }
];

const Users = () => (
    <Fragment>
        <Helmet><title>Users - Admin Panel</title></Helmet>
        <div id="users">
            <section>
                <div style={{ textAlign: 'center' }}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>Users</h1>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Classes</th>
                            <th>Program</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.classes}</td>
                                <td>{user.program}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="auth-container">
                    <Link to="/adminPanel" className="auth-buttons" id="login-button">Admin Panel</Link>
                    <Link to="/users" className="auth-buttons" id="login-button">Users</Link>
                    <Link to="/admins" className="auth-buttons" id="signup-button">Admins</Link>
                </div>
            </section>
        </div>
    </Fragment>
);

export default Users;