import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const BotsPage = () => {
    // state hook to store bots and your bots
    const [bots, setBots] = useState([]);
    const [yourBots, setYourBots] = useState([]);

    // useEffect hook to fetch bots from API
    useEffect(() => {
        fetch(`https://api.npoint.io/4d510c91649bdcfd2ec3/bots/`)
        .then(res => res.json())
        .then(data => {
            setBots(data);
        });
    }, []);

    // function to add bots to your bots state
    const handleClick = (bot) => {
        setYourBots([...yourBots, bot]);
    };

    return (
        <div>
            <YourBotArmy yourBots={yourBots} />
            <BotCollection bots={bots} handleClick={handleClick} />
        </div>
    );
}

export default BotsPage;
