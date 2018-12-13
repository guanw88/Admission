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
                placeholder="Los Angeles, CA">
              </input>
            </label>
          </div>
          <div className="categoryFilter">
            <p>Looking For</p>
            <label>
              <input
                placeholder="Event">
              </input>
            </label>
          </div>
          <div className="dateFilter">
            <p>On</p>
            <label>
              <input
                placeholder="Any Date">
              </input>
            </label>
          </div>
          <div className="searchButton">Search Button</div>
        </div>
      </div>
    );
  }


}

export default EventFilterBox;
