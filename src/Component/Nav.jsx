import { useState } from 'react'
import '../nav.css'


function Nav() {

    const [isToggled, setToggle] = useState('child-ball')

    function toggler() {
        isToggled === 'child-ball' ? setToggle('child-ball switch') : setToggle('child-ball')

    }

    return (
        <div className='nav-box'>
            <div className="logo-name">
                <h3>Victor Atat</h3>
            </div>
            <div onClick={toggler} className='toggle-button'>
                <div className='parent-cone'>
                    <div className={isToggled}></div>
                </div>
            </div>
        </div>
    );
}

export default Nav;