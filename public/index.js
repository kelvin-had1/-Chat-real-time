

let socket = io('http://localhost:3000/')

function renderMessage(message){
    let containerMessage = document.getElementById('container-message')
    

    let divMessage = document.createElement('div')
    
    divMessage.classList.add('message-div')
    
    
    
    divMessage.innerHTML = `<strong>${message.author}:</strong> ${message.message}`
    
    containerMessage.append(divMessage)

}

socket.on('previousMessages', function(messages){
    for(message of messages){
        renderMessage(message)
    }
})

socket.on('receivedMessage', function(message){
    renderMessage(message)
})


document.querySelector('.btn').addEventListener('click', _ => {
    document.getElementById('form').onsubmit
})


document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()

    let author = document.querySelector('#name').value
    let message = document.querySelector('#message').value

    if(author.length && message.length){
        var messageObject = {
            author: author,
            message: message
        }
        renderMessage(messageObject)
        

        socket.emit('sendMessage', messageObject)
    }
})