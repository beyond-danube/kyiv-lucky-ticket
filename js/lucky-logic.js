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

function getSubSum(charsString) {
    let numbers = Array.from(charsString)

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

function checkLuckFromCharsString(charsString) {
    if (charsString.length !== 18) { return new LuckyResut('Схоже, код неправильниий 😔') }

    let oldScholTicketNumber = getSubSum(charsString)
    
    let first = getNumbersSum(oldScholTicketNumber, 0, 3)
    let last = getNumbersSum(oldScholTicketNumber, 3, 6)

    let diff = Math.abs(first - last)

    let r = new LuckyResut(diff === 0 ? 'Щасливий 🎉' : diff < 2 ? 'Майже 🙌' : 'Спробуй ще 🤏', first, last, oldScholTicketNumber) 

    console.log(r)

    return r

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

class LuckyResut {
    result
    sumFirst
    sumLast
    tikcetNumber
    constructor(result, sumFirst, sumLast, tikcetNumber) {
        this.result = result
        this.sumFirst = sumFirst
        this.sumLast = sumLast
        this.tikcetNumber = tikcetNumber
    }
}
