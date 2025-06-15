import { useState } from "react";  
import axios from 'axios';  

function Info() {
    const [name, setName] = useState();  
    const [accnum, setAccnum] = useState();  
    const [amount, setAmount] = useState();  
    
    const handleSubmit = (e) => {
        e.preventDefault();  

        axios.post('http://localhost:5000/info', { name, accnum, amount })
    };

     return (
        <div> 
            <form onSubmit={handleSubmit}>  
                Enter Name 
                <input 
                    type="text"  
                    name="name" 
                    onChange={(e) => setName(e.target.value)}  
                />
                <br></br>  <br></br>
                
                Enter Account Number 
                <input 
                    type="text"  
                    name="accnum" 
                    onChange={(e) => setAccnum(e.target.value)} 
                />
                <br></br>  <br></br>
                
                Enter Amount
                <input 
                    type="text"  
                    name="amount" 
                    onChange={(e) => setAmount(e.target.value)} 
                />
                <br></br>  <br></br>
                
                <button>Enter</button> 
            </form>
        </div>
    );
} 

export default Info;

