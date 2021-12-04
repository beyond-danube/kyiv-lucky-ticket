function getAsciiCodeFromTicket(ticketCode) {
    let chars = Array.from(ticketCode.split('$$').pop())

    let charsCodes = []

    chars.forEach(e => {
        charsCodes.push( e.charCodeAt(0) )
    });

    console.log(charsCodes)

    return charsCodes
}

function charsToSumFromCharCodes(charsCodes) {
    let charsString = charsCodes.join('')

    return charsString
}

function charsToOldSchoolTicketNumber(charsString) {
    let numbers = Array.from(charsString)

    if(numbers.length !== 18) {
        throw new Error('Seems ticket number is invalid: ' + charsString + 'Processed numbers are: ' + numbers)
    }

    let oldScholTicketNumber = []

    let tempArray = []

    for (const number of numbers) {

        if(tempArray.length < 3) {
            tempArray.push(parseInt(number))
        }

        if(tempArray.length === 3) {
            let value = tempArray[0] + tempArray[1] + tempArray[2]
            value = value.toString().length > 1 ? value.toString().slice(-1) : value

            oldScholTicketNumber.push(parseInt(value))

            console.log('temp array ' + tempArray)

            tempArray = []
        }

    }

    return oldScholTicketNumber.join('')

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
        return 'Щасливий 🎉'
    } else if (diff < 2) {
        console.log(diff)
        return 'Майже щасливий 🙌'
    } else {
        console.log(diff)
        return 'Спробуй ще 🤏'
    }
}
