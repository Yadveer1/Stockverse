import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className="row text-center">
                <img style={{margin:'auto',width: '80%'}} src="assets/images/homeHero.png" alt="Hero Image" />
                <h1 className='mt-lg-5 my-h'>Invest in everything</h1>
                <p className='my-p'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 mb-3 fs-5 btn btn-primary my-b-hero' style={{width: "20%", margin: "auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;