
function LeftSection({ imageUrl,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-7 p-3">
                    <img src={imageUrl} />
                </div>

                <div className="col-4 p-5 mt-5 ms-5">
                    <h2>{productName}</h2>
                    <p> {productDesription}  </p>
                         
                  
                    <div className="row">
                        <p className="col-6">
                            <a href="#" >{ tryDemo} <i className="fa-solid fa-arrow-right"></i> </a>
                        </p>
                        <p className="col-6">
                            <a href="#">{learnMore} <i className="fa-solid fa-arrow-right"></i></a>
                        </p>


                    </div>
                    <div className="kite-mobile-links" >
                        <a href="#" ><img src="/src/assets/Picture/googlePlay.svg" alt="Get it on Google Play" /></a>
                        <a href="#" className="ms-4"><img src="/src/assets/Picture/appstore.svg" alt="Download on the App Store" /></a>

                    </div>


                </div>


            </div>

        </div>
    );
}

export default LeftSection; 