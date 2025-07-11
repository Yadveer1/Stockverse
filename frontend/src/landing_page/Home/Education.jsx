import React from 'react';

function Education() {
    return ( 
        <div className='container mt-lg-5 my-m-b'>
            <div className="row">
                <div className="col-6">
                    <img className='w-80' src="assets/images/education.svg" alt="" />
                </div>
                <div className="col-6">
                    <h1 className='fs-2'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a className='text-decoration-none' href="">Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a className='text-decoration-none' href="">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>

                
            </div>

        </div>
     );
}

export default Education;