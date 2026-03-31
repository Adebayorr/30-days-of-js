//  Level 1

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

// 1
const [e, pi, gravity, humanBodyTemp, boilingWater] = constants

// 2
const [fin, est, sw, den, nor] = countries

// 3
let {width, height, area, perimeter} = rectangle


// Level 2

// 1
const userKeys = users.map(({name, scores, skills, age}) => ({name, scores, skills, age}))

// 2
const userlessSkills = users.filter(({name, scores, skills}) => skills.length < 2)

// Level 3

//1 Check ./exercise/script.js

//2 
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, [, , jsScore, reactScore]] = student

// 3
const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]
function convertArrayToObj (data) {
    const studentObjectArray = data.map(([name, skills, scores]) => {return {name:name, skills:skills, scores:scores}})
    return studentObjectArray
}

//  4
const developer = {
    name: 'David',
    age: 25,
    skills: {
    frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
    ],
    backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
        { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
    }
}

const newDeveloper = Object.assign(developer)

newDeveloper.skills.frontEnd.push({skill:'Bootstrap', level: 8})
newDeveloper.skills.backEnd.push({skill: 'Express', level: 9})
newDeveloper.skills.dataBase.push({skill: 'SQL', level: 8})
newDeveloper.skills.dataScience.push('SQL')
console.log(newDeveloper)