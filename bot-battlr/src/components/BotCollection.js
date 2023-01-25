import React from "react";
import BotCard from "./BotCard";

class BotCollection extends React.Component {
 
  botsRender = () => {

    return this.props.bots.map(bot => (
      <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick} />))
  }



  render(){
  	return (
  	  <div>
    		<div>
    		  Collection of all bots
          {this.botsRender()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;