import React, { Component } from 'react'

import '../styles/css/contact.min.css'

export default class ContactPage extends Component {
  render() {
    return (
      <form>
        <h3>Leave us a message and we'll get back to you</h3>
        <input placeholder="Name"/>
        <input placeholder="Phone Number (optional)"/>
        <input placeholder="Email"/>
        <textarea rows="5" placeholder="Tell us a little about your enquiry"/>
      </form>
    )
  }
}
