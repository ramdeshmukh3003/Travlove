import "./BestSellers.css"

import React, { Component } from 'react'

export class BestSellerData extends Component {
  render() {
    return (
     <div className={this.props.className}>
          <div className='best-text'>
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
      </div>
      <div className='best-img'>
        <img alt='Image' src={this.props.img1}/>
        <img alt='Image' src={this.props.img2}/>
      </div>
      </div>
    )
  }
}

export default BestSellerData