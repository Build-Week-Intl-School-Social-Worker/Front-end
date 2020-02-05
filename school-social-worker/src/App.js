import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import StudentList from './components/StudentList';
import CreateStudentProfile from './components/CreateStudentProfileForm';
import SingleChildView from './components/SingleChildView';
import SingleChildEditForm from './components/SingleChildEditForm';
import MyAccount from './components/MyAccount';
import Navigation from './components/Navigation';
import { connect } from 'react-redux';

import PrivateRoute from './utils/PrivateRoute';


function App(props) {



  return (
    <div className="App">
        <PrivateRoute path='/' component={Navigation}/>
      <header className="App-header">
      

        <PrivateRoute exact path='/' component={StudentList} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />

        <PrivateRoute path='/my-account' component={MyAccount} />
        <PrivateRoute path='/create-student-profile' component={CreateStudentProfile} />
        <PrivateRoute path='/single-child-view' component={SingleChildView} />
        <PrivateRoute path='/single-child-edit' component={SingleChildEditForm} />
      </header>
    </div>
  );
}



const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}
export default connect(
  mapStateToProps
)(App);