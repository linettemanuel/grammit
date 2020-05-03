import { TeacherActionTypes } from './teacher.types';

export const getTeachers = teachers => ({
    type: TeacherActionTypes.GET_TEACHERS,
    payload: teachers
})

export const setCurrentTeacher = teacher => ({
    type: TeacherActionTypes.SET_CURRENT_TEACHER,
    payload: teacher
})