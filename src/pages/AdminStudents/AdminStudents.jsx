import React, { Component } from 'react'
import { Query } from 'react-apollo';
import ListStudents from '../../components/ListStudents';
import { STUDENTS_LIST } from '../../queries';
import HeaderAdmin from '../../components/HeaderAdmin';

export default class AdminStudents extends Component {
    render() {
        return (
            <div>
            <HeaderAdmin />
            <Query query={STUDENTS_LIST} 
            fetchPolicy='network-only' >
        {({ loading, error, data }) => {
            if (loading) return "Cargando...";
            if (error) return `Error: ${error}`;
            return (
                <div className="container-fluid mb-5">
                    <h3 >Lista de Estudiantes</h3>
                    <button type="button" 
                    className="btn btn-primary" onClick={()=>{
                            this.dowloadCSV(data.getStudents);
                    }}>Descargar excel</button>
                    <div className="row">
                        <ListStudents listStudent={data.getStudents} />
                    </div>
                </div>
            )
        }}
    </Query>
            </div>
        )
    }


    dowloadCSV(data){

        data.forEach(element => {
            delete element.email;
        });

    const headers = {
        _id:'ID',
        firts_name: 'Nombres',
        last_name:'Apellidos',
        code: 'Codido',
        notesCall:'Notas llamada',
        school: 'Escuela',
        ti:'',
        program: 'Programa',
        zone: 'Zona',
        center: 'Centro',
        phone: 'Telefono',
        personal_mail:'Email Personal',
        intitud_mail:'Email Institucional',
        gener:'Genero',
        type:'Tipo',        
        stratum:'Estrato',
        etnia:'Etnia',
        disability:'Discapacidad',        
        period:'Periodo',
        dropoutReason:'Razon deserción',
        comment:'Comentario'    
        };

        this.exportCSVFile(headers, data, 'nombres');

    }

    convertToCSV(objArray) {
        const array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
        let str = "";

        for (let i = 0; i < array.length; i++) {
        let line = "";
        for (let index in array[i]) {
        if (line !== "") line += ",";

        line += array[i][index];
        }

        str += line + "\r\n";
        }

        return str;
    }

    exportCSVFile(headers, items, fileName) {
        if (headers) {
        items.unshift(headers);
        }

        const jsonObject = JSON.stringify(items);

        const csv = this.convertToCSV(jsonObject);

        const exportName = fileName + ".csv" || "export.csv";

        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, exportName);
        } else {
            const link = document.createElement("a");
            if (link.download !== undefined) {
                const url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", exportName);
                link.style.visibility = "hidden";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
        }
}
