import React,{useState} from "react";
import { Link } from "react-router-dom";
const Student=()=>{
     const [signUpform,setForms]=useState({
         name:" ",
         email:" ",
     })
     const [errors,setError]=useState({
        firstName:" ",
         email:" ", 
     }) 
     const handlerChange=(e)=>
     {
             const{name,value,type,checked}=e.target
             setForms((signUpform)=>({
                     ...signUpform,
                     [name]:value
             }))
     }
     const ShowOutcome=()=>{
         console.log("signUpform",signUpform)  
     }
     const onSubmit=(e)=>{
         e.preventDefault();
        if (signUpform.name===" " ||signUpform. email===""){
            setError((forms)=>({
            ...forms,
            name:"Please enter your Student Name",
            email:"Please enter  Student address",     
            }));
       return;
         }     
          else  {
            setError((signUpform)=>({
                ...signUpform,
                 name:" ",
                email: " " ,
                  
            }))          
     }  
    }
    return(
        <div className="register-outer">
        <div className="register-class">
            <div className="register-container">
                <form className="reg-form" onSubmit={onSubmit}>
                    <h1 className="title"> Student Register</h1>
                    <div className="reg-form-in">
                    <label> Name*:
                      <input type="text" 
                      name="name" 
                      onChange={handlerChange} 
                      value={signUpform.name} 
                      placeholder="Enter name"
                       />
                    </label>
                     {!!errors.name &&<div className="errors-msg">{errors.name}</div>}
                    </div>
                    <div  className="reg-form-in">
                    <label>
                 Student Address*:     
                 <input type="text" 
                 name=" email" 
                 onChange={handlerChange} 
                 placeholder="Enter Account address"
                 />
                    </label>
                    {!!errors.email && <div className="errors-msg">{errors.email}</div>}
                    </div>
                    <div className="sign-submit-botton">
                    <button className="submit" > Submit</button>
                  <Link  to="/"> <button className="submit"> Cancel</button></Link> 
                 </div>
                </form>
            </div>   
        </div>
      </div>  
    );
}
export default Student