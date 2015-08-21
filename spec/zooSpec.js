var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation('foo');
      expect(zoo.current_location).toEqual('foo');
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.open();
      expect(zoo.status).toEqual("open");
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open();
      expect(zoo.isOpen()).toEqual("Open!");
    });
    it('should see if the zoo is closed', function(){
      zoo.close();
      expect(zoo.isOpen()).toEqual("Closed!");
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      zoo.open();
      expect(zoo.animals).toEqual([]);
    });
    it('should add an animal to the animals array', function(){
      zoo.addAnimal(pig);
      expect(zoo.animals).toEqual([pig]);
    });

    it('should only add instances of animals', function(){
      zoo.addAnimal(lion);
      expect(zoo.animals).toEqual([lion]);
    });

    it('should not add duplicates', function(){
      zoo.addAnimal(pig);
      expect(zoo.animals).toEqual([pig]);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.open();
      expect(zoo.animals).toEqual([]);
    });
  });
});

