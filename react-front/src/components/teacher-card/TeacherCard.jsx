import React from 'react';
import './teacher-card.styles.scss';
import { connect } from 'react-redux';
import { selectCurrentTeacher } from '../../redux/teacher/teacher.selectors';
import { setCurrentTeacher } from '../../redux/teacher/teacher.actions';

const TeacherCard = ({ teacher, setCurrentTeacher , ...otherProps}) => {
    const { name } = teacher

    const handleClick = () => {
        setCurrentTeacher(teacher)
        console.log(otherProps)
    }

    return (
        <div className="card" onClick={handleClick}>
            <div className="card-image"></div>
            <h5>{name}</h5>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setCurrentTeacher: teacher => dispatch(setCurrentTeacher(teacher))
})

export default connect(null, mapDispatchToProps)(TeacherCard);
