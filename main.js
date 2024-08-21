// Objectives
// Use nested arrays and objects.
// Combine objects, arrays, and functions.
// Create a class to define the blueprint for creating objects.
// Add methods to a class.
// Set properties on an instance of a class.
// Make an instance of each class customizable.
// Create methods to alter the properties of an instance.
// Develop a class that inherits attributes from a "parent" class.
// Create static properties for a class.
// Create a "factory."



// part 1


// const adventurer = {
//   name: "Robin",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"]
// }

// // As an additional practice exercise, create a loop that logs each item in Robin’s inventory.

// adventurer.inventory.map(console.log)




// redefine adventurer

// As an additional practice exercise, create a loop that logs each item in Robin’s inventory.


// Add a “companion” sub-object to “Leo” with the following properties:
// The companion’s name is “Frank.”
// The companion’s type is “Flea.”
// The companion has its own belongings, which includes a small hat and sunglasses.


// const adventurer = {
//   name: "Robin",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"],
//   companion: {
//     name: "Leo",
//     type: "Cat",
//     companion: {
//       name: "Frank",
//       type: "Flea",
//       inventory: ["hat", "sunglasses"],
//     }
//   }
// }


//redfine againe robin w functions



const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["hat", "sunglasses"],
    }
  },
  roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
  },
}

adventurer.roll();
adventurer.roll();
adventurer.roll();
adventurer.roll();
adventurer.roll();
adventurer.roll();
