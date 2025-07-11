import React from 'react';

function Hero() {
    return (
        <section style={{backgroundColor:'#387ed1', color:'#FFF'}} className="container-fluid" id="supportHero">
            <div className="p-5 d-flex" id="supportWrapper">
                <div className="col">
                    <h4>Support Portal</h4>
                </div>
                <div className="col text-end">
                    <a className='text-white' href="">Track Tickets</a>
                </div>
            </div>
            <div className="row p-5 m-3">
                <div className="col-6 p-3">
                    <h1 className="fs-3">
                        Search for an answer or browse help topics to create a ticket
                    </h1>
                    <div class="input-group flex-nowrap">
                        <input type="text" class="form-control" placeholder="Eg. how do I activate F&O" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <br />
                    <a className='text-white' href="">Track account opening</a>
                    <a className='text-white mx-4' href="">Track segment activation</a>
                    <a className='text-white mx-4' href="">Intraday margins</a>
                    <a className='text-white mx-4' href="">Kite user manual</a>
                </div>
                <div className="col-6 p-3">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li>
                            <a className='text-white' href="">Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a className='text-white' href="">Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;