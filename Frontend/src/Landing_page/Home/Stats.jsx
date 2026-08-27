import ecosystem from '../../assets/Picture/ecosystem.png'
function Stats() {
    return (  
        <div className="container p-5" style={{ marginTop: "15px" }}>
            <div className="row"  >
                  <div className="col-5 p-5" >
                    <h2 className="mb-5" >Trust with confidence</h2>
                    <div className="why-us" >
                        <h3>Customer-first always</h3>
                        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className="why-us " >
                        <h3>No spam or gimmicks</h3>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.

</p>
                    </div>
                     <div className ="why-us" >
                        <h3>The Zerodha universe
</h3>                   
                     <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.

</p>
                     </div>


                    </div>  
                  <div className="col-7" >
                    <img src={ecosystem} style={{width:"80%", padding:"40px 0px", marginLeft:"5px"}} alt="ecoSystem" />
                    </div>  

            </div>

        </div>
    );
}

export default Stats ;