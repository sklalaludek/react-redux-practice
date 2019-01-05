import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.numer
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  }
  handleChange = e => {
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  }

  render() {
    const {desc, image, name, price, status} = this.props.fish;
    return (
      <div className="fish-edit">
        <input name="name" type="text" value={name} onChange={this.handleChange}/>
        <input name="price" type="text" value={price} onChange={this.handleChange}/>
        <select name="status" value={status} onChange={this.handleChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" value={desc} onChange={this.handleChange}></textarea>
        <input name="image" type="text" value={image} onChange={this.handleChange}/>
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    );
  }
}

export default EditFishForm;