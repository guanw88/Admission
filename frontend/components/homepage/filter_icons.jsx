import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import FilterIcon from './filter_icon';

class FilterIcons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const eventIds = Object.keys(this.props.events);
    const randomEventId = eventIds[Math.floor(Math.random() * eventIds.length)]

    return (
      <div className="filterIconsContainer">
        <HashLink to="/#events"><FilterIcon image={window.searchIcon} text="Browse"/></HashLink>
        <Link to="/event/new"><FilterIcon image={window.searchIcon} text="Create"/></Link>
        <Link to="/my-events"><FilterIcon image={window.searchIcon} text="My Events"/></Link>
        <Link to={"/event/" + randomEventId}><FilterIcon image={window.searchIcon} text="Surprise me!"/></Link>
      </div>
    );
  }


}

export default FilterIcons;
