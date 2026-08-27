import React from 'react';
function RightSection({imageUrl,
    productName,
    productDesription,
    learnMore
}) {
    return ( 
        <div className="container ">
              <div className="row mt-5 mb-5">
                <div className="col-4 p-5 mt-5 ms-5">
                    <h2>{productName}</h2>
                    <p>{productDesription}</p>
                    <div className="row">
                        <p><a href=""> { learnMore}</a></p>
                    </div>

                </div>
                <div className="col-7 p-3">
                    <img src={imageUrl} />
                </div>

                </div>    
        </div>
     );
}

export default RightSection;