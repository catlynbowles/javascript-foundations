class VendingMachine {
  constructor({ id, isBroken }) {
    this.id = id;
    this.isBroken = isBroken;
    this.snacks = [];
  }

  addSnacks(snack) {
    if (!this.snacks.find((snak) => snak.name === snack.name)) {
      this.snacks.push(snack);
    } else {
      return "Sorry, that snack is already stocked! Try adding a different snack.";
    }
  }

  purchaseSnack(name, price) {
    const selectedSnack = this.snacks.find((snack) => snack.name === name);
    const snackPrice = selectedSnack.price;
    if (price < snackPrice) {
      return "Sorry, not enough payment. Please add more money.";
    }
    if (selectedSnack.itemsInStock > 0) {
      selectedSnack.removeItem();
      return `Success! Here is $${price - snackPrice} back!`;
    } else {
      return "Sorry, no items in stock. Try another item.";
    }
  }
}

module.exports = VendingMachine;
