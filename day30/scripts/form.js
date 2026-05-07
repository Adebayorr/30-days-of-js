const nameRegEx = /^[a-zA-Z\u00C0-\u01FF\s\-\']{3,16}$/
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
const phoneRegEx = /^\d{3,4}[s]?\d{3}[\s]?\d{4}$/
const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// const bioRegEx = /^[a-z_- ]{8, 50}/


const firstNameElem = document.querySelector('#first-name')
const lastNameElem = document.querySelector('#last-name')
const emailElem = document.querySelector('#email')
const passwordElem = document.querySelector('#password')
const phoneElem = document.querySelector('#telephone')
const bioElem = document.querySelector('#bio')
const formElem = document.querySelector('form')
const SubmitButton = document.getElementById('submit')

firstNameElem.addEventListener('keyup', (e) => {
    const span = document.querySelector('#first-name + span') 
    if (firstNameElem.value.match(nameRegEx)) { 
        span.classList.add('hide-warning')
        firstNameElem.classList.add('correct')
    }  else {
        span.classList.remove('hide-warning')
        firstNameElem.classList.remove('correct')
    }
})

lastNameElem.addEventListener('keyup', (e) => {
    const span = document.querySelector('#last-name + span')
    if (lastNameElem.value.match(nameRegEx)) {
        span.classList.add('hide-warning')
        lastNameElem.classList.add('correct')
    } else {
        span.classList.remove('hide-warning')
        lastNameElem.classList.remove('correct')
    }
})

emailElem.addEventListener('keyup', (e) => {
    const span = document.querySelector('#email + span')
    if (emailElem.value.match(emailRegEx)) {
        span.classList.add('hide-warning')
        emailElem.classList.add('correct')
    } else {
        span.classList.remove('hide-warning')
        emailElem.classList.remove('correct')
    }
})

passwordElem.addEventListener('keyup', (e) => {
    const span = document.querySelector('#password + span') 
    if (passwordElem.value.match(passwordRegEx)) {
        span.classList.add('hide-warning') 
        passwordElem.classList.add('correct')
    } else  {
        span.classList.remove('hide-warning')
        passwordElem.classList.remove('correct')
    }
})

phoneElem.addEventListener('keyup', (e) => {
    const span = document.querySelector('#telephone + span') 
    
    if (phoneElem.value.match(phoneRegEx)) {
        span.classList.add('hide-warning')
        phoneElem.classList.add('correct')
    } else {
        span.classList.remove('hide-warning')
        phoneElem.classList.remove('correct')
    }
})

formElem.addEventListener('submit', (e) => {
    if (
        !phoneElem.value.match(phoneRegEx) &&
        !passwordElem.value.match(passwordRegEx) &&
        !emailElem.value.match(emailRegEx) && 
        !firstNameElem.value.match(nameRegEx) &&
        !lastNameElem.value.match(nameRegEx)
        ) {
        e.preventDefault()
        document.querySelector('.form-error').classList.remove('hide-warning')
    }
    
    console.log('clicked');
    
})

SubmitButton.addEventListener('click', (e) => {
    if (
        !phoneElem.value.match(phoneRegEx) &&
        !emailElem.value.match(emailRegEx) && 
        !firstNameElem.value.match(nameRegEx) &&
        !lastNameElem.value.match(nameRegEx) &&
        firstNameElem.value.match(nameRegEx)
        ) {
        e.preventDefault()
        document.querySelector('.form-error').classList.remove('hide-warning')
    }
})