import Logo from './../assets/Picture/logo.svg';
import googlePlay from './../assets/Picture/googlePlay.svg';
import appstore from './../assets/Picture/appstore.svg'

function Footer() {
    return ( 
        <div className="container" >
            <div className="row">
                <div className="col" >
                    <img src={Logo} style={{width: "120px"}} />
                    <p>© 2010 - 2026, Zerodha Broking Ltd.</p>
                    <p>All rights reserved.</p>
                    <ul style={{display: "flex", listStyle: "none",gap: "10px", padding:"4px"}}>
                        <li><i class="fa-brands fa-x-twitter"></i></li>
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-linkedin"></i></li>
                    </ul>
                    <hr/>
                    <ul style={{display:"flex", listStyle:"none",gap:"10px",padding:"5px",alignItems:"center"}} >
                        <li><i class="fa-brands fa-youtube"></i> </li>
                        <li> <i class="fa-brands fa-square-whatsapp"></i></li>
                        <li><i class="fa-brands fa-telegram"></i> </li>
                       
                    </ul>
                    <div className="app-badges" >
                        <a href="#"><img src={googlePlay} className="mb-5  "  style={{marginRight:"15px"}}/></a>
                         <a href="#"><img src={appstore} className="mb-5" /></a>
                    </div>

                </div> 
                <div className="col col-2" style={{textDecoration:"none"}}>
                    <p>Account</p>
                    <a href="">Open demat account</a><br/> 

                    <a href="">Minor demat account</a><br/> 

                    <a href="">NRI demat account</a><br/> 

                    <a href="">HUF demat account</a><br/> 

                    <a href="">Commodity</a><br/> 

                   <a href="" >Dematerialisation</a><br/> 

                    <a href="">Fund transfer</a><br/> 

                    <a href="">MTF</a><br/> 

                </div>
                <div className="col col-2" >
                    <p>Support</p>
                    <a href="">Contact us</a><br/>
                   <a href=""> Support portal</a><br/>
                   <a href=""> How to file a complaint?</a><br/>
                    <a href="">Status of your complaints</a><br/>
                    <a href="">Bulletin</a><br/>
                    <a href="">Circular</a><br/>
                    <a href="">Z-Connect blog</a><br/>
                    <a href="">Downloads</a><br/>
                </div>
                <div className="col col-2" >
                    <p>Company</p>
                     <a href=""> About</a><br/>
                     <a href=""> Philosophy</a><br/>
                     <a href=""> Press & media</a><br/>
                     <a href=""> Careers</a><br/>
                     <a href=""> Zerodha Cares (CSR)</a><br/>
                      <a href="">Zerodha.techv</a><br/>
                     <a href=""> Open source</a><br/>
                      <a href="">Referral program</a><br/>

                </div>
                <div className="col col-2" >
                    <p>Quick links</p><br/>
                    <a href="" >Upcoming IPOs</a><br/>
                    <a href="" >Brokerage charges</a><br/>
                    <a href="" >Market holidays</a><br/>
                    <a href="" >Economic calendar</a><br/>
                    <a href="" >Calculators</a><br/>
                    <a href="" >Markets</a><br/>
                    <a href="" >Sectors</a><br/>
                    <a href="" >Gift Nifty</a><br/>

                </div>
            </div>
        </div>
     )
}

export default Footer;