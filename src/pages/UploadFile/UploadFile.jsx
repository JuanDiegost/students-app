import React, { Component } from 'react'
import XLSX from 'xlsx';

import './UploadFile.css';

import { withRouter } from 'react-router-dom';
import { ADD_STUDENTS } from '../../mutations';
import { Mutation } from 'react-apollo';
import HeaderAdmin from '../../components/HeaderAdmin';

class UploadFile extends Component {
    
    render() {
        return (
            <div >
            <HeaderAdmin />
            <Mutation mutation={ADD_STUDENTS} onCompleted={()=>
                this.props.history.push(`/admin`)
            }>
            {addStudents=>(

                <form className="home" onSubmit={(e)=>{
                    e.preventDefault();
                }}>
                <div>

                <input type="file" name="fileUploader" accept=".xls, .xlsx" 
                    onChange={(evt)=>{
                    const selectedFile = evt.target.files[0];
                    const reader = new FileReader();
                    reader.onload = function(event) {
                      const data = event.target.result;
                      const workbook = XLSX.read(data, {
                          type: 'binary'
                      });
                        
                        const XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames.pop()]);
                        const students=XL_row_object.map(student=>({
                            firts_name: student['Nombres'],
                            last_name: student['Apellidos'],
                            code: student['Código'].toString(),
                            school: student['Escuela'],
                            program:student['Programa'],
                            zone: student['Zona'],
                            center: student['Centro'],
                            phone: student['Telefono'].toString(),
                            personal_mail: student['Email Personal'],
                            intitud_mail: student['Email Institucional'],
                            gener: student['Genero'],
                            type: student['Tipo'],
                            stratum: student['Estrato'],
                            etnia: student['Etnia'],
                            disability: student['Discapacidad'],
                            period: student['PERIODO'],
                            notesCall: student['DATOS LLAMADA'],
                            dropoutReason: student['MOTIVO DE LA DESERCIÓN'],
                            comment: student['COMENTARIOS']
                        }))
                        console.log(students)
                        students.forEach(obj=>{
                            Object.keys(obj).forEach(key => obj[key] === undefined ? delete obj[key] : '');
                        })
                        const studentsInfo=students
                        addStudents({ variables: { studentsInfo } });
                    };
                    reader.onerror = function(event) {
                      console.error("File could not be read! Code " + event.target.error.code);
                    };     
                    reader.readAsBinaryString(selectedFile);                                                    
                }               
             }/>
            </div>
            <button type="submit" className="btn btn-primary" >Agregar</button>
            </form>
            )}
            </Mutation>
            </div>
        )
    }


}

export default withRouter(UploadFile);
