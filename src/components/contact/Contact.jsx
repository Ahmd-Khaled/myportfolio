import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';
import './contact.css';

const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // service_zk03i3l
        
        emailjs.sendForm('service_zk03i3l', 'template_0bpquug', formRef.current, 'pprSWKWONynmXz8Je')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });

    }

    return (
        <div className='c'>
            <div className='c-bg'></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={process.env.PUBLIC_URL +'/img/phone.png'} alt="phone" className="c-icon" />
                            <span>+2 01018674965</span>
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={process.env.PUBLIC_URL +'/img/email.png'} alt="email" />
                            <span>ahmd.khaldd@gmail.com</span>
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={process.env.PUBLIC_URL +'/img/address.png'} alt="address" />
                            <span>Bani-suef, Egypt</span>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                        <button type='submit'>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;