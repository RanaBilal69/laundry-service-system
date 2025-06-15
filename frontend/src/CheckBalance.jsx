import { useState } from "react";   
import axios from 'axios';  

function CheckBalance() {
    const [accnum, setAccnum] = useState();    
    
    const handleSubmit = (e) => {
        e.preventDefault();  

        axios.post('http://localhost:5000/checkbalance', { accnum })
            
    };

     return (
        <div> 
            <form onSubmit={handleSubmit}>  
                Enter Account Number 
                <input 
                    type="text"  
                    name="accnum" 
                    onChange={(e) => setAccnum(e.target.value)} 
                />
                <br></br>  <br></br>

                <button>Check Balance</button> 
                
            </form>
        </div>
    );
} 

export default CheckBalance;

