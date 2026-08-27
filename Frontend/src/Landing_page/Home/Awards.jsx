import AwardsImg from '../../assets/Picture/AwardsImg.svg';
function Awards() {
    return ( 
    <div className="container mb-10" >
            <div className="row">
                <div className="col-6">
                   <img src={AwardsImg} />
                </div>                

                <div className="col-6 mt-8 p-5">
                    <h2>Free and open market education</h2>
                    <p>
              Varsity, the largest online stock market education book in the world
              covering everything from the basics to advanced trading.
                   </p>
                   <a href="#">Varsity
                   <i class="fa-solid fa-arrow-right"></i>
                   </a>
                   <p>TradingQ&A, the most active trading and investment community in  India for all your market related queries.
                   </p>
                   <a href="#" >TradingQ&A 
                                       <i class="fa-solid fa-arrow-right"></i>

                   </a>
                </div>
                </div>           
    </div>);
}

export default Awards;