import { useState } from 'react'
import '../nav.css'


function Nav({ changetheme }) {
    console.log(changetheme);
    const [isToggled, setToggle] = useState('child-ball')

    function toggler() {
        isToggled === 'child-ball' ? setToggle('child-ball switch') : setToggle('child-ball')
        changetheme()
    }

    const parentconeStyles = {
        width: '50px',
        height: '21px',
        border: 'solid 1px',
        borderRadius: '20px',
        position: 'relative',
        padding: '1px',
        transition: '3000s ease-in',
        cursor: 'pointer',
        backgroundColor: '#fff'
    }

    return (
        <div className='nav-box'>
            <div className="logo-name">
                <h3>Victor Atat</h3>
            </div>
            <div onClick={toggler} className='toggle-button'>
                <div style={parentconeStyles}>
                    <div className={isToggled}></div>
                </div>
            </div>
        </div>
    );
}

export default Nav;