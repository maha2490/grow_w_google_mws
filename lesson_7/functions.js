// arrow function
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square => square * square);

console.log(...squares);

// default parameters
function buildHouse({floors = 1, color = 'red', walls = 'brick'} = {}){
  return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`
}

// building classes and subclasses
class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}

class Bicycle extends Vehicle {
  constructor(color, wheels = 2, horn = 'honk honk'){
    super(color, wheels, horn);
  }
}
