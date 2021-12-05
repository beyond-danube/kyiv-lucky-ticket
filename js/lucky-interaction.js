




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

function scrollToCheckButton() {
    let submit = document.getElementById('submit');

    submit.scrollIntoView();
}
