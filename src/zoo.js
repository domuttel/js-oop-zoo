var Animal = require("./animal");

function Zoo(name, location, status, animals){
  this.name = name;
  this.location = location;
  this.status = status;
  this.animals = animals;

}

// Zoo.prototype.changeLocation = function() {
//   this.location =
// };

Zoo.prototype.open = function() {
  this.status = "open";
};

Zoo.prototype.close = function() {
  this.status = "closed";
};

Zoo.prototype.isOpen = function(first_argument) {
  if (this.status !== "closed")
    return "Open!";
};

// Zoo.prototype.addAnimal = function(first_argument) {
//   this.animals
// };

// Zoo.prototype.removeAnimal = function(first_argument) {
//   this.animals
// };

module.exports = Zoo;

