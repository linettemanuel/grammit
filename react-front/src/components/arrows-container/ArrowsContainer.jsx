import React from 'react';
import CustomButton from '../../components/custom-buton/CustomButton';

import './arrows-container.styles.scss'

const ArrowsContainer = ({rightButton, leftButton}) => {
    return (
        <div className="arrow-container">
            <div className="arrow-area">
                <div className="arrow left-area">
                    <CustomButton
                    customClassName={rightButton.name}
                    eventType={rightButton.event}>{rightButton.symbol}</CustomButton>
                </div>
                <div className="arrow right-area">
                    <CustomButton 
                    customClassName={leftButton.name}
                    eventType={leftButton.event}>{leftButton.symbol}</CustomButton>
                </div>
            </div>
        </div>  
        );
}

export default ArrowsContainer;
