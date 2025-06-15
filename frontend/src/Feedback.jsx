import { useState } from "react";   
import axios from 'axios';  

function Feedback() {
    const [name, setName] = useState(); 
    const [feedback, setFeedback] = useState();     
    
    const handleSubmit = (e) => {
        e.preventDefault();  

        axios.post('http://localhost:5000/feedback', { name, feedback })
    };

     return (
        <div> 
            <form onSubmit={handleSubmit}>  
                <h2 className = 'text-success'>Please Give Feedback </h2> <br></br> 
               <b> Enter Name </b> 
                <input 
                    type="text"  
                    name="name" 
                    onChange={(e) => setName(e.target.value)}  
                />
                <br></br>  <br></br>
                
                <b> Your Feedback </b>
                <input 
                    type="text"  
                    name="feedback" 
                    onChange={(e) => setFeedback(e.target.value)} 
                />
                <br></br>  <br></br>

                <button className = 'btn btn-success'>Submit</button> 
                <br></br>  <br></br>
            </form>
        </div>
    );
} 

export default Feedback;

