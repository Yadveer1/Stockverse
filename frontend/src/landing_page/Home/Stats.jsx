import React from 'react';

function Stats() {
    return ( 
        <div className='container stats'>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 ">
                    <h1 className='my-h mb-4 fs-2'>Trust with confidence</h1>

                    <h3 className=' fs-4'>Customer-first always</h3>
                    <p className='mb-4 text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h3 className=' fs-4'>No spam or gimmicks</h3>
                    <p className='mb-4 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h3 className=' fs-4'>The Zerodha universe</h3>
                    <p className='mb-4 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 className=' fs-4'>Do better with money</h3>
                    <p className='mb-4 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-lg-5">
                    <img className='w-90' src="assets/images/ecosystem.png" alt="ecosystem" />
                    <div>
                        <div className="row">
                            <div className="col-6">
                                <a className='text-decoration-none' href="">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                            <div className="col-6">
                                <a className='text-decoration-none' href="">Try Kite <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;