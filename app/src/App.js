import React, { Component } from "react";
import FriendCard from "./components/ItemCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import items from "./items.json";
import "./App.css";
import CardWrapper from "./components/CardWrapper";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    items, 
    score: 0,
    clicked: []
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const items = this.state.items.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ items });
  };

  checkClick = id => {

    console.log(`Clicked ${id}` );

    //Check to see if this ID is 
    const match = this.state.clicked.includes(id)
    console.log(match);

    if(match){
      this.resetGame();
    }
    else{
      this.addPoint();
      this.state.clicked.push(id);
    }
    
    this.randomizeItems();

    //Use this to check the clicked item and see if they have already clicked it in the past
  }

  resetGame = () => {
    this.setState({score: 0})
    this.setState({clicked: []});
  }

  addPoint = () => {
    const newScore = this.state.score + 1;
    this.setState({score: newScore})
  }

  randomizeItems = () => {

      var input = this.state.items;
       
      for (var i = input.length-1; i >=0; i--) {
       
          var randomIndex = Math.floor(Math.random()*(i+1)); 
          var itemAtIndex = input[randomIndex]; 
           
          input[randomIndex] = input[i]; 
          input[i] = itemAtIndex;
      }
      this.setState({items: input});
  
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Super Hero Clicky Game</Title>
        <Score>Score: {this.state.score}</Score>
        {/* Add score here */}
        <CardWrapper>
        {this.state.items.map(friend => (
          <FriendCard
            checkClick={this.checkClick}
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            // name={friend.name}
            image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
        </CardWrapper>
        
      </Wrapper>
    );
  }
}

export default App;
