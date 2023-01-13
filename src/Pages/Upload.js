import React,{useState} from "react";
import { Link } from "react-router-dom";
const Upload=()=>{
     const [signUpform,setForms]=useState({
         email:" ",
         marks: " ",
         description:" "
     })
     const [errors,setError]=useState({
        firstName:" ",
        marks: " ",
        description:" "
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
        if (signUpform.email===" " ||signUpform.marks===""){
            setError((forms)=>({
            ...forms,
            email:"Please enter  your Account address", 
            marks:"Please enter your marks",    
            }));
       return;
         }     
          else  {
            setError((signUpform)=>({
                ...signUpform,
                email: " " ,
                marks:" ",
            }))          
     }   
 
    }
    return(
        <div className="register-outer">
        <div className="register-class">
            <div className="register-container">
                <form className="reg-form" onSubmit={onSubmit}>
                    <h1 className="title"> Upload Records</h1>
                    <div className="reg-form-in">
                    <label> Student Account Address*:
                        <div>
                      <input type="text" 
                      name="email" 
                      onChange={handlerChange} 
                      value={signUpform.email} 
                      placeholder="Enter Student Account Address"
                       />
                       </div>
                    </label>
                     {!!errors.email &&<div className="errors-msg">{errors.email}</div>}
                    </div>
                    <div  className="reg-form-in">
                    <label>
                Student  Marks*:     
                <div>  
                 <textarea name="description" id="description" 
                 onChange={handlerChange }
                 value={signUpform.description}
                  className="texa" 
                  placeholder="text something"></textarea>
                               </div>
                    </label>
                    {!!errors.marks && <div className="errors-msg">{errors.marks}</div>}
                    </div>
                    <div className="sign-submit-botton">
                    <Link to="/"><button className="submit"> Submit</button></Link>
                  <Link  to="/"> <button className="submit"> cancel</button></Link> 
                 </div>
                </form>
            </div>   
        </div>
      </div>  
    );
}
export default Upload