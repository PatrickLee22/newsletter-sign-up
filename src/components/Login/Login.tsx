import './Login.css'
import checkmark from '../../assets/images/icon-success.svg'
import loginImageDesktop from '../../assets/images/illustration-sign-up-desktop.svg'
import loginImageMobile from '../../assets/images/illustration-sign-up-mobile.svg'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface Props{
    isDesktop: boolean
}


const Login = ({isDesktop}: Props) =>{

    const [email, setEmail] = useState('')
    const [isFailedAttempt, setFailedAttempt] = useState(false)


    const navigate = useNavigate();

    const handleChange = (inputEmail: string) =>{
        setEmail(inputEmail)
    }

    const checkLogin = () => {
        console.log("Clicked Login Button")
        if(email == "ash@loremcompany.com"){
            console.log("True")
            setFailedAttempt(false);
            navigate("/success")
        }
        else{
            console.log("False")
            setFailedAttempt(true);
        }
    }
    return <div className='login'>
        {!isDesktop && <img className="login-illustration" src={loginImageMobile} alt="login-image"/>}
        <section className='login-info'>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className='checkpoints'>
                <div className='checkpoint-1'>
                    <img src={checkmark} alt='checkmark'/>
                    <span>Product discovery and building what matters</span>
                </div>
                <div className='checkpoint-2'>
                    <img src={checkmark} alt='checkmark'/>
                    <span>Measuring to ensure updates are a success</span>
                </div>
                <div className='checkpoint-3'>
                    <img src={checkmark} alt='checkmark'/>
                    <span>And much more!</span>
                </div>
            </div>
            <div className='email-titles'>
                <h4 id='email-address'>Email address</h4>
                {isFailedAttempt && <h4 id='email-error'>Valid Email Required</h4>}
            </div>
            <input
                className={isFailedAttempt ? 'email-input email-input-error' : 'email-input'}
                id="email"
                type='text'
                value = {email}
                onChange = {(e) => handleChange(e.target.value)}
                placeholder='email@company.com'
            ></input>
            <button className='subscribe-button' onClick={
                checkLogin
            }>
                Subscribe to monthly newsletter
            </button>
        </section>
        {isDesktop && <img className="login-illustration" src={loginImageDesktop} alt="login-image"/>}


    </div>
}

export default Login