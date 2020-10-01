import React,{useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {users} from './actions/users';



function App(props) {
  
  let age = 40;
  let email = "srehanpk@gmail.com";
  
  useEffect(()=>{

    props.dispatch(users({age, email}));
    
  },[])


  console.log(props.users);


  return (
    <div className="App">
      {props.users.name}<br/>
      {props.users.age}<br/>
      {props.users.email}<br/>
      
    </div>
  );
}
function mapStateToProps({users}){

  return {users}
}


export default connect (mapStateToProps) (App);
