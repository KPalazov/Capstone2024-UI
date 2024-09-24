import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const admins = [
    { id: 1, name: 'Tracey', CurrentClasses: 'Java1, C, C#', ProgramCoardinator: 'Yes', YearsOfTeaching: 2 },
    { id: 2, name: 'John', CurrentClasses: 'Java2, Networking, C#', ProgramCoardinator: 'No', YearsOfTeaching: 7 }
];

const Admins = () => (
    <Fragment>
        <Helmet><title>Admins - Admin Panel</title></Helmet>
        <div id="admins">
            <section>
                <div style={{ textAlign: 'center' }}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>Admins</h1>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Current Classes</th>
                            <th>Program Coardinator</th>
                            <th>Years Of Teaching</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map(admin => (
                            <tr key={admin.id}>
                                <td>{admin.name}</td>
                                <td>{admin.CurrentClasses}</td>
                                <td>{admin.ProgramCoardinator}</td>
                                <td>{admin.YearsOfTeaching}</td>
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

export default Admins;