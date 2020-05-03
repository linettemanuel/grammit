import React, { Component } from 'react';
import Header from '../../components/header/Header';
import ArrowsContainer from '../../components/arrows-container/ArrowsContainer';
import TeachersContainer from '../../components/teachers-container/TeachersContainer';

import { connect } from 'react-redux';

import { selectAllTeachers } from '../../redux/teacher/teacher.selectors';

import './login.styles.scss'


class Login extends Component {
    constructor(props) {
        super(props)
    
    }

    render() {
        const { teachers, ...otherProps } = this.props;
        return (
            <div className="login">
                <Header />
                <div className="container">
                    <h4 className="title">Tvůj lektor</h4>
                    <TeachersContainer  teachers={teachers.teachers} {...otherProps}/>
                    <ArrowsContainer 
                    rightButton={{name: 'back', event:'back', symbol: '<'}}
                    leftButton={{name: 'front', event:'front', symbol: '>'}}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    teachers: selectAllTeachers(state)
})


export default connect(mapStateToProps)(Login);
