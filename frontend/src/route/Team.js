import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import './team.css'
import abc from './pic1.jpg'
import a from './pic3.jpg'
import ab from './pic2.jpg'
export default class Team
 extends Component {
  render() {
    return (
      <div class="tea">
      <h2 className='tk'>OUR TEAM</h2>

<div class="rose">
  <div class="colse">
    <div class="ca">
    <img src={ab} alt="Jane" style={{height:180, width:260}}/>
    
    <div class="cont">
    <h2 className='lil'>Jane Doe</h2>
    <p class="ti">CEO & Founder</p>
    <br/>
    <p className='para'>Some text that describes me lorem ipsum ipsum lorem.</p>
    <p className='para'>example@example.com</p>
    <Link to="/contact">
    <button class="buttonon">Contact</button>
    </Link>
    </div>
    </div>
    </div>
    
    <div class="colse">
    <div class="ca">
    <img src={a} alt="Jane" style={{height:180, width:260}}/>
    
    
    <div class="cont">
    <h2 className='lil'>Mike Ross</h2>
    <p class="ti">Art & Director</p>
    <br/>
    <p className='para'>Some text that describes me lorem ipsum ipsum lorem.</p>
    <p className='para'>example@example.com</p>
    <Link to="/contact">
    <button class="buttonon">Contact</button>
    </Link>
    </div>
    </div>
    </div>
    
    <div class="colse">
    <div class="ca">
    <img src={abc} alt="Jane" style={{height:180, width:260}}/>
  
    <div class="cont" >
        <h2 className='lil'>John Doe</h2>
        <p class="ti">Art & Designer</p>
        <br/>
        <p className='para'>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p className='para'>example@example.com</p>

        <Link to="/contact">
        <button class="buttonon">Contact</button>
        </Link>
      </div>
    </div>
    </div>
    </div>
    </div>
    )
  }
}
