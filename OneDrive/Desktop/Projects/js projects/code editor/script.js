let output = document.querySelector('#output')
let htmlcode=''
let csscode = ''
let jscode = ''

let allinputs = document.querySelectorAll('.leftpart textarea')

allinputs.forEach((el, index) => {
    el.addEventListener('keyup', () => {
        if (index == 0) {
            htmlcode = el.value
            console.log(htmlcode)
        }
        if (index == 1) {
            csscode = el.value
        }
        if (index == 2) {
            jscode = el.value
        }
        output.contentDocument.body.innerHTML = htmlcode
        output.contentDocument.head.innerHTML = `<style> ${csscode} </style>`
        output.contentWindow.eval(jscode) 
    })
})

