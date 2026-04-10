const addItems = () => {
    const items = ['truffle', 'canned beef', 'pickled egss']

    function pushItem (item) {
        items.push(item)
        return items
    }

    return pushItem
}

const pusherFunc = addItems()

console.log(pusherFunc('milk'))
console.log(pusherFunc('raisin'))

function shoppingCart () {
    const cart = ['corn', 'potatoes', 'cereal', 'sugar']

    function addToCart (item) {
        cart.push(item)
        return cart
    }

    function removeFromCart (item) {
        let index = cart.indexOf(item)
        if (index >= 0) {
            cart.splice(index, 1)
            return cart
        }
    }

    return {
        addToCart: addToCart,
        removeFromCart: removeFromCart
    }
}

const shoppingCartFunc = shoppingCart()

console.log(shoppingCartFunc.addToCart('sesame seeds'))
console.log(shoppingCartFunc.removeFromCart('sesame seeds'))


function personAccount (name1, name2) {
    const firstName = name1
    const lastName = name2
    const incomes = [
        {wage: 450000}, 
        {endorsement: 345000}, 
        {business: 250000}, 
        {socialMedia: 400000}
    ]
    const expenses = [ 
        {domesticUpkeep: 120000}, 
        {shopping: 45000}, 
        {miscellaneous: 10000}, 
        {philantropy: 40000}
    ]

    const totalIncome = function () {
        return incomes.reduce((acc, curr) => acc += Object.values(curr)[0], 0)
    }

    const totalExpenses = () => {
        return expenses.reduce((acc, curr) => acc += Object.values(curr)[0], 0)
    }

    const addIncome = (incomeName, amount) => {
        incomes.push({
            [incomeName]: amount
        })
        return incomes
    }

    const addExpense = (expenseName, amount) => {
        expenses.push({
            [expenseName]: amount
        })
        return expenses
    }

    const accountBalance = () => {
        return `Your weekly account balance ` +(totalIncome() - totalExpenses())
    }
    return {
        fName: firstName,
        lName: lastName,
        expenses: expenses,
        totalIncome: totalIncome,
        totalExpenses: totalExpenses,
        addIncome: addIncome,
        addExpense: addExpense,
        balance: accountBalance
    }
}

const ronaldo = personAccount('Cristiano', 'Ronaldo')

console.log(ronaldo.addExpense('royalties', 134000))