import React, { Component } from 'react';


class Login extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      contactnumber: null,
    };
    this.assignnumber = this.assignnumber.bind(this);
  }

  assignnumber(num) {
    this.setState({
      contactnumber: num,
    });
  }

  render() {
    return (
      <div className='login-container clearfix'>
        <div className='login-first-col'>
          <img src='./assets/undraw_press_play.svg' alt='student'></img>
        </div>
        <div className='login-second-col'>
          <h1>
            <span>Quick</span> Study
          </h1>

          <Route
            path='/signin'
            component={() => (
              <SignIn
                input={this.input}
                changestate={this.props.changestate}
                changeHome={this.props.changeHome}
                changeLoading={this.props.changeLoading}
              />
            )}
          />
          <Route
            path='/signup'
            component={() => (
              <SignUp
                input={this.input}
                assignnumber={this.assignnumber}
                changeHome={this.props.changeHome}
              />
            )}
          />
          <Route
            path='/verifyotp'
            component={() => (
              <Votp
                input={this.input}
                contactnumber={this.state.contactnumber}
                assignnumber={this.assignnumber}
              />
            )}
          />
          <Route
            path='/register'
            component={() => (
              <Register
                input={this.input}
                changestate={this.props.changestate}
                contactnumber={this.state.contactnumber}
              />
            )}
          />
        </div>
      </div>
    );
  }
}
export default Login;
