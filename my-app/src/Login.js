import React from 'react';
import {LoginData} from './constants'

class Login extends React.Component {
    constructor(props) {
    super(props);
    this.state = { errorMessage:'' };
    }
    handleChangeUsername=(event)=>{
        this.props.fetchLoginData("username", event.target.value)
    }
    handleChangePassword=(event)=>{
        this.props.fetchLoginData("password", event.target.value)
    }
    handleSubmit=()=>{
      const  {username, password}=this.props;
      if(username == LoginData.username && password == LoginData.password){
        this.props.fetchLoginData("success", true)
      }
      else{
        this.props.fetchLoginData("success", false)
        this.setState({
            errorMessage:'Incorrect User Name and Password'
          });
      }

    }
    render() {
        const {LoginSuccess}= this.props
    return (
    <>
    <label>User Name</label>
    <input type="text" onChange={this.handleChangeUsername}/>
    <label>Password</label>
    <input type="password" onChange={this.handleChangePassword} />
    <button onClick={this.handleSubmit}>Submit</button>
     <h5>{this.state.errorMessage}</h5>
    </>
    );
    }
    }
    export default Login;