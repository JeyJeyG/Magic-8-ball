const shakeButton = document.getElementById("shakeButton");
const responseElement = document.getElementById("response");

const response = [
    "Yessss",
    "No",
    "Maybe",
    "Ask again Later",
    "Outlook not so good",
    "Definitely",
    "Don't count on it",
    "Without a Doubt"

]

shakeButton.addEventListener("click", ()=> {
    const randomIndex = Math.floor(Math.random() * response.length);
    const randomResponse = response[randomIndex];
    responseElement.textContent = randomResponse;
});