import { Link } from 'react-router-dom';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className="container text-center mt-4">
            <div class="number">404</div>
            <div class="text">
                <span>Ooops...</span><br />
                <p>page not found</p>
            <Link className='text-decoration-none' to="/" >
                <p>Go to home</p>
            </Link>
            </div>
        </div>
    );
};

export default ErrorPage;