import React from 'react';
import { Link } from 'react-router-dom';

class EventListing extends React.Component {
  constructor(props) {
    super(props);
  }

  // Placeholder function; need to actually convert from database date
  extractMonFromDate(date) {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return months[Math.floor ( Math.random() * months.length )];
  }

  // Placeholder function; need to actually convert from database date
  extractDayFromDate(date) {
    const days = ["01","12","23","24","29"];
    return days[Math.floor ( Math.random() * days.length )];
  }

  render() {
    return (
      <li className="eventListingContainer">
        <img className="eventListingImage" src={this.props.image} />
        <div className="eventListingDetails">
          <div className="eventListingDateContainer">
            <div className="eventListingMonth">{this.extractMonFromDate(this.props.date)}</div><br/>
            <div className="eventListingDay">{this.extractDayFromDate(this.props.date)}</div>
        </div>
        <div className="eventListingDescriptionContainer">
          <div className="eventListingName">{this.props.name}</div>
          <div className="eventListingInfo">
              {this.props.name}<br/>
              {this.props.name}<br/>
              {this.props.name}<br/>
              {this.props.name}
          </div>
        </div>
        </div>
      </li>
    );
  }


}

export default EventListing;
