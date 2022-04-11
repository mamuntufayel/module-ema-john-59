import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [
        signInWithEmailAndPassword,
        user,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      
      const navigate = useNavigate();
      const location= useLocation();
      const from = location.state?.from?.pathname || "/";

    const handleEmailBlur = (event)=>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event)=>{
        setPassword(event.target.value);
    }
    const handleUserSignIn = (event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigate(from, { replace: true })
    }
    return (
        <div className="form-container">
            <div>
                
         <form onSubmit={handleUserSignIn} className="form-part">
           <h2 className="form-title">Login</h2>
          <div className="input-group">
           <label htmlFor="email">Email</label>
           <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
           </div>
           <div className="input-group">
               <label htmlFor="password">Password</label>
               <input onBlur={handlePasswordBlur} type="password" name="password" id="" required  />
           </div>
           <h5 style={{color: 'red'}}>{error?.message}</h5>
           <button className='button' type="submit">Login</button>
         </form>
         <p>New to Ema-jhon? <Link className="form-link" to="/signup">Create An Account</Link></p>

         <div className='horigental'>
                <div>
                    .........................
                </div>
                <div>
                    <h6>or</h6>
                </div>
                <div>
                    .........................
                </div>
            </div>
     
         <div>
         <button>Continue With Google</button>
         </div>
            </div>
           
        </div>
    );
};

export default Login;