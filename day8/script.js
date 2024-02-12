// const player = {
//     id: "a284sby435",
//     userName: "adebayorr",
//     townHall: "Level 12",
//     Heroes: ["Barbarian King", "Archer Queen", "Grand Warden"],
//     clanName: null,
//     league: "Crystal"
// }

// const copyPlayer = Object.assign({}, player)

// console.log(copyPlayer)

const dog = {
    name : "stuffy",
    leg : 4,
    color : "brown",
    age : 2,
    bark : "bow-wow"
}

console.log(dog)

console.log(dog.name,
    dog.leg,
    dog.color,
    dog.age ,
    dog.bark
)
dog.breed = "chihuahua"
dog.getDogInfo = function  () {
    return `This is ${this.name}, a ${this.age} years old ${this.breed} with ${this.color} fur`
}

console.log(dog)
console.log(dog.getDogInfo())



//Level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  /**
   * Find the person who has many skills in the users object.
   * Count logged in users, count users having greater than equal to 50 points from the following object. 
   */
  
