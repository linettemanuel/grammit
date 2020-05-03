import { createSelector } from 'reselect';

const selectTeachers = state => state.teachers;

export const selectAllTeachers = createSelector(
    [selectTeachers],
    teachers => teachers.teachers
)


export const selectCurrentTeacher = createSelector(
    [selectTeachers],
    (teachers, key ) => teachers.find((teacher) =>(
        teacher.id === key
    ))
)

