// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// Get each of the the paragraph using document.querySelector('#id') and by their id
// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// Loop through the nodeList and get the text content of each paragraph
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// Set id and class attribute for all the paragraphs using different attribute setting methods

const firstP = document.querySelector('p')
const p1 = document.getElementById('first-p')
const p2 = document.getElementById('second-p')
const p3 = document.getElementById('third-p')
const p4 = document.getElementById('last-p')
const allP = document.querySelectorAll('p')

allP.forEach(p => console.log(p.textContent))

p4.innerText = "Fourth Paragraph"

const ids = ['first-paragraph', 'second-paragraph', 'third-paragraph', 'last-paragraph']
const classes = ['first-pg', 'second-pg', 'third-pg', 'last-pg']

for (let i = 0; i < allP.length; i++) {
    allP[i].className = classes[i]
    allP[i].id = ids[i]
}

console.log(allP)


// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// Set text content, id and class to each paragraph

const colors = [ '#e73f7e', '#983ea4', '#8ab8ce', '#109872']

for (let i = 0; i < allP.length; i++) {
    allP[i].style.background = colors[i] 
    allP[i].style.border = '2px solid red'
    allP[i].style.fontSize = '35px'
    allP[i].style.fontFamily = 'Roboto'
    i%2 === 0 ? allP[i].style.color = 'red' : allP[i].style.color = 'green'

}

const level3 = document.createElement('a')
level3.textContent = 'Exercise: Level Three'
level3.setAttribute('href', './exercise-level-3/index.html')

document.body.appendChild(level3)