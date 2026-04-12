//  Level 1

// 1
const firstParagraph = document.querySelector('p')

//  2
const firstP = document.querySelector('#first-p')
const secondP = document.querySelector('#second-p')
const thirdP = document.querySelector('#third-p')
const lastP = document.querySelector('#last-p')

// 3
const paragraphs = document.querySelectorAll('p')

// 4
paragraphs.forEach((p) => console.log(p))

// 5 
paragraphs[3].textContent = "Oops! I'm the Fourth"

// 6

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].setAttribute('id', `paragraph${i}`)
    paragraphs[i].className = 'paragraph'
}


// Level 2

// 1
paragraphs[0].style.color = 'red'
paragraphs[1].style.color = 'cyan'
paragraphs[2].style.color = 'purple'
paragraphs[3].style.color = 'skyblue'

// 2
for (let i = 0; i < paragraphs.length; i++) {
    if (i === 0 || i === 2) {
        paragraphs[i].style.color = 'green'
    } else {
        paragraphs[i].style.color = 'red'
    }
}

// 3
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = `I am paragraph ${i}`
    paragraphs[i].setAttribute('id', `paragraph-${i}`)
    paragraphs[i].setAttribute('class', `p-${i}`)
    console.log(paragraphs[i].innerHTML)

}
