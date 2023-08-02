var Skier = require("./Skier");

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = "up";
  }

  admitSkier(name, hasTicket) {
    if (!hasTicket) {
      return `Sorry, ${name}. You need a lift ticket!`;
    }
    if (this.skiers.length < this.limit) {
      this.skiers.push(new Skier(name, hasTicket));
    } else {
      return `Sorry, ${name}. Please wait for the next lift!`;
    }
  }

  startLift() {
    if (this.skiers.length === this.limit) {
      this.safetyBar = "down";
    } else {
      const diff = this.limit - this.skiers.length;
      return `We still need ${diff} more skier${diff > 1 ? "s" : ""}!`;
    }
  }
}

module.exports = Lift;
