class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

  checkInGroup(group) {
    if (this.openings >= group.length) {
      group.forEach((member) => this.currentlyPlaying.push(member.name));

      this.currentlyPlaying.reverse();
      this.openings -= group.length;
      return `You're checked in. Have fun!`;
    } else {
      return `Sorry, we are currently booked! Please come back later.`;
    }
    // console.log(this.currentlyPlaying);
  }
}

module.exports = GolfCourse;
