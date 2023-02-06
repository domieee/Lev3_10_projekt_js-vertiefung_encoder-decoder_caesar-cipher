const decryptedAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const encryptedAlphabet = []

let input = document.getElementById('string').value
let output = document.getElementById('string-crypted')
let key = parseInt(document.getElementById('key').value)
const crypt = document.getElementById('crypt')

function newAlphabet() {
    for (let i = decryptedAlphabet.length; i >= 0; i--) {
        if (i > key) {
            encryptedAlphabet.unshift(decryptedAlphabet[i - 1])
        } else if (i < key) {
            encryptedAlphabet.splice(decryptedAlphabet.length - key, 0, decryptedAlphabet[i])
        }
    }
}

function ceaserCrypt() {
    newAlphabet()
    if (document.getElementById('encrypt').checked) {
        for (let i = 0; i < input.length; i++) {
            let sum = decryptedAlphabet.indexOf(input[i])
            let letterCrypt = encryptedAlphabet[sum]
            output.innerHTML += letterCrypt
        }
    } else if (document.getElementById('decrypt').checked) {
        for (let i = 0; i < input.length; i++) {
            let sum = encryptedAlphabet.indexOf(input[i])
            let letterCrypt = encryptedAlphabet[sum]
            output.innerHTML += letterCrypt
        }
    }
}

crypt.addEventListener('click', ceaserCrypt)
