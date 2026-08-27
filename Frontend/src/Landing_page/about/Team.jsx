import React from 'react';
import NikalKamat from "../../assets/Picture/nithin-kamath.jpg"
function Team() {
    return ( 
         <div className="container">
                            <h2 className="text-center mt-5" >People </h2>

            <div className= "row mt-5 mb-5">
                
                <div className="col-5 mb-5 mt-5  text-center">
                    <img  src={NikalKamat} style={{borderRadius:"50%",width:"70%"}}/> 
                    <h5 className="mt-4"  >Nithin Kamath</h5>
                    <p>Founder, CEO</p> 
                </div>
                <div className="col-7 mt-8 p-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                     <p>
                       He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                     </p>
                     <p>Playing basketball is his zen.</p>
                     <p>Connect on :</p>
                </div>

            </div>
   <hr/>
         </div>
      
     );
}

export default Team;