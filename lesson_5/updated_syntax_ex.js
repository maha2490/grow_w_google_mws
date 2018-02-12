// Various examples of syntax updates in ES6

// Template literal example
const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

function createAnimalTradingCardHTML(animal) {
    const cardHTML = `<div class="card">
        <h3 class="name"> ${animal.name} </h3>
          <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
          <div class="description">
            <p class="fact">${animal.fact}</p>
              <ul class="details">
                <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
                <li><span class="bold">Average Lifespan</span>: ${animal.lifespan}</li>
                <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
                <li><span class="bold">Diet</span>: ${animal.diet}</li>
            </ul>
            <p class="brief">${animal.summary}</p>
        </div>
    </div>`;
    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));

// Deconstructing
const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [a , , , d, , , , h] = things;
const one = a;
const two = d;
const three = h;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);
