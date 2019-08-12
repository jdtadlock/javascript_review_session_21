import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import axios from 'axios';


class Login extends Component {
  // state = {
  //   logged_in: false,
  //   email: '',
  //   loaded: false
  // }

  // componentDidMount() {
  //   axios.get('/auth/isauth')
  //     .then(res => {
  //       if (res.data.email) {
  //         this.setState({
  //           email: res.data.email ? res.data.email : '',
  //           logged_in: true
  //         });
  //       } else {
  //         this.props.history.push('/login');
  //       }
  //       this.setState({
  //         loaded: true
  //       })
  //     })
  // }


  render() {
    return (
      <main>
        <h1>Login Page!</h1>
      </main>
    )
  }
}

export default withRouter(Login);