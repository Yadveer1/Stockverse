import React from 'react';

function Footer() {
    return (
        <footer className='mb-3' style={{ backgroundColor: '#fbfbfb'}}>
            <div style={{ backgroundColor: '#fbfbfb', marginTop: '100px' }} className="container border-top pt-5">

                <div className="row ">

                    <div className="col-3">
                        <img style={{ width: '70%' }} src="assets/images/logo.svg" alt="" />
                        <p className='text-muted mt-3'>© 2010 - 2025, Zerodha Broking Ltd.<br />All rights reserved.</p>
                        <i style={{ paddingRight: '0.5rem' }} class="fs-4 fa-brands fa-facebook"></i>
                        <i class="fs-4 p-2 fa-brands fa-linkedin"></i>
                        <i class="fs-4 p-2 fa-brands fa-instagram"></i>
                        <i class="fs-4 p-2 fa-brands fa-x-twitter"></i>
                        <br />
                        <i style={{ paddingRight: '0.5rem' }} class="mt-3 fs-4 fa-brands fa-whatsapp"></i>
                        <i class="fs-4 p-2 fa-brands fa-youtube"></i>
                        <i class="fs-4 p-2 fa-brands fa-telegram"></i>
                    </div>

                    <div className="col-3">
                        <h5>Company</h5>
                        <a href="" className='text-decoration-none mt-4 mb-2'>About</a><br />
                        <a href="" className='text-decoration-none my-2'>Products</a><br />
                        <a href="" className='text-decoration-none my-2'>Pricing</a><br />
                        <a href="" className='text-decoration-none my-2'>Referral programme</a><br />
                        <a href="" className='text-decoration-none my-2'>Careers</a><br />
                        <a href="" className='text-decoration-none my-2'>Zerodha.tech</a><br />
                        <a href="" className='text-decoration-none my-2'>Open source</a><br />
                        <a href="" className='text-decoration-none my-2'>Press & media</a><br />
                        <a href="" className='text-decoration-none my-2'>Zerodha Cares (CSR)</a><br />
                    </div>

                    <div className="col-3">
                        <h5>Support</h5>
                        <a href="" className='text-decoration-none mt-4 mb-2'>Contact us</a><br />
                        <a href="" className='text-decoration-none my-2'>Support portal</a><br />
                        <a href="" className='text-decoration-none my-2'>Z-Connect blog</a><br />
                        <a href="" className='text-decoration-none my-2'>List of charges</a><br />
                        <a href="" className='text-decoration-none my-2'>Downloads & resources</a><br />
                        <a href="" className='text-decoration-none my-2'>Videos</a><br />
                        <a href="" className='text-decoration-none my-2'>Market overview</a><br />
                        <a href="" className='text-decoration-none my-2'>How to file a complaint?</a><br />
                        <a href="" className='text-decoration-none my-2'>Status of your complaints</a><br />
                    </div>

                    <div className="col-3">
                        <h5>Account</h5>
                        <a href="" className='text-decoration-none mt-4 mb-2'>Open an account</a><br />
                        <a href="" className='text-decoration-none my-2'>Fund transfer</a>
                    </div>

                </div>
                <div className="row">
                    <p className='text-muted mt-5' style={{ fontSize: '11px' }}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a className='text-decoration-none'>complaints@zerodha.com</a>, for DP related to <a className='text-decoration-none'>dp@zerodha.com</a> . Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF<br></br>
                        Procedure to file a complaint on <a className='text-decoration-none' target="_blank" href="https://scores.sebi.gov.in/">SEBI SCORES:</a>  Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances <br /><br />
                        <a className='text-decoration-none'>Smart Online Dispute Resolution | Grievances Redressal Mechanism <br /><br /></a>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing. <br /><br />
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month. <br /><br />
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;