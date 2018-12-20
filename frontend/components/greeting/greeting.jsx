import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.currentUser && this.props.currentUser.id) {
      return (
        <ul className="nav">
          <li><HashLink to="/#events">Browse Events</HashLink></li>
          <li><Link to="/event/new">Create Event</Link></li>
          <li><Link to="/my-events">{this.props.currentUser.first_name}&apos;s Events</Link></li>
          <li onClick={this.props.logout}>Log Out</li>
        </ul>
      );
    } else {
      return (
        <ul className="nav">
          <li><Link to="/login">Browse Events</Link></li>
          <li><Link to="/login">Create Event</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      );
    }

  }


}

export default Greeting;
