import React from 'react';
import { Link } from 'react-router-dom';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selected = (this.props.selected === true) ? "selectedCategory" : "";

    return (
      <li className={selected} onClick={this.props.updateCategory}>{this.props.categoryName}</li>
    );
  }


}

export default CategoryFilter;
