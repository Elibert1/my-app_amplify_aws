let gravity = 0.5;
let time = 0;
//function belongs to the global scope 
function Particle(startX,startY) {
    this.x = startX;
    this.y = startY;
}
//The particle class is extended with a prototype object that contains properties
Particle.prototype = {
//getVelocity() property that returns (time * gravity)
    getVelocity: () => {
        return time * gravity;
    },
//A property of move() that adds the getVelocity() value to the existing y position
    move: () => {
      this.y += this.getVelocity();
//if the existing y should greater than or equal to 500, then console.log('bottom');
      if(this.y >= 500)
          console.log('bottom');
    }
}
//an empty particles array that has a for loop using a setInterval at 100ms to push 
let particles = [];
for(let i = 0; i < 100; i++) {
//The "new" keyword calls the new instance of Particle and allows the object constructor to run  
//(without the "new" keyword its just calling the function Particle) 
    particles.push(new Particle(i,Math.random()*500));
}

setInterval(() => {
    time++;
    particles.filter((p) => {
        console.log(p.x)
        return p.y < 500;
    }).forEach((p) => {
        p.move();
    })
},100)