class Roadrace {
  constructor({ title, city }) {
    this.name = title;
    this.location = city;
    this.distance = null;
    this.participants = []
  }

  setDistance(distance) {
    this.distance = distance;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`;
  }

  registerParticipants() {
    
  }
}

module.exports = Roadrace;
