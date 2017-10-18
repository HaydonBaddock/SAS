import React, { Component } from 'react'

import '../styles/css/contact.min.css'

export default class ContactPage extends Component {
  render() {
    return (
      <form>
        <input placeholder="Name"/>
        <input placeholder="Phone Number"/>
        <input placeholder="Email"/>
        <textarea rows="5" placeholder="Tell us a little about what your enquiry"/>
      </form>
    )
  }
}
