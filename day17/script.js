document.body.textContent = "Day 17"

// Level 1
localStorage.clear()
localStorage.setItem('firstName', 'AbdulFatai');
localStorage.setItem('lastName', 'AbdulRaheem');
localStorage.setItem('age', '24');
localStorage.setItem('country', 'Nigeria');
localStorage.setItem('city', 'Oyo')


// Level 2

const student = {
    'first name': 'Muhammad',
    'last name': 'AbdulRaheem',
    'age': 23,
    'skills': ['HTML', 'CSS', 'JavaScript', 'React', 'Wordpress', 'Figma'],
    'country': 'Nigeria'
}

const studentJSON = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', studentJSON)
console.log(localStorage)

const personAccount = {
    firstName: 'Charles',
    lastName: 'Tyrone',
    incomes: [23450, 45000, 3450, 1900],
    expenses: [1500, 4000, 3450],

    totalIncome: function () {
        return this.incomes.reduce((acc, curr) => acc += curr, 0)
    },

    totalExpense: function () {
        return this.expenses.reduce((acc, curr) => acc += curr, 0)
    },

    addIncome: function (income) {
        this.incomes.push(income)
    },

    addExpenses: function (expense) {
        this.expenses.push(expense)
    },

    accountBalance: function () {
        return this.totalIncome() - this.totalExpense()
    },

    accountInfo: function () {
        return `The account balance of ${this.firstName} ${this.lastName} is ${this.accountBalance()}`
    }
}
// personAccount.addIncome(25000)
console.log(personAccount.accountInfo())