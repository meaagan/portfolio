import React from "react"
import TextField from '@material-ui/core/TextField';

export default class Form extends React.Component {
  state = {
   firstName: "",
   lastName: "",
   email: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Thank you ${this.state.firstName} ${this.state.lastName}! I will get in touch with you shortly.`)
  }

  render (){
    return (
        <form 
          onSubmit={this.handleSubmit}
          name="contact" 
          method="POST"
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          Content-Type="application/x-www-form-urlencoded"
          action="/thankyou"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <TextField
              label="First Name"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              variant="outlined"
              size="small"
            />   
          </p>
          <p>
            <TextField
              label="Last name"
              type="text" 
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              variant="outlined"
              size="small"
            />
          </p>
          <p>
            <TextField 
              label="Email"
              type="email" 
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              variant="outlined"
              size="small"
            />
          </p>
          <p>
            <TextField
              label="Message"
              id="outlined-multiline-static" 
              name="message"
              multiline
              rows={4}
              variant="outlined"
              size="small"
            />
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    )
  }
}
