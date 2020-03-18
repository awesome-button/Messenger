const input = document.getElementById("input");
const messbox = document.querySelector(".messBox");

(function initialize() {
    createMessage("Hi there, what's up?", "Computer");
    input.addEventListener("keyup", () => {
        if (event.keyCode === 13) {
            createMessage(input.value, "You");
            updateScroll();
            emptyTextfield();
            computerTyping();
            setTimeout(() => {
                removeTyping();
                createMessage(randomMess(), "Computer");
                updateScroll();
            }, 1700);
        }
    });
})();

function randomMess() {
    const compMessages = ["Exciting!", "How about a coffee tomorrow?", "I saw Emma yesterday", "Nice weather today!", "I am really tired of corona talk haha", "Can't wait to see you"];
    let random = compMessages[Math.floor(Math.random() * compMessages.length)];
    return random;
}

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

function computerTyping() {
    const p = document.createElement('p');
    p.setAttribute("class", "typing");
    p.innerText = "Computer is typing...";
    messbox.appendChild(p);
}

function removeTyping() {
    messbox.removeChild(messbox.lastChild);
}

function updateScroll() {
    messbox.scrollTop = messbox.scrollHeight;
}