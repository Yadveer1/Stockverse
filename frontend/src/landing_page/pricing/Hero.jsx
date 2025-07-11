import React from 'react';

function Hero() {
    return ( 
        <div className="container px-4" style={{marginBottom:'5rem', marginTop:'5rem'}}>
            <div className="row text-center">
                <div className="col p-4">
                    <img className='p-2' src="assets/images/pricing0.svg" alt="" />
                    <h2>Free equity delivery</h2>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col p-4">
                    <img className='p-2' src="assets/images/intradayTrades.svg" alt="" />
                    <h2>Intraday and F&O trades</h2>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col p-4">
                    <img className='p-2' src="assets/images/pricing0.svg" alt="" />
                    <h2>Free direct MF</h2>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;