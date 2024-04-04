import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class Navbar extends Component {
  state={clicked:false};
  handleClick=()=>{
    this.setState({clicked: !this.state.clicked })
  }
  render() {
    return (
    <nav className="NavItems">
        <h1 className="NavLogo">TravLove</h1>
        <div className="menuIcons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "navMenu active" : "navMenu" }>
          {MenuItems.map((item,index)=>{
            return(
             <li key={index}><Link className={item.className} to={item.url }><i className={item.icon}></i>{item.title}</Link></li>
            )
          
          })}
         <a href="/signup"><button >Sign Up</button></a>
        </ul>
    </nav>
    )
  }
}

export default Navbar