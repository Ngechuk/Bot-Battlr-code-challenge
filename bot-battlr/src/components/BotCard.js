const BotCard = props => {
  const { bot } = props;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i />;
      break;
    case "Defender":
      botType = <i />;
      break;
    case "Support":
      botType = <i />;
      break;
    default:
      botType = <div />;
  }

  const handleClick = (e) => {
    e.preventDefault()

    props.handleClick(bot)
  }

  return (
    <div>
      <div
        key={bot.id}
        onClick={handleClick}
      >
        <div >
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div>
          <div>
            {bot.name} {botType}
          </div>

          <div >
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div >
          <span>
            <i />
            {bot.health}
          </span>

          <span>
            <i />
            {bot.damage}
          </span>
          <span>
            <i />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
