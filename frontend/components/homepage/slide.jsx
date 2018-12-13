import React from 'react';
import { Link } from 'react-router-dom';

class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="sliderOverlayText">{this.props.imageText}</p>
        <img className="sliderImage" src={this.props.image} />
      </div>
    );
  }


}

export default Slide;
