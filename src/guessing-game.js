class GuessingGame {
    constructor() {}
    
    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
      this.someGuess = Math.round((this.max + this.min) / 2);
      return this.someGuess;
    }

    lower() {
       this.max = this.someGuess;
    }

    greater() {
        this.min = this.someGuess;
    }
}

module.exports = GuessingGame;
