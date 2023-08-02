class LunchBox {
  constructor({ owner, madeOf, shape, color }) {
    this.owner = owner;
    this.material = madeOf;
    this.shape = shape;
    this.color = color;
    this.snacks = [];
  }

  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }

  findHealthySnacks() {
    return this.snacks
      .filter((snack) => snack.checkForHealthy())
      .map((snack) => snack.type);
  }
}

module.exports = LunchBox;
