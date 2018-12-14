import React from 'react';
import { Link } from 'react-router-dom';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <p>Event Detail Page for Event #{this.props.match.params.id}</p>
    )

  }


}

export default EventDetail;
