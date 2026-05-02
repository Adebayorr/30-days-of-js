// import users from "./data/users.js"
// import { deleteUser } from "./data/users.js"
// import createUserElement from "./utilities/createUserElement.js"
// import { leaderboardWrapper } from "./utilities/createUserElement.js"


/* 
    FORM ELEMENTS 
*/
const formElement = document.querySelector('form')
const firstNameInput = document.querySelector('#first-name')
const lastNameInput = document.querySelector('#last-name')
const countryInput = document.querySelector('#country')
const scoreInput = document.querySelector('#score')
const submitButton = document.querySelector('.submit-btn')

/*
    OUTPUT ELEMENTS
*/


let users = [
    {
        id: '32oej',
        name: 'Martha Yohannes',
        country: 'Finland',
        dateCreated: 'JAN 30, 2020',
        score: 85
    },
    {
        id: 'wi78r',
        name: 'Lenny Yoro',
        country: 'Netherland',
        dateCreated: 'JUN 09, 2020',
        score: 75
    },
    {
        id: 'asne09',
        name: 'Gigi Polanski',
        country: 'Russia',
        dateCreated: 'MAY 23, 2020',
        score: 80
    },
    {
        id: '9h02j',
        name: 'Adeola Falcone',
        country: 'United Kingdom',
        dateCreated: 'JAN 30, 2020',
        score: 70
    }
]

function deleteUser (id) {
    users = users.filter(user => user.id != id).sort((a, b) => b.id - a.id)
    leaderboardWrapper.textContent = ''
    users.forEach(user => {
        createUserElement(user)
    })
}

function addToScore (id) {
    users.forEach(user => {
        if (user.id === id) {
            user.score += 5
        }
    })

    leaderboardWrapper.textContent = ''

    users.sort((a, b) => b.score - a.score)
    .forEach(user => createUserElement(user))
}

function subtractFromScore (id) {
    users.forEach(user => {
        if (user.id === id) {
            user.score -= 5
        }
    })

    leaderboardWrapper.textContent = ''

    users.sort((a, b) => b.score - a.score).forEach(user => createUserElement(user))
    console.log(users)
}



let leaderboardWrapper = document.querySelector('.leaderboard-wrapper')
const createUserElement = ({id, name, country, dateCreated, score}) => {

    // const {id, name, country, dateCreated, score} = user
    /*
        CREATE ELEMENTS FOR USERS
    */
    const userDiv = document.createElement('div')
    const usernameWrapper = document.createElement('div')
    const modifyButtonWrappers = document.createElement('div')

    const usernameElement = document.createElement('h2')
    const timeElement = document.createElement('time')
    const countryElement = document.createElement('p')
    const scoreElement = document.createElement('p')

    const deleteButton = document.createElement('button')
    const addButton = document.createElement('button')
    const minusButton = document.createElement('button')


    /*
        STRUCTURE THE ELEMENTS OF USERS SECTION
    */
   usernameWrapper.append(usernameElement, timeElement)
   modifyButtonWrappers.append(deleteButton, addButton, minusButton)
   userDiv.append(usernameWrapper, countryElement, scoreElement, modifyButtonWrappers)


    /*
        SET ATTRIBUTES TO USERS CHILDREN
    */

    userDiv.setAttribute('class', 'user')
    userDiv.setAttribute('data-id', id)
    usernameWrapper.classList.add('username-wrapper')
    usernameElement.classList.add('username')
    countryElement.classList.add('country')
    scoreElement.classList.add('score')
    modifyButtonWrappers.classList.add('modify-user')
    deleteButton.classList.add('mod-btn')
    deleteButton.classList.add('delete')
    addButton.classList.add('mod-btn')
    addButton.classList.add('add')
    minusButton.classList.add('mod-btn')
    minusButton.classList.add('minus')

    /**
     * SETTING CONTENT FOR USER CHILDREN
     */

    usernameElement.textContent = name
    timeElement.textContent = dateCreated
    countryElement.textContent = country
    scoreElement.textContent = score
    deleteButton.textContent = '🗑️'
    addButton.textContent = '+5'
    minusButton.textContent = '-5'

    /**
     * INSERT USER TO THE PAGE
    */

    deleteButton.addEventListener('click', () => {
        deleteUser(id)
    })

    addButton.addEventListener('click', () => {
        addToScore(id)
    })

    minusButton.addEventListener('click', () => subtractFromScore(id))

    leaderboardWrapper.appendChild(userDiv)

}



users.sort((a, b) => b.score - a.score).map(user => {
    createUserElement(user)
})


/**
 * GET MODIFY BUTTONS IN LEADERBOARD DIV
 * 
 */

const deleteButtons = document.querySelectorAll('.delete')
const addButtons = document.querySelectorAll('.add')
const minusButtons = document.querySelectorAll('.minus')


// deleteButtons.forEach(button => {
//     button.addEventListener('click', () => {
    
//         const id = button.parentElement.parentElement.getAttribute('data-id')
//         deleteUser(id)
//         console.log(deleteButtons)
//     })

// })


formElement.addEventListener('submit', (e) => e.preventDefault())

// submitButton.addEventListener('click', () => {
//     console.log('clicked')
//     console.log(lastNameInput.value)
//     if (lastNameInput.value === '' || lastNameInput.value.length === 1  ) {
//         console.log('lastname too short or empty')
//         return
//     }

//     if (firstNameInput.value === '' || firstNameInput.value.length === 1  ) {
//         console.log('Firstname too short or empty')
//         return
//     }

//     if (countryInput.value.toLowerCase() = )

// })


// function createUserObject ()  {

// }