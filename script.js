const startMess = "Hi there, what's up?";
const compMessages = ["Exciting!", "How about a coffee tomorrow?", "I saw Jessy yesterday", "It's not my business but thanks for sharing", "No way!", "Can't wait to see you"];
const input = document.getElementById("input");
const messbox = document.querySelector(".messBox");

(function initialize() {
    createMessage(startMess, "Computer");
    input.addEventListener("keyup", () => {
        if (event.keyCode === 13) {
            createMessage(input.value, "You");
            emptyTextfield();
            let random = compMessages[Math.floor(Math.random() * compMessages.length)];
            createMessage(random, "Computer");
        }
    });
})();

function createMessage(text, sender) {
    const bubble = document.createElement("div");

    const name = document.createElement("h5");
    name.innerText = sender;

    const par = document.createElement("p");
    par.innerText = text;

    const date = document.createElement("h6");
    const hours = new Date().getHours();
    const minutes = new Date().getUTCMinutes();
    date.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

    bubble.appendChild(name);
    bubble.appendChild(par);
    bubble.appendChild(date);
    messbox.appendChild(bubble);

    sender === "Computer" ? 
        bubble.setAttribute("class", "byComp bubble") :
        bubble.setAttribute("class", "byPerson bubble");
}

function emptyTextfield() {
    input.value = "";
}