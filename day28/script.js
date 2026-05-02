// import users from "./data/users.js"
// import { deleteUser } from "./data/users.js"
// import createUserElement from "./utilities/createUserElement.js"
// import { leaderboardWrapper } from "./utilities/createUserElement.js"
import countries from "./data/countries.js"


/* 
    FORM ELEMENTS 
*/
const formElement = document.querySelector('form')
const firstNameInput = document.querySelector('#first-name')
const lastNameInput = document.querySelector('#last-name')
const countryInput = document.querySelector('#country')
const scoreInput = document.querySelector('#score')
const submitButton = document.querySelector('.submit-btn')
const errorMessage = document.querySelector('.error-message')

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
        id: 'asne9',
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

    addButton.addEventListener('click', () => addToScore(id))

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




function generateID () {
    const chars = '0ab1cd2ef3gh4ij5kl6mn7op8qr9stuvwxyz'
    let id = ''
    for (let i = 0; i < 5; i++) {
        id += chars[Math.floor(Math.random() * 36)]
    }
    return id
}


function formatDate () {
    const date = new Date()
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
    })

    return formattedDate.format(date)
}
console.log(formatDate())
console.log(generateID())


formElement.addEventListener('submit', (e) => e.preventDefault())

submitButton.addEventListener('click', () => createUserObject())


function createUserObject ()  {
    if (firstNameInput.value === '' || firstNameInput.value.length === 1  ) {
        errorMessage.textContent = 'First Name too short or empty'
        errorMessage.classList.remove('no-error')
        return
    }

    if (lastNameInput.value === '' || lastNameInput.value.length === 1  ) {
        errorMessage.textContent = 'Last name too short or empty'
        errorMessage.classList.remove('no-error')
        return
    }

    if (!countries.includes(countryInput.value.toLowerCase()
        .charAt(0)
        .toUpperCase() +  countryInput.value.slice(1))) {
          errorMessage.textContent = "Country is empty or does not exist"
            errorMessage.classList.remove('no-error')
            return
    }

    if (scoreInput.value === '') {
        errorMessage.textContent = 'Score cannot be empty'
        errorMessage.classList.remove('no-error')
        return
    }

    errorMessage.textContent = ''
    errorMessage.classList.add('no-error')
   users.push({
    id: generateID(),
    name: firstNameInput.value + ' ' + lastNameInput.value,
    country: countryInput.value.charAt(0).toUpperCase() + countryInput.value.slice(1),
    dateCreated: formatDate(),
    score: Number(scoreInput.value)
   })
   console.log(users)
   leaderboardWrapper.textContent = ''

   lastNameInput.value = ''
   firstNameInput.value = ''
   countryInput.value = ''
   scoreInput.value = ''
   users.sort((a, b) => b.score - a.score).forEach(user => createUserElement(user))
}