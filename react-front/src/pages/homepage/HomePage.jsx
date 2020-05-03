import React from 'react';
import CustomButton from '../../components/custom-buton/CustomButton';
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="container-background">
        </div>
        <div className="content-wrapper">
            <div className="animals-area">
            </div>
            <h1 className="title">Grammit
                <span className="subtitle h5">Junior</span>
            </h1>
            <CustomButton 
            customClassName='enter' 
            eventType='enter' 
            redirectTo='/login' >v</CustomButton>
        </div>
        
    </div>
)


export default HomePage;
