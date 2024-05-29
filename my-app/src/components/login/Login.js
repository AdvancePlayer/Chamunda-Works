import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Login = ()=>{
    const navig=useNavigate();
    const [login,setlogin]=useState({
        email:"",
        password:""
    });
    const login_input = (inp) =>{
        setlogin((prev)=>({...prev,[inp.target.name]:[inp.target.value]}))
    }
    const login_submit = (e)=>{
        e.preventDefault();
    }
    return(
        <div className="login-main">
            <div className="login-layout">
                <h3>Login</h3>
                <form action="" onSubmit={login_submit}>
                    <input type="email" placeholder='E-mail...' onChange={login_input} name="login_email" required/>
                    <input type="password" placeholder='Password...' onChange={login_input} name="login_password" required/>
                    <button type='submit'>Login</button>
                </form>
                <div className="r-pass-signup">
                    <p onClick={()=>navig('/reset password')}>Reset password</p>
                    <p onClick={()=>navig('/signup')}>Sign Up</p>
                </div>
            </div>
        </div>
    )
}
export default Login;