class HoneyMakerBee extends Grub {
  // TODO..
  constructor () {
  	super();
  	this.age = 10;
  	this.job = 'make honey';
  	this.color = 'yellow';
  	this.food = 'jelly';
  	this.honeyPot = 0; 
  }

  makeHoney () {
  	this.honeyPot++;
  };

  giveHoney () {
  	this.honeyPot--;
  }
};
