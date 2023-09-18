import { useRef, useContext } from "react";
import '../../stylesheets/loginStyle.css'
import {Link} from 'react-router-dom'
import {Context} from '../../context/Context.js'
import axios from 'axios'

export default function Login() {

   const userRef = useRef()
   const passwordRef = useRef()
   const {dispatch, isFetching} = useContext(Context)

   const handleSubmit = async (e) =>{
      e.preventDefault()
      dispatch({type: "LOGIN_START"})
      try{
         const res = await axios.post("/auth/login",{
            username: userRef.current.value,
            password: passwordRef.current.value,
         })
         dispatch({type: "LOGIN_SUCCESS", payload: res.data});
         
      }catch(err){
         dispatch({type: "LOGIN_FAILURE"})
      }
   };


return (
<div className="login">
   <center>
      <div style={{margin: '20px'}} className="outer-form ">
         <div className="main">
            <div className="loginDiv">
               <form onSubmit={handleSubmit}>
                  <label className="lab">Login</label>
                  <div className="col-12">
                     <input  
                     type="text" 
                     placeholder="Username" 
                     ref={userRef}
                     />
                  </div>
                  <div className="col-12">
                     <input 
                     type="password" 
                     placeholder="Password" 
                     ref={passwordRef}
                     />
                  </div>
                  <div>
                     <button style={{padding: '2px'}}  className="login-btn" type="submit" disabled={isFetching}>
                        Login 
                     </button>
                     <button style={{padding: '2px'}}  className="Signup-btn">
                     <Link to="/register" style={{textDecoration: 'none', color: 'white'}} > Sign Up </Link>
                     </button>
                  </div>
                  
               </form>
            </div>
         </div>
      </div>
     
      
   </center>
</div>
)
}

//  <div style={{margin: '20px'}} className="outer-form ">
//          <div className="main">
//             <div className="login">
//                <form >
//                   <label className="lab">Admin Login</label>
//                   <div className="col-12">
//                      <input  type="email" placeholder="Email" />
//                   </div>
//                   <div className="col-12">
//                      <input type="password" placeholder="Password" />
//                   </div>
//                   <div>
//                      <button style={{padding: '2px'}}  className="login-btn">Login </button>

//                      <button style={{padding: '2px'}}  className="Signup-btn">Sign Up </button>

//                   </div>
//                </form>
//             </div>
//          </div>
//       </div>
