import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Main extends Component {
  state = {
    logged_in: false,
    email: '',
    loaded: false
  }

  componentDidMount() {
    axios.get('/auth/isauth')
      .then(res => {
        if (res.data.email) {
          this.setState({
            email: res.data.email ? res.data.email : '',
            logged_in: true
          });
        } else {
          // this.props.history.push('/login');
        }
        this.setState({
          loaded: true
        })
      })
  }


  render() {
    return (
      <main>
        {!this.state.loaded ? (
          <div className="loader">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          </div>
        ) : ''}
        <header>
          <h3>Logo</h3>

          {!this.state.logged_in ? <a href="http://localhost:5000/auth/login">Login Through Google</a> : <p>{this.state.email}</p>}
        </header>

        <h1>Main</h1>
      </main>
    )
  }
}

export default withRouter(Main);