let challenge = "30 Days of JavaScript"

console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase)
console.log(challenge.toLowerCase)
console.log(challenge.substr(0, 2))
console.log(challenge.substring(3, 21))
console.log(challenge.includes("script"))
console.log(challenge.split())
console.log(challenge.split(" "))

console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", "))

console.log(challenge.replace("JavaScript", "Python"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))
console.log("You cannot end a sentence with because because because is a conjunction".indexOf("because"))
console.log("You cannot end a sentence with because because because is a conjunction".lastIndexOf("because"))

console.log(' 30 Days Of JavaScript '.trim())

console.log(challenge.startsWith("3"))
console.log(challenge.endsWith("t"))
console.log(challenge.match(/a/gi))

console.log('30 Days of '.concat("JavaScript"))
console.log(challenge.repeat(2))

//Level 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log(typeof "10" == typeof 10)

console.log(Math.ceil(parseInt("9.8")) )

console.log("python".includes("on"))
console.log("jargon".includes("on"))
console.log("I hope this course is not full of jargon.".includes("jargon"))
console.log(Math.random() * 100)
console.log((Math.random() * 50) + 50)
console.log(Math.random() * 255)

console.log("JavaScript"[Math.floor(Math.random() * 10)])

console.log("1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125")

console.log('You cannot end a sentence with because because because is a conjunction'.substring(31, 54))


//Level 3
console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi))

console.log('You cannot end a sentence with because because because is a conjunction'.match(/because/g))

let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

sentence.replace(/@/g, "")
// sentence.replace("@", "").replace("&", "")

// console.log(sentence.replace(/%/g, ""))
// console.log(sentence.replace(/&/g, ""))
console.log(sentence)