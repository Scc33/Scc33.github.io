const chatOutput = document.getElementById('chat-output');
const typingDelay = 30; // Delay between each character being typed

// Function to add a message to the chat output with typing animation
async function addMessageWithTypingAnimation(sender, message) {
    const output = document.createElement('div');
    output.innerHTML = `<strong>${sender}:</strong> `;
    chatOutput.appendChild(output);

    for (let i = 0; i < message.length; i++) {
        await delay(typingDelay); // Delay before typing next character
        output.innerHTML += message.charAt(i);
    }

    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to bottom of chat output
}

// Function to add a message to the chat output without typing animation
async function addMessageWithoutTypingAnimation(sender, message) {
    const output = document.createElement('div');
    output.innerHTML = `<strong>${sender}:</strong> `;
    chatOutput.appendChild(output);

    output.innerHTML += message
    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to bottom of chat output
}

// Function to delay for a given amount of time
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Start message
addMessageWithTypingAnimation('AI', "Hi, I'm a GPT powered chat bot. Ask me a question about Sean's site!");

document.getElementById('chat-form').addEventListener('submit', async(event) => {
    event.preventDefault();

    const chatInput = document.getElementById('chat-input');

    let message = chatInput.value;
    chatInput.value = '';

    // Add user message to chat output with typing animation
    await addMessageWithoutTypingAnimation('You', message);

    message = ``;

    // Call OpenAI API
    const response = await fetchOpenAiApi(message);
    console.log("Response ", response)

    // Add AI response to chat output with typing animation
    await addMessageWithTypingAnimation('AI', response);
});

async function fetchOpenAiApi(message) {
    const apiUrl = 'https://pjk4psw4e6.execute-api.us-east-1.amazonaws.com/Tracy'; // Modify this URL according to the API version and desired engine

    console.log("Message ", message);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: message
    };

    const response = await fetch(apiUrl, requestOptions).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        return data;
    });

    console.log("Response ", response);
    return response;
}