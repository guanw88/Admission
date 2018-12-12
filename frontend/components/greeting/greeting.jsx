import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.currentUser && this.props.currentUser.id) {
      return (
        <ul className="nav">
          <li><a href="/">Browse Events</a></li>
          <li><a href="/">Create Event</a></li>
          <li>Welcome, {this.props.currentUser.first_name}</li>
          <li onClick={this.props.logout}>Log Out</li>
        </ul>
      );
    } else {
      return (
        <ul className="nav">
          <li><a href="/">Browse Events</a></li>
          <li><a href="/">Create Event</a></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      );
    }

  }


}

export default Greeting;
