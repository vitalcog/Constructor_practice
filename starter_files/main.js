//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, status, color, hungry,) {
  this.name = name;
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.ownedBy = function(human) {
    this.owner = human.name;
  }
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog('sadie', 'normal', 'normal', true, true);
let moonshine = new Dog('moonshine', 'normal', 'normal', true, true);
let atticus = new Dog('atticus', 'normal', 'normal', true, true);


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name) {
  this.name = name;
  this.cool = true;
  this.pet = function(dog) {
    dog.status = 'happy';
  }
  this.sprayPaint = function(dog, color) {
    dog.color = color;
  }
  this.feed = function(dog) {
    dog.hungry = false;
  }
  this.blowTorchEnemy = function(loser) {
    loser.cool = false;
  }
}

// Instances of Human
// Needed: mason, julia

let mason = new Human('mason');
let julia = new Human('julia');

mason.sprayPaint(sadie, 'black');

mason.feed(sadie);

sadie.ownedBy(mason);

julia.blowTorchEnemy(mason);

//
