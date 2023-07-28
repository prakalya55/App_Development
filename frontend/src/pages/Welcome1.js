import React, { Component } from 'react'
import './welcome1.css'
import { logout, selectUser } from '../userSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function Welcome() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
    return (
      <>
      <div className='wel1'>
      
   
      <div className='hi1'>
      <center>
      Welcome {user.name}
<br/> 
<br/>
<br/>
      Workflow management refers to the identification, organization, 
      <br/>
      and coordination of a particular set of tasks that produce
      <br/> a specific outcome  Workflow management is all about optimizing,
      <br/> improving, and automating workflows wherever possible to increase 
      <br/>output, eliminate repetition, and reduce
      <br/> 
      </center>
      </div>
      </div>
     </>
    )
  }
      