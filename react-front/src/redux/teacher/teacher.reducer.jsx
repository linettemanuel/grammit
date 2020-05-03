import { TeacherActionTypes } from './teacher.types';
import TEACHERS_DATA from './teacher.data'

const INITIAL_STATE = {
    currentTeacher: {
        id: '',
        name: '',
        email: ''
    },
    teachers: TEACHERS_DATA
}

const teacherReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TeacherActionTypes.SET_CURRENT_TEACHER:
            return {
                ...state,
                currentTeacher : action.payload
            }
        case TeacherActionTypes.GET_TEACHERS:
            return {
                ...state,
                teachers: action.payload
            }
        default:
            return state;
    }
}

export default teacherReducer;