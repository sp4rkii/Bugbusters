import React, { useEffect } from 'react';

import './Login.css'; // Import the CSS file

function LoginPage() {
    
    useEffect(() => {
        const container = document.getElementById('container');

        const toggle = () => {
            container.classList.toggle('sign-in');
            container.classList.toggle('sign-up');
        };

        setTimeout(() => {
            container.classList.add('sign-in');
        }, 200);
    }, []);

    const handleToggleClick = () => {
        const container = document.getElementById('container');
        container.classList.toggle('sign-in');
        container.classList.toggle('sign-up');
    };

    return (
        <div id="container" className="container" >
            {/* FORM SECTION */}
            <div className="row">
                {/* SIGN UP */}
                <div className="col align-items-center flex-col sign-up">
                    <div className="form-wrapper align-items-center">
                        <div className="form sign-up">
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Username"/>
                            </div>
                            <div className="input-group">
                                <i className='bx bx-mail-send'></i>
                                <input type="email" placeholder="Email"/>
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password"/>
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Confirm password"/>
                            </div>
                            <button>
                                Sign up
                            </button>
                            <p>
                                <span>
                                    Already have an account?
                                </span>
                                <b onClick={handleToggleClick} className="pointer">
                                    Sign in here
                                </b>
                            </p>
                        </div>
                    </div>
                </div>
                {/* END SIGN UP */}
                {/* SIGN IN */}
                <div className="col align-items-center flex-col sign-in">
                    <div className="form-wrapper align-items-center">
                        <div className="form sign-in">
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Username"/>
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password"/>
                            </div>
                            <button>
                                Sign in
                            </button>
                            <p>
                                <b>
                                    Forgot password?
                                </b>
                            </p>
                            <p>
                                <span>
                                    Don't have an account?
                                </span>
                                <b onClick={handleToggleClick} className="pointer">
                                    Sign up here
                                </b>
                            </p>
                        </div>
                    </div>
                    <div className="form-wrapper">
        
                    </div>
                </div>
                {/* END SIGN IN */}
            </div>
            {/* END FORM SECTION */}
            {/* CONTENT SECTION */}
            <div className="row content-row">
                {/* SIGN IN CONTENT */}
                <div className="col align-items-center flex-col">
                    <div className="text sign-in">
                        <h2>
                            Welcome
                        </h2>
                    </div>
                    <div className="img sign-in">
                
                    </div>
                </div>
                {/* END SIGN IN CONTENT */}
                {/* SIGN UP CONTENT */}
                <div className="col align-items-center flex-col">
                    <div className="img sign-up">
                    
                    </div>
                    <div className="text sign-up">
                        <h2>
                            Join with us
                        </h2>
        
                    </div>
                </div>
                {/* END SIGN UP CONTENT */}
            </div>
            {/* END CONTENT SECTION */}
        </div>
    );
}

export default LoginPage;
