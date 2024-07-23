const Database = require("./Database");
const ActionFigure = require("./entities/actionFigure");
const Game = require("./entities/Game");
const Order = require("./entities/Order");
const Publisher = require("./entities/Publisher");
const User = require("./entities/User");

module.exports = class App {
  static #database = new Database();

  createUser(name, email, password) {
    const user = new User(name, email, password);
    App.#database.saveUser(user);
  }

  getUsers() {
    return App.#database.find("users");
  }

  createPublisher(name, nationality, bio) {
    const publisher = new Publisher(name, nationality, bio);
    App.#database.savePublisher(publisher);
  }

  getPublishers() {
    return App.#database.find("publishers");
  }

  createGame(
    title,
    synopsis,
    genre,
    size,
    publisher,
    description,
    price,
    inStock
  ) {
    const game = new Game(
      title,
      synopsis,
      genre,
      size,
      publisher,
      description,
      price,
      inStock
    );
    App.#database.saveGame(game);
  }

  addGame(gameName, quantity) {
    App.#database.addGamesToStock(gameName, quantity);
  }

  createActionFigure(name, description, height, width, price, inStock) {
    const ActionFigure = new ActionFigure(
      name,
      description,
      height,
      width,
      price,
      inStock
    );
  }

  saveActionFigure(actionFigureName, quantity) {
    App.#database.addActionFiguresToStock(ActionFigureName, quantity);
  }

  createOrder(items, user) {
    const order = new Order(items, user);
    App.#database.saveOrder(order);
    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Game) {
        App.#database.removeGamesFromStock(product.name, quantity);
      } else if (product instanceof ActionFigure) {
        App.#database.removeActionFiguresFromStock(product.name, quantity);
      }
    });
  }

  getGames() {
    return App.#database.find("games");
  }

  getOrders() {
    return App.#database.find("orders");
  }

  showDatabase() {
    App.#database.showStorage();
  }
};
