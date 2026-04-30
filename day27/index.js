const author = {
    name: 'Asabeneh Yetayeh',
    titles : [ ['💻', 'Programmer'], ['📙', 'Educator'], ['🔥', 'Motivator'], ['📦', 'Content Creator'], 
        ['🔥', 'Motivational Speaker'], ['📖', 'Instructor']
    ],
    description: `I am Asabeneh Yetayeh. I am instructor, developer, 
        motivator and content creator. I love educating people and creating educational
        materials. In January 2019, I also created a teaching material 
        JavaScript For Everyone. In December 2019, I created 30Days Of Python
        challenge and in January 2020 30 Days Of JavaScript challenge.`,
    challenges: ['JavaScript for Everyone', '30Days of JavaScript',
        '30Days of Python'
    ],
    techs: ['HTML', 'Javascript', 'React', 'Redux', 'Node',
         'Python', 'MongoDB', 'Pandas', 'Numpy'  
    ]
    
}

const headingElem = document.querySelector('h1')
const titlesContainer= document.querySelector('.titles')
const aboutElem = document.querySelector('.about-me')
const challengesContainer = document.querySelector('.challenges')
// const techsContainer = document.querySelector('.techs')
const techElements = document.querySelector('.tech')




function updatePage () {
    author.challenges.map(challenge => {
        const div = document.createElement('div')
        div.textContent = challenge
        challengesContainer.appendChild(div)
    })
}

updatePage()

let currentTech = 0
let currentTitle = 0

function updateTech () {
    const colors = ['#6633b2', '#309f0a', '#034042', 
        '#b11111', '#d147d1', '#102511', '#96ffab', 
        '#251b95'
    ]
    techElements.textContent = author.techs[currentTech]
    techElements.style.color = colors[currentTech]
    currentTech = (currentTech + 1) % author.techs.length
}

function updateTitles () {
        titlesContainer.textContent = author.titles[currentTitle][0] + ' ' + author.titles[currentTitle][1]
        currentTitle = (currentTitle + 1) % author.titles.length
        // titlesContainer.classList.remove('slide-out')
    
}

// updateTitles()
updateTech()


setInterval(() => {
    titlesContainer.classList.add('slide-out')
    updateTitles()
}, 2000)

setInterval(() => {
    updateTech()
}, 2000)