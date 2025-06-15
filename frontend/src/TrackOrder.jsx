import { useState } from "react";   
import axios from 'axios'; 

function TrackOrder() {
    const [number, setNumber] = useState();  
    
    const handleSubmit = (e) => {
        e.preventDefault();  

        axios.post('http://localhost:5000/trackorder', { number })
    };

     return (
        <div> 
            <form onSubmit={handleSubmit}>  
                <h2 className = 'text-success'>Track Your Order </h2> <br></br> 
               <b> Enter Your Phone No. </b> 
                <input 
                    type="number"  
                    name="number" 
                    onChange={(e) => setNumber(e.target.value)}  
                />
                <br></br>  <br></br>
                
                <button className = 'btn btn-success'>Track Order</button> 
                <br></br>  <br></br>
            </form>
        </div>
    );
} 

export default TrackOrder;



