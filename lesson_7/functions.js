// arrow function
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square => square * square);

console.log(...squares);

// default parameters
function buildHouse({floors = 1, color = 'red', walls = 'brick'} = {}){
  return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`
}
