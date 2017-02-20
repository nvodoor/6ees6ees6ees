class ForagerBee extends Grub {
  // TODO..
  constructor() {
  	super();
  	this.age = 10;
  	this.job = 'find pollen';
  	this.color = 'yellow';
  	this.food = 'jelly';
  	this.canFly = true;
  	this.treasureChest = [];
  };

  forage (...args) {
  	for (var val of args) {
  		this.treasureChest.push(val);
  	}
  };
};
