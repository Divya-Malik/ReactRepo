import React from 'react';
import Login from './Login'
import Dashboard from './Dashboard'
import { connect } from 'react-redux';
import {LoginData} from './store/actions/loginActions'
class LoginContainer extends React.Component {
    constructor(props) {
    super(props);
    }
    
    render() {
    return (
    <>
   {!this.props.LoginSuccess ? <Login
    username={this.props.username}
    password={this.props.password}
    LoginSuccess={this.props.LoginSuccess}
    fetchLoginData={this.props.fetchLoginData}
    />:<Dashboard/>}
    </>
    );
    }
}
    const mapStateToProps = (state) =>({
        username:state.login.username,
        password:state.login.password,
        LoginSuccess: state.login.success
    })
     const mapDispatchToProps=(dispatch) =>({
         fetchLoginData:(key, value) => dispatch(LoginData(key, value))
     })
    
    export default connect(mapStateToProps, mapDispatchToProps) (LoginContainer);