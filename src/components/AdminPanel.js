import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Admin = () => (
    <Fragment>
        <Helmet><title>Login - Admin Panel</title></Helmet>
        <div id="login">
            <section>
                <div style={{ textAlign: 'center' }}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>Admin panel</h1>
                
                <div className="auth-container">
                    <Link to="/" className="auth-buttons" id="login-button">Home</Link>
                    <Link to="/users" className="auth-buttons" id="login-button">Users</Link>
                    <Link to="/admins" className="auth-buttons" id="signup-button">Admins</Link>
                </div>
            </section>
        </div>
    </Fragment>
);

export default Admin;