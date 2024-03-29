console.log("Client side javascript file is loaded!")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = ''
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = `Loading...`
    messageTwo.textContent = ``

    if(location.trim() === ""){
        messageOne.textContent = `Please type in some value!`
        messageTwo.textContent = ``
    } else {
        fetch(`/weather?address=${location}`).then((response) => {
            response.json().then((data) => {
                if(data.error){
                    messageOne.textContent = `Error: ${data.error}`
                    messageTwo.textContent = ``
                } else {
                    messageOne.textContent = `Location: ${data.location}`
                    messageTwo.textContent = `Forecast: ${data.forecast}`
                }
            })
        })
    }   
})
