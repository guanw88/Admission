import React from 'react';
import { Link } from 'react-router-dom';
import Slide from './slide';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        window.sliderImage1,
        window.sliderImage2
      ],
      imageText: [
        "Do More of What You Love",
        "Never Do Nothing Again"
      ],
      index: 0,
      time: new Date()
    };
    this.intervalId = null;
    this.goToNextImage = this.goToNextImage.bind(this);
  }

  goToNextImage() {
    const newIndex = (this.state.index + 1)%this.state.images.length;
    this.setState({ index: newIndex });
  }

  componentDidMount() {
    this.intervalId = setInterval(this.goToNextImage, this.props.millisecToNextSlide);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <Slide
          key={this.state.index}
          image={this.state.images[this.state.index]}
          imageText = {this.state.imageText[this.state.index]}/>
    );
  }


}

export default Slider;
