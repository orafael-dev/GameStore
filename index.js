const App = require("./App");

const app = new App();

app.createPublisher("Rockstar Games", "USA", "...");
app.createPublisher("Nintendo", "Japan", "...");

const publishers = app.getPublishers();

app.createGame(
  "Grand Theft Auto V",
  "...",
  "Action-adventure",
  100,
  publishers[0],
  "...",
  19.99,
  100
);
app.createGame(
  "Red Dead Redemption 2",
  "...",
  "Action-adventure",
  200,
  publishers[0],
  "...",
  24.99,
  100
);
app.createGame(
  "Zelda: Breath of the Wild",
  "...",
  "fantasy",
  150,
  publishers[1],
  "...",
  24.99,
  100
);
app.createGame(
  "Super Smash Bros: Ultimate",
  "...",
  "fantasy",
  120,
  publishers[1],
  "...",
  24.99,
  100
);

const games = app.getGames();

app.createUser("Rafael", "rafael@email.com", "123456");

const users = app.getUsers();

app.showDatabase();

const items = [
  {
    product: games[0],
    quantity: 2,
  },
  {
    product: games[1],
    quantity: 1,
  },
  {
    product: games[3],
    quantity: 1,
  },
];

app.createOrder(items, users[0]);

app.showDatabase();
