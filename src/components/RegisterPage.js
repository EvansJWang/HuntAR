import React, { Component } from 'react';
import {Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { Redirect, Link } from 'react-router-native'

export default class RegisterPage extends Component {
  constructor() {
  super();
    this.handleRegisterEmailChange = this.handleRegisterEmailChange.bind(this);
    this.handleRegisterPasswordChange = this.handleRegisterPasswordChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleRegisterEmailChange(e){
    this.props.actions.updateRegisterFormEmail(e)
  }

  handleRegisterPasswordChange(e){
    this.props.actions.updateRegisterFormPassword(e)
  }

  handleClick(){
    this.props.actions.submitRegisterForm(this.props.registerForm)
  }

  displayRegisterWithRedirect(){
    if (this.props.user.loggedin === false) {
      return(
        <View>
          <View>
            <Text>Register</Text>
          </View>
          <View>
            <Text>Email:</Text>
              <TextInput
                placeholder="Email"
                onChangeText={this.handleRegisterEmailChange}
                >
              </TextInput>
          </View>
          <View>
            <Text>Password:</Text>
              <TextInput
                placeholder="Password"
                onChangeText={this.handleRegisterPasswordChange}
                >
              </TextInput>
          </View>
          <View>
            <Button
              title="Register"
              onPress={this.handleClick}
              />
          </View>
          <Link to={'/login'}><Text>Return to the sign in page.</Text></Link>
        </View>
      )
    } else {
      return(
        <Redirect to={{
      pathname: '/characters',
    }}/>
      )
    }
  }


  render() {
    return (
      <View>{this.displayRegisterWithRedirect()}</View>
    )
  }
}
