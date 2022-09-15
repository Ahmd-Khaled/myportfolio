import { useContext } from 'react';
import { ThemeContext } from '../../context';
import './toggle.css';

const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    };

    return (
        <div className='t' onClick={handleClick}>
            <img src={process.env.PUBLIC_URL +"/img/sun.png"} alt="L" className='t-icon' />
            <img src={process.env.PUBLIC_URL +"/img/moon.png"} alt="D" className='t-icon' />
            <div
                className='t-button'
                
                style={{ left: theme.state.darkMode ? 0 : '25px'}}
            ></div>
        </div>
    )
}

export default Toggle;