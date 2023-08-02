class Gear {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  }

  checkForValidity() {
    const validTypes = ["ammunition", "food", "clothes"];
    if (validTypes.includes(this.type)) {
      return `Great, we'll need lots of ${this.type}!`;
    } else {
      const sent = `I don't think a ${this.type} will help us.`;
      this.type = null;
      return sent;
    }
  }
}

module.exports = Gear;
