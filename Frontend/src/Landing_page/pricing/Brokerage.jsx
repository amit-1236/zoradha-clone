import React from 'react';
function Brokerage() {
    return ( 
        <div className="container border-top  " >
            <div className="row    mt-5 mb-5  ">
 
                    <a href="#"style={{textDecoration:"none"}} >
                     <h3>Brokerage calculator</h3>
                     <ul style={{textDecorataion:"none",  listStyle:"none" , marginLeft: "8px", color:"black"}}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of 50 + GST per order.</li>

                         <li style={{ color: "inherit"}}>Digital contract notes will be sent via e-mail.</li>

                          <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>

                        <li>NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>

                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower)</li>

                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of 20 per executed order.</li>
                     </ul>
                     </a>   
                    
            
                
                
            </div>
        </div>
     );
}

export default Brokerage;