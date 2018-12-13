import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider';
import EventFilterBox from './event_filter_box';
import FilterIcons from './filter_icons';

class HomePageContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Slider millisecToNextSlide={20000} />
        <EventFilterBox />
        <FilterIcons />
      </div>
    );
  }


}

export default HomePageContent;
