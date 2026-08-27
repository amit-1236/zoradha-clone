import pricingEq from "../../assets/Picture/pricingEq.svg"
import pricingEqSec from "../../assets/Picture/pricingEqSec.svg"
import trades from "../../assets/Picture/trades.svg"
function Pricing() {
    return (
         <div className="container p-5" >
            <div className="row p-5" >
                <div className="col-6">
                    <h2>Unbeatable pricing </h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                     <a href="#" >See pricing 
                         <i className="fa-solid fa-arrow-right"></i>
                     </a>
                </div>
                <div className="col-6" >
                    <div style={{display: "flex", width: "190px" }} >
                        <img src={pricingEq} alt="Pricing comparison" />
                        <img src={pricingEqSec} alt="pricing comparsion" />
                        <img src={trades} alt="third img" />

                    </div>
                </div>
            </div>

    </div>);
}

export default Pricing;