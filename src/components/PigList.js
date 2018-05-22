import React from 'react';
import Pig from './Pig'

class PigList extends React.Component {


  render(){

    const piggies = this.props.hogs.map((hog) => {
      const imgUrl = hog.name.split(" ").join("_").toLowerCase()
      return <Pig key={hog.name} data={hog} imgUrl={imgUrl} showDetails={this.props.showDetails} changeClicked={this.props.changeClicked} />
    })

    return (
      <div>
        <ul>
          {piggies}
        </ul>
      </div>
    )
  }
}

export default PigList;
