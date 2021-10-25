import React from 'react';
import p1 from '../../../../../image/default-user.jpg';
const ImageUser = ({src}) => {
    return(
        <img draggable={true} src={src || p1} alt="user"/>
    )
}

export default ImageUser;