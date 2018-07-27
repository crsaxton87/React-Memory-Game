import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Card from './components/Card';
import cards from "./cards.json";

class App extends Component {
  state = {
    grid: [],
    clicked: [],
    score: 0,
    topScore: 0,
    middle: "Click an image to start!",
    shake: false
  };

  componentWillMount(){
    // Initial grid creation
    let newGrid = [];
    for(let i=0;i<12;i++){
      newGrid.push(cards[Math.floor(Math.random() * 18)])
    }
    this.setState({
      grid: newGrid
    })
  }

  componentDidUpdate(){
    if(this.state.grid.length < 12){
      let newGrid = this.state.grid;
      for(let i=0;newGrid.length<12;i++){
        newGrid.push(cards[Math.floor(Math.random() * 18)])
      }
      this.setState({
        grid: newGrid
      });
    }
    if(this.state.topScore < this.state.score){
      this.setState({
        topScore: this.state.score
      })
    }

    if(this.state.shake === true){
      let list = [].slice.call(document.getElementsByClassName("img-thumbnail"));
      list.forEach(function(each){
        each.classList.toggle("shake");
      })
    }
  }

  handleClick = (id, gridID) => {
    // If ID of clicked card is not in clicked array
    if(this.state.clicked.indexOf(id) === -1) {
      // Remove clicked item from grid
      let newGrid = this.state.grid;
      newGrid.splice(gridID, 1);

      // Add id to 'clicked'
      let newClicked = this.state.clicked;
      newClicked.push(id);

      // Update state
      this.setState({
        grid: newGrid,
        clicked: newClicked,
        score: this.state.score + 1,
        middle: "Correct!",
        shake: false
      })
    } 
    // If ID of clicked card is in clicked array
    else {
      // Remove clicked item from grid
      let newGrid = this.state.grid;
      newGrid.splice(gridID, 1);

      this.setState({
        grid: [],
        score: 0,
        middle: "Incorrect! Try again.",
        clicked: [],
        shake: true
      });
    }
  };

  createGrid = () => {
    return(
      <div className="container gameCont">
          {this.state.grid.map((card, i) => (
            <Card
              handleClick={this.handleClick}
              id={card.id}
              gridID={i}
              image={card.image}
              name={card.name}
              key={i}
            />
          ))}
      </div>
    )
  }

  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore} middle={this.state.middle}/>
        <Instructions />
        <div className="container-flex">
          {this.createGrid()}  
          <img src="./assets/images/bg1.png" alt="background" className="background"/>
                
        </div>
      </div>
    );
  }
}

export default App;