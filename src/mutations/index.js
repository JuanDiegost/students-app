import gql from 'graphql-tag';


export const AUTENTICAR_USUARIO = gql`
mutation autUser($email:String!,$password:String!){
    autUser( email:$email,password:$password){
      _id
      last_name
    }
  }
`;


export const UPTADE_STUDENT = gql`
mutation editStudent($studentInfo:studentsInput){
    editStudent( studentInfo:$studentInfo ){
      _id
      last_name
    }
  }
`;



export const ADD_STUDENTS = gql`
mutation addStudents($studentsInfo: [studentsInput] ){
    addStudents(studentsInfo:$studentsInfo)
}
`;

export const NEW_TEACHER = gql`
mutation createTeacher($teacherinfo:TeacherInput){
    createTeacher(teacherinfo:$teacherinfo){
        _id
        email
        password
        first_name
        last_name
    }
}
`;
