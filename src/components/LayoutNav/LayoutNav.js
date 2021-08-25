import React, {useState} from 'react';

const LayoutNav = props =>{
    const [showUp, setShowUp] = useState(false);
    return(
        <div onClick={() => setShowUp(true)} className={`${props.className}`}>
            {props.children}
        </div>
    )
}

export default LayoutNav;