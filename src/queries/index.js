import gql from 'graphql-tag';

export const STUDENT_BY_ID = gql`
query getStudent($id:ID!){
getStudent(id:$id){
    _id
    email
    firts_name
    last_name
    code
    comment
    school
    program
    zone
    center
    phone
    personal_mail
    intitud_mail
    gener
    type
    stratum
    etnia
    disability
    period
    notesCall
    dropoutReason
    teacher
  }
}`;

export const STUDENTS_LIST = gql`{
getStudents{
    _id
    email
    firts_name
    last_name
    code
    comment
    school
    program
    zone
    center
    phone
    personal_mail
    intitud_mail
    gener
    phone
    type
    stratum
    etnia
    disability
    period
    notesCall
    dropoutReason
    teacher
}
}`;

export const STUDENTS_LIST_BY_TEACHER = gql`
query getStudentsByTeacher($idTeacher:ID){
getStudentsByTeacher(idTeacher:$idTeacher){
    _id
    email
    firts_name
    last_name
    code
    comment
    school
    program
    zone
    center
    phone
    personal_mail
    intitud_mail
    gener
    phone
    type
    stratum
    etnia
    disability
    period
    notesCall
    dropoutReason
    teacher
  }
}`;