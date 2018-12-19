import React from 'react';
import { Link } from 'react-router-dom';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return (e) => {
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
      const formData = new FormData();
      formData.append('event[id]', this.state.id);
      formData.append('event[event_name]', this.state.event_name);
      formData.append('event[event_date]', this.state.event_date);
      formData.append('event[num_tickets_available]', this.state.num_tickets_available);
      formData.append('event[start_datetime]', this.state.start_datetime);
      formData.append('event[end_datetime]', this.state.end_datetime);
      formData.append('event[address]', this.state.address);
      formData.append('event[city]', this.state.city);
      formData.append('event[state]', this.state.state);
      formData.append('event[zip]', this.state.zip);
      formData.append('event[description]', this.state.description);
      formData.append('event[private_event_yn]', this.state.private_event_yn);
      formData.append('event[organizer_id]', this.state.organizer_id);
      if (this.state.image_file) {
        formData.append('event[photo]', this.state.image_file);
      }
      this.props.action(formData).then(
        (res) => {
          this.props.history.push(`/event/${res.event.id}/`);
        }
      );
    } );
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () =>{
      return this.setState({ image_url: reader.result, image_file: file})
    }

    if (file) {
      reader.readAsDataURL(file);
    }

  }

  render() {
    const headerText = (this.props.formType === "Create") ? "Create An Event" : "Event Update Page";
    const headerEventStatus = (this.props.formType === "Create") ? "Draft" : "Live";
    const optionBarText = (this.props.formType === "Create") ? "Create" : "Edit";
    const deleteButton = (this.props.formType === "Create") ? null :
      <button onClick={this.props.handleDelete} className="event-option-text">Delete</button>;

    const fileUploadContainerContents = (this.state.image_url) ?
      <img src={this.state.image_url} /> :
      <div className="file-selector-text-container">
        <div className="file-selector-title-text">Add Event Image</div>
        <div className="file-selector-descriptor-text">Choose a compelling image that brings your event to life.</div>
      </div>;

    const eventFormRadioButtons =
      <div>
        <input
          type="radio"
          onChange={this.update('private_event_yn')}
          checked={String(this.state.private_event_yn) === "false"}
          value="false" />
        <div className="listing-privacy-radio-button-text">Public page:
          <span className="listing-privacy-radio-button-hint-text"> Discoverable by anyone on Eventful! , our distribution partners, and search engines.</span>
        </div>
        <input
          type="radio"
          onChange={this.update('private_event_yn')}
          checked={String(this.state.private_event_yn) === "true"}
          value="true" />
      </div>;

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
          <button className="event-option-text">{optionBarText}</button>
          <Link to="/my-events">
            <button className="event-option-text">Manage</button>
          </Link>
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
            <div className="start-end-time-container">
              <label>
                Starts
                <br/>
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
                <br/>
                <input
                  type="date"
                  value={this.state.end_date}
                  onChange={this.update('end_date')} />
                <input
                  type="time"
                  value={this.state.end_time}
                  onChange={this.update('end_time')} />
              </label>
            </div>
            <br/>
            <label>
              Event Image<br/>
              <input className="file-selector" type="file" id="event-form-file-selector" onChange={this.handleFile} />
              <div className="file-selector-label">
                <label htmlFor="event-form-file-selector">
                  {fileUploadContainerContents}
                </label>
              </div>
              <div className="file-selector-explanation-text">We recommend using at least a 2160x1080px (2:1 ratio) image that's no larger than 10MB.</div>
            </label>
            <label>
              Event Description
              <br/>
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
            <div className="event-form-radio-buttons">
              <label >
                Listing Privacy<br/>
                {eventFormRadioButtons}
                <div className="listing-privacy-radio-button-text">Private page:
                  <span className="listing-privacy-radio-button-hint-text"> Accessible only by you.</span>
                </div>
              </label>
            </div>
            <label>
              Event Type
              <select value={this.state.event_type} onChange={this.update('event_type')}>
                <option value="initial" disabled>Select the type of event</option>
                <option value="1">Appearance or Signing</option>
                <option value="2">Attraction</option>
                <option value="3">Camp, Trip, or Retreat</option>
                <option value="4">Class, Training, or Workshop</option>
                <option value="5">Concert or Performance</option>
                <option value="6">Conference</option>
                <option value="7">Convention</option>
                <option value="8">Dinner or Gala</option>
                <option value="9">Festival or Fair</option>
                <option value="10">Game or Competition</option>
                <option value="11">Meeting or Networking Event</option>
                <option value="100">Other</option>
                <option value="12">Party or Social Gathering</option>
                <option value="13">Race or Endurance Event</option>
                <option value="14">Rally</option>
                <option value="15">Screening</option>
                <option value="16">Seminar or Talk</option>
                <option value="17">Tour</option>
                <option value="18">Tournament</option>
                <option value="19">Tradeshow, Consumer Show, or Expo</option>
              </select>
            </label>
            <label>
              Event Topic
              <select value={this.state.event_topic} onChange={this.update('event_topic')}>
                <option value="initial" disabled>Select a topic</option>
                <option value="101">Auto, Boat &amp; Air</option>
                <option value="102">Business &amp; Professional</option>
                <option value="103">Charity &amp; Causes</option>
                <option value="104">Community &amp; Culture</option>
                <option value="105">Family &amp; Education</option>
                <option value="106">Fashion &amp; Beauty</option>
                <option value="107">Film, Media &amp; Entertainment</option>
                <option value="108">Food &amp; Drink</option>
                <option value="109">Government &amp; Politics</option>
                <option value="110">Health &amp; Wellness</option>
                <option value="111">Hobbies &amp; Special Interest</option>
                <option value="112">Home &amp; Lifestyle</option>
                <option value="113">Music</option>
                <option value="100">Other</option>
                <option value="114">Performing &amp; Visual Arts</option>
                <option value="115">Religion &amp; Spirituality</option>
                <option value="116">School Activities</option>
                <option value="117">Science &amp; Technology</option>
                <option value="118">Seasonal &amp; Holiday</option>
                <option value="119">Sports &amp; Fitness</option>
                <option value="120">Travel &amp; Outdoor</option>
              </select>
            </label>
          </div>
          <div className="event-form-footer-submit">
            <div className="event-form-footer-submit-text">Nice job! You're almost done.</div>
            <button
              onClick={this.handleSubmit}
              className="event-form-footer-submit-button"
              type="submit">Make Your Event Live
            </button>
          </div>
        </form>


      </div>
    )

  }


}

export default EventForm
