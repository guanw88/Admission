import React from 'react';
import { Link } from 'react-router-dom';

class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img className="sliderImage" src={this.props.image} />
    );
  }


}

export default Slide;
