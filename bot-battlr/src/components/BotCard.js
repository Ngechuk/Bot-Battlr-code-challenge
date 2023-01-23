import React from "react";


const BotCard = props => {
  const { bot } = props;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="military icon" />;
      break;
    case "Defender":
      botType = <i className="shield icon" />;
      break;
    case "Support":
      botType = <i className="ambulance icon" />;
      break;
    default:
      botType = <div />;
  }

  const handleClick = (e) => {
    e.preventDefault()

    props.handleClick(bot)
  }

  return (
    <div className="ui column" >
      <div
        className="ui card"
        key={bot.id}
        onClick={handleClick}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="heartbeat icon" />
            {bot.health}
          </span>

          <span>
            <i className="lightning icon" />
            {bot.damage}
          </span>
          <span>
            <i className="shield icon" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;

