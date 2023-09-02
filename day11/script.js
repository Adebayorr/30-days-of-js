let title = document.createElement('h2')
title.textContent = 'Destructuring And Spread Operator';
const document1 = document.body
document.body.appendChild(title)

const textArr = ['Economic', 'History', 'Geography', 'Agricultural Science', 'Physic', 'Biology', 'Chemistry', 'Government']

const [econ, his, geo, agric, ...scienceSubjects] = textArr

console.log(econ, his, geo, agric)

const [,,,, phy, bio, chem, gov] = textArr
console.log(scienceSubjects)

