//  Level 1

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

// 1
const skillsJson = JSON.stringify(skills, undefined, 4)

// 2
let age = 250;
const ageJson = JSON.stringify(age, undefined)

// 3
let isMarried = true

const isMarriedJson = JSON.stringify(isMarried)
// console.log(isMarriedJson)

// 4
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const studentJson = JSON.stringify(student, undefined, 2)

// Level 2

// 1
const studentJsonFiltered = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
// console.log(studentJsonFiltered)


// Level 3

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`


const fetchedTxt = JSON.parse(txt)

let userWithMostSkills 
for (user in fetchedTxt) {
    let topSkill = 0
    console.log(fetchedTxt[user])
    if (fetchedTxt[user].skills.length > topSkill ) {
        topSkill = fetchedTxt[user].skills.length
        userWithMostSkills = fetchedTxt[user]
    }
}

console.log(userWithMostSkills)