import React from 'react';
import { Link } from 'react-router-dom';

class EventFilterBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="eventFilterBoxContainer">
        <div className="eventFilterBox">
          <div className="locationFilter">
            <p>In</p>
            <label>
              <input
                type="text"
                placeholder="San Francisco">
              </input>
            </label>
          </div>
          <div className="categoryFilter">
            <p>Looking For</p>
            <label>
              <input
                type="text"
                placeholder="Event">
              </input>
            </label>
          </div>
          <div className="dateFilter">
            <p>On</p>
            <label>
              <input
                type="date"
                placeholder="Any Date">
              </input>
            </label>
          </div>
          <div className="searchButtonContainer">
            <div className="searchButton">
              <img src={window.searchIcon} />
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default EventFilterBox;
