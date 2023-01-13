import React, { useState } from "react";
import { Link } from "react-router-dom"

function Login() {
    const [signform, setForm] = useState({
        userId: " ",
        password: " "
     })
     const Changer = (e) => {
        const newData = { ...signform }
        newData[e.target.name] = e.target.value
        setForm(newData)
     }
     const[successMsg,setMsg]=useState("");
     const Submit = (e) => {
        e.preventDefault();
     }
     const ShowOutcome = () => {
        console.log("signform",signform)
       
     }
     return (
        <>
         {successMsg ?(
        <div className='logged-in'>
         <h1>You have successfully Logged In</h1>
         <br/>
         <div className="logn">
           <div className="logn-wrap">
            <h5>Welcome to Mmabatho</h5>
           </div>
         </div>
           <p>
           <Link to="/">Logout</Link>
         </p>
        </div>
       ):(
        <div className="outer">
        <div className="login-class">
           <div className="login-container">
              <form className="login-form" onSubmit={Submit}>
                 <h1 className="titles"> &nbsp;&nbsp;&nbsp;&nbsp; Welcome to Phaswana <br/>&nbsp; University of Technology</h1>
                 <br/>
                 <label>UserId: </label>
                    <div>
                       <input type="text" 
                       name="userId" 
                       onChange={Changer} 
                       value={signform.username} 
                       className="ad"
                       placeholder="Enter UseId" />
                       
                    </div> 
                 <label> Password: </label>
               <a href="/forgotPass" className="fogot">Forgot password?</a>
                <div >  
                    <input type="text" 
                    name="password" 
                    onChange={Changer} 
                    value={signform.password}
                     className="ad"
                     placeholder="Enter Password"
                      />
                 </div>
                    <div className="sign-submit-botton">
                    <Link to="/"><button className="submit" onClick={ ShowOutcome}> Login</button></Link>
                  <Link to="/sign-up"> <button className="submit"> Create account</button></Link> 
                 </div>
              </form>
           </div>
           </div>
           </div>
       )
  }
        </>
     )
}
export default Login
