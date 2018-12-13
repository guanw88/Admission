import React from 'react';
import { Link } from 'react-router-dom';

class FilterIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filterIconBox">
        <div className="filterIconCircle">
          <img src={window.searchIcon} />
        </div>
        {this.props.text}
      </div>
    );
  }


}

export default FilterIcon;
