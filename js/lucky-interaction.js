function setRandomBackground() {
    let bcgr = document.getElementsByTagName('body')[0]

    bcgr.style.backgroundImage = `radial-gradient(rgba(0, 0, 0, 0) 0%, transparent 20%, black 80%), url(${getRandomValueFromArray(backgroundUrls)})`
}

function setReandomTicketScan() {
    let ticket = document.getElementById('ticket-image')

    ticket.src = `img/tickets/${getRandomValueFromArray(tickets)}`
}

function getRandomValueFromArray(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

function getCalculationsToForms() {
    let ticket = document.getElementById('ticket').value

    let newTicketNumber = document.getElementById('new')
    newTicketNumber.innerText = ticket

    let acsiiCode = getAsciiCodeFromTicket(ticket)
    let chars = charsToSumFromCharCodes(acsiiCode)

    let result = checkLuckFromCharsString(chars)
    
    let oldSchoolNumber = document.getElementById('old')
    oldSchoolNumber.innerText = result.tikcetNumber


    document.getElementById('sum1').innerText = result.sumFirst
    document.getElementById('sum2').innerText = result.sumLast

    document.getElementById('checkLuckyTicketLabel').innerText = result.result
}
