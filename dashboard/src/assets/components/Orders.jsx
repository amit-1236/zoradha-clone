import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios ,{all} from "axios";
 
const Orders = () => {
    
    const [allOrder , setallOrder] = useState([]);
     
    useEffect(() => {
      axios.get("http://localhost:3002/newOrder").then((res) => {
        // console.log(res);
        setallOrder(res.data);


      });
    },[]);




  return (
    <div className="orders">
   
    {allOrder === 0 ? (
      <div className="no-orders" >
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          <button>Get started</button>
        </Link>
      </div>
    ):(
      
      <div className="order-table">
        
        <h3 className="title" style={{ marginTop:"10px" ,marginLeft: "10px"}}>Orders  ({allOrder.length})</h3>
        <table>
          <tr>
             <th>Name</th>
             <th>qty</th>
             <th>Price</th>
             <th>Mode</th>
          </tr>

          {allOrder.map((item , index) => {
            return(
              <tr>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td>{item.mode}</td>
              </tr>
            )
          })}
        </table>
      </div>
    )

        }
    </div>
  );
};

export default Orders;
