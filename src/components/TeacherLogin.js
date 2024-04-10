import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const TeacherLogin = () => {
    // State variables for teacher username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform validation and handle form submission logic
        console.log('Submitted');
    };

    return (
        <Fragment>
            <Helmet><title>Teacher Login - Quiz App</title></Helmet>
            <div id="studentlogin">
                <section>
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-cube-outline cube"></span>
                    </div>
                    <h1>Teacher Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Teacher Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Teacher Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="-button">Login</button>
                    </form>
                    <div className="auth-container">
                        <Link to="/create-quiz" className="auth-buttons" id="login-button">Create a Quiz</Link>
                        <Link to="/use-existing-quiz" className="auth-buttons" id="login-button">Use Existing Quiz</Link>
                        <Link to="/" className="auth-buttons" id="login-button">Home</Link>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export default TeacherLogin;