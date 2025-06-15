import { useState } from "react";   
import axios from 'axios';  

function Signup() {
    const [name, setName] = useState();  
    const [email, setEmail] = useState();  
    const [password, setPassword] = useState();  
    
    const handleSubmit = (e) => {
        e.preventDefault();  

        axios.post('http://localhost:5000/signup', { name, email, password })
    };

     return (
        <div className = "body"> 
            <form onSubmit={handleSubmit} className = "a">  
                <h2 className = 'text-success'>Register Yourself </h2> <br></br> 
               <b> Enter Name </b> 
                <input 
                    type="text"  
                    name="name" 
                    onChange={(e) => setName(e.target.value)}  
                />
                <br></br>  <br></br>
                
                <b> Enter Email </b>
                <input 
                    type="email"  
                    name="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br></br>  <br></br>
                
                <b> Enter Password </b>
                <input 
                    type="password"  
                    name="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <br></br>  <br></br>
                
                <button className = 'btn btn-success'>Register</button> 
                <br></br>  <br></br>
            </form>
        </div>
    );
} 

export default Signup;

