export class Game {
  constructor(){
    this.frames=[]
    this.currentFrame = 0
  }

  // Roll a ball then take in params the number of pins thrown
  throw(pins){
    if (this.currentFrame == 0){
      this.frames[this.currentFrame] = new Frame(pins);
      this.currentFrame ++;
    }
    else {
      if (!this.frames[this.currentFrame - 1].isComplete()) {
        this.frames[this.currentFrame - 1] = new Frame(this.frames[this.currentFrame - 1].rolls[0], pins);
      }
      else {
        this.frames[this.currentFrame] = new Frame(pins);
        this.currentFrame ++;
      }
    }
  }

  // Give the total score of the game
  score(){
    let compt = 0;
    for(let i; i<20; i++){
      if (this.frames[i] != null){
        compt++;
      }
    }
    return compt;
  }
}

export class Frame {
  constructor(...rolls){ // ... : spread operator, on peut en mettre autant qu'on veut
    this.rolls=rolls
  }

  // get the score of the frame
  score(){
    return this.rolls.reduce( (total, roll, i) => { // total : accumulateur, roll : valeur ajoutée (index dans le for)
      i++;
      if (i>3){
        return total;
      }
      return total + roll;
    })
  }

  // To Know if the frame is finished to be played
  isComplete(){
    return (this.isStrike() || this.isSpare()) || this.rolls.length == 2;
  }

  // To Know if the score of the frame have all his rolls and bonus rolls
  isScoreComplete(){
    return ((!this.isStrike() && !this.isSpare() && this.rolls.length == 2) || ((this.isStrike() || this.isSpare()) && this.rolls.length >= 3));
  }

  isStrike(){
    return (this.rolls[0] === 10)
  }

  isSpare(){
    return (this.rolls[0] + this.rolls[1] == 10);
  }
}