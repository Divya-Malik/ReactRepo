import React from 'react';
import { LoginData } from './constants'
import './index.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorMessage: '' };
  }
  handleChangeUsername = (event) => {
    this.props.fetchLoginData("username", event.target.value)
  }
  handleChangePassword = (event) => {
    this.props.fetchLoginData("password", event.target.value)
  }
  handleSubmit = () => {
    const { username, password } = this.props;
    if (username.toLowerCase() == LoginData.username && password == LoginData.password) {
      this.props.fetchLoginData("success", true)
    }
    else {
      this.props.fetchLoginData("success", false)
      this.setState({
        errorMessage: 'Incorrect User Name and Password'
      });
    }

  }
  render() {
    const { LoginSuccess } = this.props
    return (
      <div className="login">
        <div><h2>LOGIN</h2></div>
        <div className="textBox"> <label>USERNAME</label>
          <input style={{ marginLeft: '10px', height: '20px', fontSize: '18px' }} type="text" onChange={this.handleChangeUsername} /></div>
        <div className="textBox"> <label>PASSWORD</label>
          <input style={{ marginLeft: '10px', height: '20px', fontSize: '18px' }} type="password" onChange={this.handleChangePassword} /></div>
        <div className="textBox"> <button style={{ height: '30px', fontSize: '18px' }} onClick={this.handleSubmit}>SUBMIT</button></div>
        <h5 style={{ color: 'red' }}>{this.state.errorMessage}</h5></div>

    );
  }
}
export default Login;