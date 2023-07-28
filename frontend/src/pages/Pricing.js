import React, { Component } from 'react'
import {Link} from "react-router-dom"
import './main.css'
export default class Main extends Component {
  render() {
    return (
      <div class="m">
      <div class="ab">
      <div class="main-block">
         <div class="tit">
             <h1>Registration</h1>
         </div>
      <form action="/">

      <label id="icon" for="name"><i class="fas fa-user"></i></label>
      <input type="text" name="name" class="name" placeholder="Name" required/>
      <label id="icon" for="name"><i class="fas fa-envelope"></i></label>
      <input type="text" name="email" class="name" placeholder="Email" required/>
      <label id="icon" for="name"><i class="fas fa-book"></i></label>
      <input type="password" name="pass" class="name" placeholder="Password" required/>
      <label id="icon" for="name"><i class="fas fa-book"></i></label>
      <input type="text" name="name" class="name" placeholder="Project Name" required/>
      <label id="icon" for="name"><i class="fa fa-address-card"></i></label>
      <input type="text" name="name" class="name" placeholder="Address" required/>
      <label id="icon" for="name"><i class="fa fa-user"></i></label>
      <select id="cars">
      <option label="Primary role....." id="c"></option>
  <option label="Manager" id="c">Manager</option>
  <option label="Team member" id="c">Team member</option>
  </select>
  <label id="icon" for="name"><i class="fa fa-address-book"></i></label>
  <select id="cars">
  <option label="Department" type="text" id="c"></option>
  <option label="" id="Marketing"></option>
  <option label="Communication" id="c"></option>
  <option label="Data or Analysis" id="c"></option>
  <option label="Sales" id="c"></option>
  </select>
  <label id="icon" for="name"><i class="fa fa-tasks"></i></label>
  <input type="text" name="name" class="name" placeholder="Task" required/>
  <hr></hr>
  <div class="gender">
  <input type="radio" value="none" id="male" name="gender" checked/>
  <label for="male" class="radio">Male</label>
  <input type="radio" value="none" id="female" name="gender" />
  <label for="female" class="radio">Female</label>
  </div>
  <hr></hr>
  <div class="btn-block">
  <br></br>
  <Link to='/abc'>
  <button type="submit" class="but" href="/">Submit</button>
  </Link>
  </div>
  </form>
  </div>
  </div>
  </div>
  )
}
}

