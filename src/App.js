import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home/Home';
import NewTeacher from './pages/NewTeacher/NewTeacher';
import UploadFile from './pages/UploadFile/UploadFile';
import Login from './pages/Login/Login';
import Teacher from './pages/Teacher/Teacher';
import EditStudent from './pages/EditStudent/EditStudent';
import AdminStudents from "./pages/AdminStudents/AdminStudents";

export default function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>
        <Route exact path="/">
          <Login />
        </Route>
          <Route exact path="/admin">
            <Home />
          </Route>
          <Route exact path="/agregar-docente">
            <NewTeacher />
          </Route>
          <Route exact path="/subir-archivo">
            <UploadFile />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
           <Route exact path="/teacher">
            <Teacher />
          </Route>
          <Route exact path="/editar-student/:id" component={EditStudent}>
          </Route>
           <Route exact path="/admin/estudiantes">
            <AdminStudents />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}