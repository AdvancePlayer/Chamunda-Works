import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = ()=>{
    const [signup,setSignup]=useState({
        email:"",
        password:"",
        re_password:""
    });
    const signup_input = (inp) =>{
        setSignup((prev)=>({...prev,[inp.target.name]:[inp.target.value]}))
    }
    const signup_submit = (e)=>{
        e.preventDefault();
    }
    console.log(signup)
    const navig=useNavigate();
    return(
        <div className="signup-main">
        <div className="signup-layout">
            <h3>Sign Up</h3>
            <form action="" onSubmit={signup_submit}>
                <input type="email" placeholder='E-mail...' name="email" required/>
                <input type="password" placeholder='Password...'  onChange={signup_input} name="password" required/>
                <input type="password" placeholder='Re type Password...' onChange={signup_input} name = "re_password" required/>
                {/* {error.password && <span style={{color:"red"}}>{error.password}</span>} */}
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    </div>
    )
}
export default SignUp;