import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import StudentList from './components/StudentList';
import CreateStudentProfile from './components/CreateStudentProfileForm';
import SingleChildView from './components/SingleChildView';
import SingleChildEditForm from './components/SingleChildEditForm';
import Navigation from './components/Navigation';

import PrivateRoute from './utils/PrivateRoute';


function App() {
  return (
    <div className="App">
        <Route path='/' component={Navigation}/>
      <header className="App-header">
      {localStorage.getItem('token') ? <div>
        <ul>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/'>Student List</Link></li>
          <li><Link to='/create-student-profile'>Create Student Profile</Link></li>
          <li><Link to='/single-child-view'>Single Child View</Link></li>
          <li><Link to='/single-child-edit'>Single Child Edit</Link></li>
        </ul>
      </div> : <p>not there</p>}
      

        <PrivateRoute exact path='/' component={StudentList} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
        <PrivateRoute path='/create-student-profile' component={CreateStudentProfile} />
        <PrivateRoute path='/single-child-view' component={SingleChildView} />
        <PrivateRoute path='/single-child-edit' component={SingleChildEditForm} />
      </header>
    </div>
  );
}

export default App;
