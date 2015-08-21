var Animal = require("./animal");

function Zoo(name, location, status, animals){
  this.name = name;
  this.current_location = "here";
  this.previous_location = [];
  this.status = "closed";
  this.animals = [];

}

Zoo.prototype.changeLocation = function(location) {
  this.previous_location.push(this.current_location);
  this.current_location = location;
};

Zoo.prototype.open = function() {
  this.status = "open";
};

Zoo.prototype.close = function() {
  this.status = "closed";
};

Zoo.prototype.isOpen = function() {
  if (this.status === "open") {
    return "Open!";
  } else {
    return "Closed!";
  }
};

Zoo.prototype.addAnimal = function(animal) {
  this.animals.push(animal);
  if (this.status === "open" && this.anmals.indexOf(animal) === -1) {
    return animal;
  }
};

Zoo.prototype.removeAnimal = function(animal) {
  if (this.status === "open") {
    var index = animals.indexOf(animal);
    animals.splice(index, 1);
  }
};

module.exports = Zoo;

