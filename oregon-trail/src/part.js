class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.timesBroken = 0;
  }

  break() {
    this.broken = true;
    this.timesBroken += 1
  }

  repair() {
    if (this.timesBroken < 2) {
      this.broken = false;
    } else {
      return `This ${this.type} has seen better days, we'll need a brand new one!`
    }
  }
}

module.exports = Part;
