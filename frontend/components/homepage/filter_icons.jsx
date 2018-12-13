import React from 'react';
import { Link } from 'react-router-dom';
import FilterIcon from './filter_icon';

class FilterIcons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filterIconsContainer">
        <FilterIcon image={window.searchIcon} text="Moods"/>
        <FilterIcon image={window.searchIcon} text="Categories"/>
        <FilterIcon image={window.searchIcon} text="Date"/>
        <FilterIcon image={window.searchIcon} text="Surprise me!"/>
      </div>
    );
  }


}

export default FilterIcons;
