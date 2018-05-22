import React from 'react';

class Pig extends React.Component {
  state = {
    clicked: false
  }

  changeClicked = () => {
    this.setState(prevState => ({clicked: !prevState.clicked}))
  }

  render(){
    const {name, specialty, greased} = this.props.data
    const weight = this.props.data['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    const medal = this.props.data['highest medal achieved']
    const imgUrl = require('../hog-imgs/' + this.props.imgUrl + '.jpg')

    const detailsDiv = () => { return (
      <div>
        Name: {name}<br/>
        Speciality: {specialty}<br/>
        Greased: {greased.toString()}<br/>
        Weight: {weight}<br/>
        Medals: {medal}
        <hr/>
      </div>
    )}
    return (
      <div>
        <div onClick={this.changeClicked}>
          <img src={imgUrl} onClick={this.props.showDetails} />
        </div>
        {this.state.clicked ? detailsDiv() : ""}
      </div>
    )
  }

}

export default Pig;
