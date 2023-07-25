class VendingMachine {
  constructor({ id, isBroken }) {
    this.id = id;
    this.isBroken = isBroken;
    this.snacks = [];
  }

  addSnacks(snack) {
    if (!this.snacks.find((snak) => snak.name === snack.name)) {
      this.snacks.push(snack)
    } else {
      return "Sorry, that snack is already stocked! Try adding a different snack.";
    }
  }

  purchaseSnack(name, price) {
    const selectedSnack = this.snacks.find(snack => snack.name === name)
    selectedSnack.removeItem()
  }
}

module.exports = VendingMachine;
