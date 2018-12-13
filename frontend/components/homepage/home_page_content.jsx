import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider';
import EventFilterBox from './event_filter_box';
import FilterIcons from './filter_icons';
import EventDisplay from './event_display';

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
        <EventDisplay />
      </div>
    );
  }


}

export default HomePageContent;
