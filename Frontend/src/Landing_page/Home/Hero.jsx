import HeroPic from '../../assets/Picture/landing.svg'
function Hero() {
    return (

        <div className="container" >
            <div className = "row text-center">
              
                     <img src={HeroPic} alt="Hero Image" className="mb-40" />
                       
                      
                     <h1>Invest in everything </h1>
                     <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more </p>
                    <button className='p-2 btn btn-primary  ' style= {{width:"20%", margin: "0%, auto"}} >SignUp Now</button>
                 
             </div>


        </div>

    );
}

export default Hero;