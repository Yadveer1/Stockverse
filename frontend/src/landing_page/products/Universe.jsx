import React from 'react';


function Universe() {
    return ( 
        <div style={{marginTop:'10rem'}} className="contianer">
            <h1 className='text-center'>The Zerodha Universe</h1>
            <p className='text-center my-4'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row  text-center mt-5">
                <div className="col p-3">
                    <img style={{width:'48%'}} src="assets\images\smallcaseLogo.png" alt="" />
                    <p className='mt-3'>Thematic investing platform</p>
                </div>
                <div className="col p-3">
                    <img style={{width:'48%'}} src="assets\images\streakLogo.png" alt="" />
                    <p className='mt-3'>Algo & strategy platform</p>
                </div>
                <div className="col p-3">
                    <img style={{width:'48%'}} src="assets\images\sensibullLogo.svg" alt="" />
                    <p className='mt-3'>Options trading platform</p>
                </div>
            </div>
            <div className="row  text-center mt-4">
                <div className="col p-3">
                    <img style={{width:'48%'}} src="assets\images\zerodhaFundhouse.png" alt="" />
                    <p className='mt-3'>Asset management</p>
                </div>
                <div className="col p-3">
                    <img style={{width:'48%'}} src="assets\images\goldenpiLogo.png" alt="" />
                    <p className='mt-3'>Bonds trading platform</p>
                </div>
                <div className="col p-3">
                    <img style={{width:'48%'}} src="assets\images\dittoLogo.png" alt="" />
                    <p className='mt-3'>Personalized advice on life</p>
                </div>
            </div>
            <div className="row">

            </div>
            <button className='p-2 fs-5 btn btn-primary' style={{width: "20%", margin: "auto"}}>Signup Now</button>

        </div>
     );
}

export default Universe;