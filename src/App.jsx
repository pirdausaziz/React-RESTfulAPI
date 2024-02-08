import './App.css';
import Home from './pages/Home';
import NavbarApp from './pages/Navbar';

import Student from './pages/Student/Student';
import CreateStudent from './pages/Student/CreateStudent';
import EditStudent from './pages/Student/EditStudent';

import Teacher from './pages/Teacher/Teacher';
import CreateTeacher from './pages/Teacher/CreateTeacher';
import EditTeacher from './pages/Teacher/EditTeacher';

import Subject from './pages/Subject/Subject';
import CreateSubject from './pages/Subject/CreateSubject';
import EditSubject from './pages/Subject/EditSubject';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='responsive-font'>
    {
      <BrowserRouter>
        <NavbarApp />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/subject" Component={Subject }/>
          <Route path="/subject/create" Component={CreateSubject}/>
          <Route path="/subject/edit/:id" Component={EditSubject}/>

          <Route path="/teacher" Component={Teacher}/>
          <Route path="/teacher/create" Component={CreateTeacher}/>
          <Route path="/teacher/edit/:id" Component={EditTeacher}/>
          
          <Route path="/student" Component={Student}/>
          <Route path="/student/create" Component={CreateStudent}/>
          <Route path="/student/edit/:id" Component={EditStudent}/>
        </Routes>
      </BrowserRouter>
    }
    </div>
  );
}

export default App;