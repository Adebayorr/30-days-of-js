import users from "./data/users.js"


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
const leaderboardWrapper = document.querySelector('.leaderboard-wrapper')

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
    usernameWrapper.classList.add('username-wrapper')
    usernameElement.classList.add('username')
    countryElement.classList.add('country')
    scoreElement.classList.add('score')
    modifyButtonWrappers.classList.add('modify-user')
    deleteButton.classList.add('mod-btn')
    addButton.classList.add('mod-btn')
    minusButton.classList.add('mod-btn')

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

    leaderboardWrapper.appendChild(userDiv)

}

users.map(user => {
    createUserElement(user)
})


console.log(leaderboardWrapper)
formElement.addEventListener('submit', (e) => e.preventDefault())