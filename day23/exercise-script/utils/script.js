export default function isPrime (num) {
    if (num < 2) return false
    if (num === 2) return true
    let is_prime = true

    for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                // console.log(j)
                is_prime = false
                break
            }
    }
    
    if (is_prime) return true
}