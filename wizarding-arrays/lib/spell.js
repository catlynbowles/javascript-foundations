class Spell {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.executionHistory = []
  }

  execute(target) {
    let spell = "";
    if (Array.isArray(target)) {
      for (var i = 0; i < target.length; i++) {
        this.executionHistory.push(target[i])
        spell += `Success! You've cast a spell on the ${target[i]}. `;
      }
      return spell.trim()
    } else {
      return `Success! You've cast a spell on the ${target}.`;
    }
  }

  clearExecutionHistory() {
    this.executionHistory = []
  }
}

module.exports = Spell;
