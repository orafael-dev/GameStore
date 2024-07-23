const Product = require("./Product");

module.exports = class Game extends Product {
  constructor(
    title,
    synopsis,
    genre,
    size,
    publisher,
    description,
    price,
    inStock = 0
  ) {
    super(`Jogo: ${title}`, description, price, inStock);
    this.title = title;
    this.synopsis = synopsis;
    this.genre = genre;
    this.size = size;
    this.publisher = publisher;
  }
};
