let age = prompt('How old are you?')
if (age === '') throw "Empty Input";
if (isNaN(age)) throw new Error("Input is not number");
let ageNumber = Number(age)
if (ageNumber < 18) throw "You're are not old enough";
if (age >= 18) alert('Congratulations, You are now onboard')


const pi = 3.14
try {
    pi.toLowerCase()
} catch (err) {
    console.error(err)

} finally {
    console.log(pi)
}