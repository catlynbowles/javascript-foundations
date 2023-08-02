class Snowman {
  constructor({ carrots, coal, buttons, snowballs }) {
    this.carrots = carrots;
    this.coal = coal;
    this.buttons = buttons;
    this.snowballs = snowballs;
    this.magicHat = false;
  }

  canWearMagicHat() {
    if (
      this.coal >= 2 &&
      this.buttons >= 5 &&
      this.carrots >= 1 &&
      this.snowballs >= 2
    ) {
      return (this.magicHat = true);
    }
  }
}

module.exports = Snowman;
