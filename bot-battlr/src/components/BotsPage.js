import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    yourBots: []
   }

  componentDidMount(){
    fetch(`https://api.npoint.io/4d510c91649bdcfd2ec3/bots/`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  setYourBots = (bot) => {

    this.setState((prevState)=> {
      const newBots = prevState.yourBots.push(bot)
      return {yourbots: newBots}
    })
    console.log(this.state.yourBots)

  }

  render() {
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} />
        <BotCollection bots={this.state.bots} handleClick={this.setYourBots}/>

      </div>
    );
  }

}

export default BotsPage;