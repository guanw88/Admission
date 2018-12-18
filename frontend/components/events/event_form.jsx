import React from 'react';
import { Link } from 'react-router-dom';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      num_tickets_available: 5,
      start_datetime: this.state.event_date + " " + this.state.start_time,
      end_datetime: this.state.end_date + " " + this.state.end_time
    }, () => {
      this.props.action(this.state).then(
        (res) => {
          this.props.history.push(`/event/${res.event.id}/`);
        }
      );
    } );
  }
  render() {
    const headerText = (this.props.formType === "Create") ? "Create An Event" : "Event Update Page";
    const headerEventStatus = (this.props.formType === "Create") ? "Draft" : "Live";
    const deleteButton = (this.props.formType === "Create") ? null :
      <button onClick={this.props.handleDelete} className="event-option-text">Delete</button>;
    return (
      <div>
        <div className="event-header">
          <div>
            <p className="event-header-status">{headerEventStatus}</p>
            <p className="event-header-text">{headerText}</p>
          </div>
          <div>
            <button className="event-header-submit-button" onClick={this.handleSubmit}>Save</button>
          </div>
        </div>
        <div className="event-option-bar">
          <button className="event-option-text">Edit</button>
          <button className="event-option-text">Manage</button>
          {deleteButton}
        </div>
        <form className="event-form" onSubmit={this.handleSubmit}>
          <div className="event-form-section">
            <div className="event-form-section-header">
              <div className="event-form-section-numeral">1</div>
              <div className="event-form-section-title">Event Details</div>
            </div>
            <label>
              Event Title <span className="required">*</span>
              <input
                type="text"
                placeholder="Give it a short distinct name"
                value={this.state.event_name}
                onChange={this.update('event_name')} />
            </label>
            <label>
              Address
              <input
                type="text"
                placeholder="Address"
                value={this.state.address}
                onChange={this.update('address')} />
            </label>
            <label>
              City
              <input
                type="text"
                placeholder="City"
                value={this.state.city}
                onChange={this.update('city')} />
            </label>
            <label>
              State
              <input
                type="text"
                placeholder="State"
                value={this.state.state}
                onChange={this.update('state')} />
            </label>
            <label>
              ZIP
              <input
                type="text"
                placeholder="ZIP"
                value={this.state.zip}
                onChange={this.update('zip')} />
            </label>
            <label>
              Starts
              <input
                type="date"
                value={this.state.event_date}
                onChange={this.update('event_date')} />
              <input
                type="time"
                value={this.state.start_time}
                onChange={this.update('start_time')} />
            </label>
            <label>
              Ends
              <input
                type="date"
                value={this.state.end_date}
                onChange={this.update('end_date')} />
              <input
                type="time"
                value={this.state.end_time}
                onChange={this.update('end_time')} />
            </label>
            <label>
              Event Image
              <input type="file"></input>
              <div>We recommend using at least a 2160x1080px (2:1 ratio) image that's no larger than 10MB.</div>
            </label>
            <label>
              Event Description
              <textarea
                value={this.state.description}
                onChange={this.update('description')} />
            </label>
          </div>
          <div className="event-form-section">
            <div className="event-form-section-header">
              <div className="event-form-section-numeral">2</div>
              <div className="event-form-section-title">Create Tickets</div>
            </div>
            <div>Coming Soon</div>
          </div>
          <div className="event-form-section">
            <div className="event-form-section-header">
              <div className="event-form-section-numeral">3</div>
              <div className="event-form-section-title">Additional Settings</div>
            </div>
            <label>
              Listing Privacy<br/>
              <input type="radio" onChange={this.update('private_event_yn')} value="false" />
                Public page: Discoverable by anyone on Eventbrite, our distribution partners, and search engines.
                <br/>
              <input type="radio" onChange={this.update('private_event_yn')} value="true" />
                Private page: Accessible only by you.
                <br/>
            </label>
            <label>
              Event Type
              <select>
                <option value="class">Class</option>
                <option value="conference">Conference</option>
              </select>
            </label>
            <label>
              Event Topic
              <select>
                <option value="music">Music</option>
                <option value="school-activities">School Activities</option>
              </select>
            </label>
            <label>
              Remaining Tickets
              <input type="checkbox"></input>
              <div>Show the number of remaining tickets on your event listing</div>
            </label>
          </div>
          <div>
            <div>Nice job! You're almost done.</div>
            <input type="submit" value="Make Your Event Live"></input>
          </div>
        </form>


      </div>
    )

  }


}

export default EventForm
