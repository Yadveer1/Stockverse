import React from "react";

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img className="w-100" src={imageURL} alt="Image" />
                </div>
                <div className="col-1"></div>
                <div className="col-5 p-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mt-4 mb-4">
                        <a className="text-decoration-none" href={tryDemo}>
                            TryDemo
                        </a>
                        <a className="text-decoration-none mx-4" href={learnMore}>
                            LearnMore
                        </a>
                    </div>
                    <div>
                        <a className="text-decoration-none " href={appStore}>
                            <img src="assets/images/appstoreBadge.svg" alt="" />
                        </a>
                        <a className="text-decoration-none mx-4" href={googlePlay}>
                            <img src="assets/images/googlePlayBadge.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
