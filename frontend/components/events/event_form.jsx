import React from 'react';
import { Link } from 'react-router-dom';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const headerText = (this.props.formType === "Create") ? "Create An Event" : "Event Update Page";
    return (
      <p>{headerText}</p>
    )

  }


}

export default EventForm
