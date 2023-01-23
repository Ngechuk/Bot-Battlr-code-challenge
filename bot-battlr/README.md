# code-challenge--Bot-Battlr
For this project, you’ll be building out a React application that displays a
list of available bots
# Development requirements
- Visual studio code
- Live server  extension
- npm
- json-sever

To get the code,
```bash
 click on this link: https://github.com/Ngechuk/Bot-Battlr-code-challenge.git
 ```
- fork and git clone the code to you local machine.
- Navigate to this folder by running this command:
```bash
 cd code-challenge--Bot-Battlr/
 ```
- open the code using this command, 
```bash
   code .
```
- Below at the bottom of your vs code click on the Go live to display the questions on the browser.


## Setup

After cloning the project:

1. Run `npm install` in your terminal.
2. Run `npm start`in your terminal.
2. Run `npm run server`. This will run your backend on port `3001`.
3. In a new terminal, run `npm start`. This will run the app on port `3000`.

Make sure to open
[http://localhost:3000/bots](http://localhost:3000/bots) in the
browser to verify that your backend is working before you proceed!


As a user, I should be able to:

- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to my army by clicking on it. The selected bot should
  render in the `YourBotArmy` component. The bot can be enlisted only **once**.
  The bot **does not** disappear from the `BotCollection`.
- Release a bot from my army by clicking on it. The bot disappears from the
  `YourBotArmy` component.
- Discharge a bot from their service forever, by clicking the red button marked
  "x", which would delete the bot both from the backend and from the
  `YourBotArmy` on the frontend.

Endpoints for Core Deliverables
#### GET /bots
Example Response:

```json
[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  },
  {
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.827Z",
    "updated_at": "2018-10-02T19:55:10.827Z"
  }
]
```

#### DELETE /bots/:id
Example Response:

```json
{}
```

### AUTHOR
Kevin Ngechu