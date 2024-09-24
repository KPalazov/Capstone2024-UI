import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const StudentLogin = () => {
    // State variables for username and quiz code
    const [username, setUsername] = useState('');
    const [quizCode, setQuizCode] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform validation and handle form submission logic
        console.log('Submitted');
    };

    return (
        <Fragment>
            <Helmet><title>Login - Quiz App</title></Helmet>
            <div id="studentlogin">
                <section>
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-cube-outline cube"></span>
                    </div>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
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
                            <label htmlFor="quizCode">Quiz Code</label>
                            <input
                                type="text"
                                id="quizCode"
                                name="quizCode"
                                value={quizCode}
                                onChange={(e) => setQuizCode(e.target.value)}
                                required
                            />
                        </div>
                        
                        <button type="submit" className="-button">Login</button>
                        
                    </form>
                    <div className="auth-container">
                        <Link to="/" className="auth-buttons" id="login-button">Home</Link>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export default StudentLogin;