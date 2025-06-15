import { useState } from "react";   
import axios from 'axios';  

function ServiceReq() {
    const [name, setName] = useState();  
    const [address, setAddress] = useState();  
    const [type, setType] = useState();  
    const [weight, setWeight] = useState();  
    const [date, setDate] = useState();  
    const [num, setNum] = useState();   
    
    const handleSubmit = (e) => {
        e.preventDefault();  

        axios.post('http://localhost:5000/servicereq', { name, address, type, weight, date, num })
    };

     return (
        <div> 
            <form onSubmit={handleSubmit}>  
                <h2 className = 'text-success'>Please Place Your Order </h2> <br></br> 
               <b> Enter Name </b> 
                <input 
                    type="text"  
                    name="name" 
                    onChange={(e) => setName(e.target.value)}  
                />
                <br></br>  <br></br>
                
                <b> Enter Address </b>
                <input 
                    type="text"  
                    name="address" 
                    onChange={(e) => setAddress(e.target.value)} 
                />
                <br></br>  <br></br>
                
                <b> Enter Laundry Type </b>
                <input 
                    type="text"  
                    name="type" 
                    onChange={(e) => setType(e.target.value)} 
                />
                <br></br>  <br></br>

                <b> Enter Weight </b>
                <input 
                    type="text"  
                    name="weight" 
                    onChange={(e) => setWeight(e.target.value)} 
                />
                <br></br>  <br></br>

                <b> Enter Pickup Date </b>
                <input 
                    type="date"  
                    name="date" 
                    onChange={(e) => setDate(e.target.value)} 
                />
                <br></br>  <br></br>
                
                <b> Enter Your Phone No. </b>
                <input 
                    type="number"  
                    name="num" 
                    onChange={(e) => setNum(e.target.value)} 
                />
                <br></br>  <br></br>

                <button className = 'btn btn-success'>Place Order</button> 
                <br></br>  <br></br>
            </form>
        </div>
    );
} 

export default ServiceReq;


