export class Game {
  constructor(){
    this.frames=[]
    this.currentFrame = 0
  }

  // Roll a ball then take in params the number of pins thrown
  roll(pins){

  }

  // Give the total score of the game
  score(){

  }
}

export class Frame {
  constructor(...rolls){
    this.rolls=rolls
  }

  // Add the pins to the rolls' list of the frame
  roll(pins){}

  // get the score of the frame
  score(){}

  // To Know if the frame is finished to be played
  isComplete(){}

  // To Know if the score of the frame have all his rolls and bonus rolls
  isScoreComplete(){}

  isStrike()

  isSpare()
}