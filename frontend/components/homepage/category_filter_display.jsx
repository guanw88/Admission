import React from 'react';
import { Link } from 'react-router-dom';
import CategoryFilter from './category_filter';

class CategoryFilterDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.updateCategory = this.updateCategory.bind(this);

    this.state = {
      categoryFilterText: ["All","Epic night out", "Live music", "Fitness",
        "Creative classes", "Professional advancement", "Family time",
        "Fun on a budget", "Something totally unique", "Outdoor adventures",
        "Free popular events", "Exclusive events"],
      selectedIndex: 0
    };

  }

  updateCategory(e) {
    e.target.classList.add("selectedCategory");
    this.setState({selectedIndex: this.state.categoryFilterText.indexOf(e.target.innerText)});
  }

  render() {
    const categoryFilters = this.state.categoryFilterText.map( (category, idx) => {
      return (
        <CategoryFilter
            key={category}
            categoryName={category}
            selected={idx === this.state.selectedIndex}
            updateCategory={this.updateCategory}
        />
      );
    });

    return (
      <div className="categoryFilterContainer">
        <p>{this.props.text}</p>
        <ul className="categoryFilters">
          {categoryFilters}
        </ul>
      </div>
    );
  }


}

export default CategoryFilterDisplay;
