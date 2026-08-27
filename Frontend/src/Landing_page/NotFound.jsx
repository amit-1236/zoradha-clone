import React from 'react';
import HomePage from '../Landing_page/NotFound.jsx';
import { Link } from 'react-router-dom';


function NotFound() {
    return ( 
         <div className="container p-5" >
                    <div className="row p-5" >
                        <div className="col">
                            <h2>Not Found </h2>
                            <p>Sorry , the page are looking for does not found </p>
                             <Link  to="/" >Go Home </Link>
                                 
                             
                        </div>
                    
                    </div>
        
            </div>
     );
}

export default NotFound;