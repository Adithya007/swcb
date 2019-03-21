import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailid: "",
      password: "",
      confirmedPassword: ""
    };
  }

  render() {
    return (
      <div>
        <div style={{ width: "500px", margin: "auto", marginTop: "5rem" }}>
          <Form
            onSubmit={() => {
              if (this.state.password !== this.state.confirmedPassword) {
                alert("Passwords not equal");
              }
            }}
          >
            <Form.Field>
              <label>Email Id</label>
              <input
                ref={e => (this.emailid = e)}
                onChange={() => {
                  this.setState({
                    emailid: this.emailid.value
                  });
                }}
                placeholder="Email Id"
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                ref={e => (this.password = e)}
                onChange={() => {
                  this.setState({
                    password: this.password.value
                  });
                }}
                type="password"
                placeholder="Password"
              />
            </Form.Field>

            <Form.Field>
              <label>Confirm Password</label>
              <input
                ref={e => (this.confirmedPassword = e)}
                onChange={() => {
                  this.setState({
                    confirmedPassword: this.confirmedPassword.value
                  });
                }}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}
