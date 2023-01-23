import React from "react";
import BotCard from "./BotCard";

class BotCollection extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {bots: this.props.bots}
  // }

  //your code here
  botsRender = () => {

    return this.props.bots.map(bot => (
      <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick} />))
  }



  render(){
  	return (
  	  <div className="four column grid">
    		<div className="row">
    		  Collection of all bots
          {this.botsRender()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;