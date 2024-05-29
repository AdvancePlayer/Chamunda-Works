import './Login.css'
import { useNavigate } from 'react-router-dom';

const ForgetPass = ()=>{
    const navig=useNavigate();
    return(
        <div className="login-main">
            <div className="login-layout">
                <h3>Forget Password</h3>
                <span>We will send you a mail to reset your password</span>
                <form action="">
                    <input type="email" placeholder='E-mail...' required/>
                    <button>Send a Mail</button>
                </form>
                <p onClick={()=>navig('/login')} style={{cursor:"pointer"}}>Cancel</p>
            </div>
        </div>
    )
}
export default ForgetPass;