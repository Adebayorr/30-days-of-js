let title = document.createElement('h2')
title.textContent = 'Destructuring And Spread Operator';
const document1 = document.body
document.body.appendChild(title)

const textArr = ['Economic', 'History', 'Geography', 'Agricultural Science', 'Physic', 'Biology', 'Chemistry', 'Government']

const [econ, his, geo, agric, ...scienceSubjects] = textArr

console.log(econ, his, geo, agric)

const [,,,, phy, bio, chem, gov] = textArr
console.log(scienceSubjects)


// Testing the slice() array Method
const textArrCopy = textArr.slice(0, -3)

console.log(textArrCopy)
console.log(textArr)

//DEstructuring an Object

const {PI} = Math
console.log(PI) ///Note: The name of the variable you use to destructure an object 
//should be exactly the same with the object property

const rectangle = {
    length: 24,
    breadth: 18,
    // area: this.length * this.breadth,
    // perimeter: 2 * (this.length + this.breadth)

} 

const {length, breadth, area, perimeter} = rectangle

console.log(length, breadth, area, perimeter)

//Renaming  during restructuring

const {length: l, breadth: b} = rectangle

console.log(b, l)


const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
  }

  //Using the person objeect with destructuring

  const getPersonInfo = () => {
    let fullName = person.firstName + " " + person.lastName
    let job = person.job
    let frontend = person.skills.slice(0, 4).join(', ')
    let backend = person.skills.slice(4).join(', ')

    console.log(`My name is ${fullName}, I am a ${job}. I am a fullstack developer. My frontend skills include ${frontend} and my backend includes ${backend}`)
  }

  getPersonInfo(    )