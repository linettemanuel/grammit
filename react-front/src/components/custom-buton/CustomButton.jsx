import React from 'react';
import './custom-button.styles.scss';
import { withRouter } from 'react-router-dom';
import { solveEventByType } from './custom-button.utils'

const CustomButton = ({ children, customClassName, eventType, redirectTo, ...otherProps }) => {
    
    const handleClickEvent = (eventType, redirectTo) => event => {
        event.preventDefault();
        if(!event.target.disabled) {
            solveEventByType(eventType, redirectTo, otherProps)
        }
    }

    return(
        <div className="btn-area">
            <button className={`btn ${customClassName}`}
                onClick={handleClickEvent(eventType, redirectTo)}
            >{children}</button>
        </div>
    ) 
}

export default withRouter(CustomButton);
