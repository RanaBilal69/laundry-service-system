import { useState } from "react";   
import axios from 'axios';  
import { useNavigate } from "react-router-dom"; 

function Login() {  
    const [email, setEmail] = useState();  
    const [password, setPassword] = useState();  
    
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();  

        axios.post('http://localhost:5000/login', { email, password })
            .then(result => {
                navigate("/servicereq");
                console.log(result);  
            })
            .catch(err => {
                console.log(err);
            });
    };

     return (
        <div> 
            <form onSubmit={handleSubmit}>  
                <h2 className = 'text-success'>Please Login</h2> <br></br> 
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
                
                <button className = 'btn btn-success'>Login</button> 
                <br></br>  <br></br>
            </form>
        </div>
    );
} 

export default Login;