import React from "react"
// import TextField from '@material-ui/core/TextField'
import { TextField, Button } from '@material-ui/core'
import makeStyles from "@material-ui/core/styles"
// import Portal from '@material-ui/core/Portal'

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
   };

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  };

  // handleClick = () => {
  //   setShow(!show)
  // }

  render (){
      // const [show, setShow] = React.useState(false);
    return (
        <form 
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
            <Button variant="contained" type="submit">
            {/* <Button variant="contained" type="submit" onClick={handleClick}> */}
              {/* {show ? 'Send' : 'Sent!'} */}
              Send
            </Button>
            {/* <div>
              {show ? (
                <Portal>
                  <span>Thank you for your message! I will get back to you as soon as possible.</span>
                </Portal>
              ) : null}
            </div> */}
          </p>
        </form>
    )
  }
}

export default Form