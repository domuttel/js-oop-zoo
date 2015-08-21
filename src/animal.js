function Animal(name, age, kind){
  this.name = name;
  this.age = 0;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};


Animal.prototype.growUp = function() {
  this.age++;
};


Animal.prototype.feed = function() {
  if (this.awake === true) {
    return "NOM NOM NOM";
  } else {
    return "Can\'t eat, sleeping...";
  }
};

Animal.prototype.wakeUp = function() {
  this.awake = true;
};

Animal.prototype.sleep = function() {
  this.awake = false;
};

module.exports = Animal;
