import React from "react"
import { Link } from 'react-router-dom';  
function Welcome ()
{
    return (
            <div>
            <h1 className = "b"> Welcome To UrbanClean </h1>
            <nav className="nav">
          <Link to="/signup" className="btn btn-success"> Sign Up </Link>
          <Link to="/login" className="btn btn-success"> Login </Link>
          <Link to="/servicereq" className="btn btn-success"> Place Order </Link>
          <Link to="/trackorder" className="btn btn-success"> Track Order </Link>
          <Link to="/payment" className="btn btn-success"> Payment </Link>
          <Link to="/feedback" className="btn btn-success"> Feedback </Link>
            </nav> 
        </div>
    );
}
export default Welcome;


