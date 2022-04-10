import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    const [error, setError]= useState('');

    const handleEmailBlur = (event)=>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event)=>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event)=>{
        setConfirmPassword(event.target.value);
    }
   const handleCreateUser = (event)=>{
       event.preventDefault();
       if(password !== confirmPassword){
           setError('Password did not match');
           return;
       }
   }
    return (
        <div className="form-container">
            <div>
                
         <form onSubmit={handleCreateUser} className="form-part">
           <h2 className="form-title">Sign Up</h2>
          <div className="input-group">
           <label htmlFor="email">Email</label>
           <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
           </div>
           <div className="input-group">
               <label htmlFor="password">Password</label>
               <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
           </div>
           <div className="input-group">
               <label htmlFor="confirm-password">Confirm-Password</label>
               <input  onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id=""  required/>
           </div>
           <h5 style={{color: 'red'}}>{error}</h5>
           <button className='button' type="submit">Sign Up</button>
         </form>
         <p>Already have a account? <Link className="form-link" to="/login">Login in</Link></p>

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

export default SignUp;