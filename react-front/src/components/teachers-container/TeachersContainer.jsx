import React, { Component } from 'react';


import './teachers-container.scss'
import TeacherCard from '../teacher-card/TeacherCard';

class TeachersContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            email: '',
            name: ''
        }

    }
    render() {
        const { teachers, ...otherProps } = this.props
        return (
            <div className="card-container">
                {
                    teachers.map((teacher, key) => (
                        <TeacherCard key={key}  teacher={teacher} {...otherProps} />
                    ), otherProps)
                }
            </div>
        );
    }
}

export default TeachersContainer;
