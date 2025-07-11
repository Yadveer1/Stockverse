import React from 'react';

function RightSection({imageURL, productName, productDescription,learnMore}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-5 p-5">
                    <h1>{productName}</h1>
                    <p className='mt-5'>{productDescription}</p>
                        <a className="text-decoration-none" href={learnMore}>
                            LearnMore
                        </a>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    <img className="w-100" src={imageURL} alt="Image" />
                </div>
            </div>
        </div>
     );
}

export default RightSection;