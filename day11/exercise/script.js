const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
// Destructure the rectangle object by its properties or keys.

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(constants)

const [fin, est, sw, den, nor] = countries

const {width: w, height: h, area: a, perimeter} = rectangle


//Exercise Level Two

let count = 0

do {
  const {name, scores, skills, age} = users[count]
  console.log(name, scores)
  if (users[count].skills.length < 2) {
    console.log(`${users[count].name} knows only ${users[count].skills.join()}`)
  }
  count++
} while(count < users.length)


//Exercise Level Three
