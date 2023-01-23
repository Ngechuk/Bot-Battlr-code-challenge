import React from "react";
import BotCard from "./BotCard";

class YourBotArmy extends React.Component {
  
  handleClick = (e) => {e.preventDefault()}
  botsRender = (yourBots) => {
    console.log(yourBots)
    return yourBots.map(bot => (<BotCard bot={bot} handleClick={this.handleClick}/>))
  }


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.botsRender(this.props.yourBots)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;