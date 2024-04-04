import "./trip.css"

import React, { Component } from 'react'

export class TripData extends Component {
  render() {
    return (
      <>
    
    <div className="card" >
  <img src={this.props.tripimg} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.triplocation}</h5>
    <p className="card-text">{this.props.tripdetails}</p>
    <p className="price">{this.props.price}</p>
    <a href="/" className="btn btn-primary">View More</a>
  </div>
</div>
</>
    )
  }
}

export default TripData