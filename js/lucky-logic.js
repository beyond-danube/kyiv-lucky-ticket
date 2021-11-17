function getAsciiCodeFromTicket(ticketCode) {
    let chars = Array.from(ticketCode.split('$$').pop())

    let charsCodes = []

    chars.forEach(e => {
        charsCodes.push( e.charCodeAt(0) )
    });

    return charsCodes
}

function charsToSumFromCharCodes(charsCodes) {
    let charsString = charsCodes.join('')
    
    return charsString
}


function getNumbersSum(numbersString, startIndex, endIndex) {
    let numbers = Array.from(numbersString)

    let halfArray = numbers.splice(startIndex, endIndex)

    let sum = 0

    for (const num of halfArray) {
        sum += parseInt(num)
    }

    return sum
}

function checkLuckyTicket(val1, val2) {
    let diff = Math.abs(val1 - val2)

    if (diff === 0) {
        return 'Lucky 🎉'
    } else if (diff < 5) {
        console.log(diff)
        return 'Almost lucky, try again 🙌'
    } else {
        console.log(diff)
        return 'No luck today, try again 🤏'
    }
}
