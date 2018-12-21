import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider';
import EventFilterBoxContainer from './event_filter_box_container';
import FilterIconsContainer from "./filter_icons_container";
import EventDisplayContainer from "./event_display_container";


class HomePageContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Slider millisecToNextSlide={20000} />
        <EventFilterBoxContainer />
        <FilterIconsContainer events={this.props.events}/>
        <EventDisplayContainer />
      </div>
    );
  }


}

export default HomePageContent;
