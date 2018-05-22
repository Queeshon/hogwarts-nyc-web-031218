import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div>
        <form>
          Greased? <input type="checkbox" onChange={this.props.changeGreased}/><br/>
          <select onChange={this.props.changeSort}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </form>
      </div>
    )
  }
}

export default Filter;
