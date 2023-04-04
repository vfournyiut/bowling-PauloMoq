export class Game {
  constructor(){
    this.frames=[]
    this.currentFrame = 0
  }

  // Roll a ball then take in params the number of pins thrown
  throw(pins){

  }

  // Give the total score of the game
  score(){

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