module.exports = class Database {
  #storage = {
    publishers: [],
    games: [],
    actionsFigures: [],
    orders: [],
    users: [],
  };

  find(key) {
    return this.#storage[key];
  }

  savePublisher(publisher) {
    this.#storage.publishers.push(publisher);
  }

  findGameByName(gameName) {
    return this.#storage.games.find((g) => g.name === gameName);
  }

  saveGame(game) {
    const gameExists = this.findGameByName(game.name);
    if (!gameExists) {
      this.#storage.games.push(game);
    }
  }

  addGamesToStock(gameName, quantity) {
    const game = this.findGameByName(gameName);
    game?.addToStock(quantity);
  }

  removeGamesFromStock(gameName, quantity) {
    const game = this.findGameByName(gameName);
    game?.removeFromStock(quantity);
  }

  findActionFigureByName(actionFigureName) {
    return this.#storage.actionsFigures.find(
      (a) => a.name === actionFigureName
    );
  }

  saveActionFigure(actionFigure) {
    const actionFigureExists = this.findActionFigureByName(actionFigure.name);
    if (!actionFigureExists) {
      this.#storage.actionsFigures.push(actionFigure);
    }
  }

  addActionFiguresToStock(actionFigureName, quantity) {
    const actionFigure = this.findActionFigureByName(actionFigureName);
    actionFigure?.addToStock(quantity);
  }

  removeActionFiguresFromStock(actionFigureName, quantity) {
    const actionFigure = this.findActionFigureByName(actionFigureName);
    actionFigure?.removeFromStock(quantity);
  }

  saveUser(user) {
    const userExists = this.#storage.users.find((u) => u.email === user.email);
    if (!userExists) {
      this.#storage.users.push(user);
    }
  }

  saveOrder(order) {
    this.#storage.orders.push(order);
  }

  showStorage() {
    console.table(this.#storage.publishers);
    console.table(this.#storage.games);
    console.table(this.#storage.actionsFigures);
    console.table(this.#storage.orders.map((order) => order.data));
  }
};
