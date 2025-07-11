
function Awards() {
    return ( 
        <div className='container my-lg-5'>
            <div className='row'>
                <div className="col-lg-6 col-md-12 text-center ">
                    <img className='w-100' src="assets/images/largestBroker.svg" alt="largestBroker" />
                </div>
                <div className="col-lg-6 col-md-12">
                    <h2 className='my-h'>Largest stock broker in India</h2>
                    <p className='my-p'>2+ million Zerodha clients contribute to over 15% of all the stock volummes in India daily by trading and investing and investing in:</p>
                    <div className="row mt-lg-5">
                        <div className="col-6">
                            <ul>
                                <li><p>Future and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Goverment Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img className='w-100 mt-lg-3' src="assets/images/pressLogos.png" alt="pressLogos" />
                </div>
            </div>
        </div>
    );
}

export default Awards;