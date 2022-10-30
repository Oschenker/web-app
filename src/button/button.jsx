import React from 'react';
import './Button/button.css';


const Button = (props) => {
    return(
        <button {...props} className = {'button ' + props.className}/>
    );
};


export default Button;