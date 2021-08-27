import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hamburger from '../hamburger/Hamburger';
const LayoutNav = props =>{
    const [showUp, setShowUp] = useState(false);
    return(
        <div className={`${props.className}`}>
            {props.children}
        </div>
    )
}

export default LayoutNav;