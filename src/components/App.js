import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigList from './PigList'
import Filter from './Filter'

class App extends Component {

  state = {
    greased: false,
    sortType: "name"
  }

  changeGreased = () => {
    this.setState(prevState => ({greased: !prevState.greased}))
  }

  changeSort = (event) => {
     event.target.value === "weight" ? this.setState({sortType: "weight"}) : this.setState({sortType: "name"})
  }

  sortedHogs = (filteredHogs) => {
    if(this.state.sortType === "weight"){
      return filteredHogs.sort((a, b) => {
        const aWeight = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        const bWeight = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

        if(aWeight > bWeight){
          return 1
        }
        else if(aWeight < bWeight){
          return -1
        }
        return 0
      })
    }
    else {
      return filteredHogs.sort((a, b) => {
        const aName = a.name.toLowerCase()
        const bName = b.name.toLowerCase()


        if(aName < bName){
          return -1
        }
        else if(aName > bName){
          return 1
        }
        return 0
      })
    }

  }

  filteredHogs = () => {
    if(this.state.greased){
      return hogs.filter((hog) => hog.greased)
    }
    else {
      return hogs
    }
  }

  displayHogs = () => {
    return this.sortedHogs(this.filteredHogs())
  }

  showDetails = () => {

  }

  render() {
    return (
      <div className="App">
        < Nav />
        < Filter changeGreased={this.changeGreased} changeSort={this.changeSort} />
        < PigList hogs={this.displayHogs()} showDetails={this.showDetails} changeClicked={this.changeClicked} />
      </div>
    )
  }
}

export default App;
