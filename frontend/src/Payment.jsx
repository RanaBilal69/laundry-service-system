import { useState } from "react";   
import axios from 'axios';  
import { useNavigate } from "react-router-dom"; 

function Payment() {
    const [id, setId] = useState();  
    const [amount, setAmount] = useState();  
    const [method, setMethod] = useState();  
    
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();  

        axios.post('http://localhost:5000/payment', { id, amount, method })
            .then(result => {
    
                navigate("/feedback");
                console.log(result);  
            })
            .catch(err => {
                console.log(err);
            });
    };

     return (
        <div className = "body"> 
            <form onSubmit={handleSubmit} className = "a">  
                <h2 className = 'text-success'>Proceed To Payment</h2> <br></br> 
               <b> Enter Order ID </b> 
                <input 
                    type="number"  
                    name="id" 
                    onChange={(e) => setId(e.target.value)}  
                />
                <br></br>  <br></br>
                
                <b> Enter Amount </b>
                <input 
                    type="number"  
                    name="amount" 
                    onChange={(e) => setAmount(e.target.value)} 
                />
                <br></br>  <br></br>
                
                <b> Enter Payment Method </b>
                <input 
                    type="text"  
                    name="method" 
                    onChange={(e) => setMethod(e.target.value)} 
                />
                <br></br>  <br></br>
                
                <button className = 'btn btn-success'>Pay</button> 
                <br></br>  <br></br>
            </form>
        </div>
    );
} 

export default Payment;
