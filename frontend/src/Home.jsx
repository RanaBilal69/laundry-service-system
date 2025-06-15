import React from "react"
import { Link } from 'react-router-dom';  
function Welcome ()
{
    return (
            <div>
                <h1>Laundry Service System</h1>
            <Link to="/signup" className="btn btn-success">SignUp Page</Link> <br></br> <br></br> 
            <Link to="/login" className="btn btn-success">Login</Link> <br></br> <br></br> 
            <Link to="/servicereq" className="btn btn-success">Place Order</Link> <br></br> <br></br> 
            <Link to="/trackorder" className="btn btn-success">Track Order</Link> <br></br> <br></br> 
            <Link to="/payment" className="btn btn-success">Payment</Link> <br></br> <br></br> 
            <Link to="/feedback" className="btn btn-success">Feedback</Link> <br></br> <br></br> 
        </div>
    );
}
export default Welcome;


