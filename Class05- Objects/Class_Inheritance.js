//ES5 Old way of inheritance chains
function Person (name, job) {
    this.name = name;
    this.job = job;
  };
   
  Person.prototype.getName = function getName () {
    return this.name;
  };
   
  Person.prototype.getJob = function getJob () {
    return this.job;
  };
  
  function SuperHero (name, heroName) {
    Person.call(this, name, heroName);
  }
  
  SuperHero.prototype = Object.create(Person.prototype);
  SuperHero.prototype.constructor = SuperHero;
  
  SuperHero.parent = Person.prototype;
  SuperHero.prototype.getJob = function () {
    return 'I am '+ this.job + "!"
  };
  
  let batman = new SuperHero('Bruce Wayne', 'Batman');
  
  console.log(batman.getJob()); 
  