import "./Contactform.css"
import React from 'react'

function Contactform() {
  return (
    <div className="form-container">
        <h1>Send your queries to us!</h1>
        <form>
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Subject"/>
            <textarea placeholder="Message" rows="4"></textarea>
            <button>Send Message</button>

        </form>
    </div>
  )
}

export default Contactform