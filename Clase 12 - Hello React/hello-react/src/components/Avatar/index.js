import React from 'react';
import '../Avatar/index.css';

const Avatar = ({avatar}) => {

    return (
        <img className="is-rounded" src={avatar}></img>
    )
}

export default Avatar;