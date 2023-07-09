import './Success.css'
import { useNavigate } from 'react-router-dom'


const Success = () =>{

    const navigate = useNavigate();

    const handleClick = () =>{
        
        navigate('/')
    }

    return <div className="success-screen">
        <section className='message'>
            <img src='./src/assets/images/icon-success.svg'/>
            <h1>Thanks for subscribing!</h1>
            <p>
                A confirmation email has been sent to <strong>ash@loremcompany.com</strong>.
                Please open it and click the button inside to confirm your subscription.
            </p>
        </section>

        <button 
            className="dismiss-button"
            onClick={handleClick}
            >
            Dismiss message
        </button>


    </div>
}



export default Success