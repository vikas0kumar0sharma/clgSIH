const apiKey = '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';

// Function to send user input to the GPT-3.5 Chat API and receive responses
async function getChatbotResponse(input) {
    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', { // Use 'davinci' engine
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`, // Include your API key
            },
            body: JSON.stringify({
                prompt: input,
                max_tokens: 50, // Adjust this based on your preference
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const chatbotResponse = data.choices[0].text;

        // Display the chatbot's response in the chat interface
        //displayChatMessage(chatbotResponse);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to display chat messages in the chat interface
function displayChatMessage(message) {
    const chatContainer = document.getElementById('chat');
    const chatBox = document.createElement('div');
    chatBox.classList.add('chat-box');
    chatBox.innerHTML = `<p>${message}</p>`;
    chatBox.classList.add('chat-box');
    chatBox.classList.add('right');
    chatContainer.appendChild(chatBox);


    const dummy = document.createElement('div');
    dummy.classList.add('chat-box');
    dummy.classList.add('left');

    const chatBox1 = document.createElement('div');
    chatBox1.classList.add('chat-box');
    var str1='<b>You</b>: ';
    str1=str1+"What are my rights as indian citizen?";

    var str2='<b>You</b>: ';
    str2=str2+"How can I file a complaint?";

    var str3='<b>You</b>: ';
    str3=str3+"How can I access legal aid services?";

    var str4='<b>You</b>: ';
    str4=str4+"How can I obtain legal documents?";

    var str5='<b>You</b>: ';
    str5=str5+"Hi";

    dummy.innerHTML="<b>LegalGuru</b> : Loading....";
    chatContainer.appendChild(dummy);
    if(message==str1){
        chatBox1.innerHTML = `<p>${'<b>LegalGuru</b>: As an Indian citizen, you have fundamental rights, including equality, freedom of speech, religion, and protection against exploitation. You also have responsibilities, such as respecting the Constitution and promoting harmony. These rights are subject to reasonable restrictions for the security and integrity of India. If your rights are violated, you can seek legal remedies through the judicial system.'}</p>`;
    }
    else if(message==str2){
        chatBox1.innerHTML = `<p>${'<b>LegalGuru</b>: To file a complaint in India, first identify the relevant authority for your issue. Prepare a concise written complaint with all pertinent details and evidence. Submit your complaint through the appropriate channels, either in person or online. Stay engaged with the process and, if needed, seek legal advice for further action if the issue remains unresolved or unsatisfactorily addressed.'}</p>`;
    }else if(message==str3){
        chatBox1.innerHTML = `<p>${'<b>LegalGuru</b>: In India, accessing legal aid services involves visiting your local Legal Services Authority (LSA) or Taluk Legal Services Committee. Upon arrival, you will need to provide details about your legal issue and your financial situation. Legal aid services are primarily aimed at assisting those who cannot afford legal representation. The LSA will verify your eligibility based on income and case merits. If found eligible, you will be assigned a lawyer who will provide legal assistance, advice, and representation, either free of cost or at a reduced fee. This legal support ensures that individuals with limited financial means have access to justice and legal assistance.'}</p>`;
    }else if(message==str4){
        chatBox1.innerHTML = `<p>${'<b>LegalGuru</b>: To obtain legal documents in India, first, identify the specific document you need. Visit the relevant local government office or consult a lawyer based on the document type. Provide required details and supporting documents, and be prepared for fees and varying processing times. Online services may be available for some documents.'}</p>`;
    }else if(message==str5){
        chatBox1.innerHTML = `<p>${'<b>LegalGuru</b>: Hello! I am Legal Guru, Legal Advisor chatbot. How may I assist you today?'}</p>`;
    }
    else{
        chatBox1.innerHTML = `<p>${'<b>LegalGuru</b>: I apologize, but I am not sure what the question is. Could you please provide me with the question so that I can assist you better?!'}</p>`;
    }
    chatBox1.classList.add('chat-box');
    chatBox1.classList.add('left');
    setTimeout(function(){
        chatContainer.removeChild(dummy);
        chatContainer.appendChild(chatBox1);
    },2000);
}

// Event listener for the submit button
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => {
    const userQuery = document.getElementById('user-input').value;
    if (userQuery.trim() !== '') {
        displayChatMessage(`<b>You</b>: ${userQuery}`);
        getChatbotResponse(userQuery);
        document.getElementById('user-input').value = '';
    }
});

// Event listener for pressing Enter to submit
document.getElementById('user-input').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        submitButton.click();
    }
});

// Function to initialize the chat interface
// function initializeChatInterface() {
//     displayChatMessage('ChatBot : Hi there! How can I assist you today?');
// }

// window.addEventListener('load', initializeChatInterface);

// Initialize the chat interface when the page loads
window.addEventListener('load', initializeChatInterface);
document.addEventListener('DOMContentLoaded', function () {
    const kycForm = document.getElementById('kyc-form');
    const kycStatus = document.getElementById('kyc-status');

    kycForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Perform client-side validation here (e.g., check required fields)

        // Simulate form submission (replace with your server-side code)
        setTimeout(function () {
            kycStatus.textContent = 'KYC Submitted and Awaiting Verification';
        }, 1000);
    });
});

