import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider';
import EventFilterBox from './event_filter_box';

class HomePageContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Slider millisecToNextSlide={20000} />
        <EventFilterBox />
      </div>
    );
  }


}

export default HomePageContent;
