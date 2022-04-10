import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className="form-container">
            <div>
                
         <form className="form-part">
           <h2 className="form-title">Login</h2>
          <div className="input-group">
           <label htmlFor="email">Email</label>
           <input type="email" name="email" id="" required />
           </div>
           <div className="input-group">
               <label htmlFor="password">Password</label>
               <input type="password" name="password" id="" required  />
           </div>
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