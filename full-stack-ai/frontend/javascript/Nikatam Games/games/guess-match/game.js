let secret;
let player1 = { name: "", attempts: 0 };
let player2 = { name: "", attempts: 0 };
let activePlayer;

const setupScreen = document.getElementById("setup-screen");
const gameplayScreen = document.getElementById("gameplay-screen");
const startBtn = document.getElementById("start-game-btn");
const checkBtn = document.getElementById("check-btn");
const restartBtn = document.getElementById("restart-btn");

const p1Input = document.getElementById("p1-name");
const p2Input = document.getElementById("p2-name");
const secretInput = document.getElementById("custom-secret");
const userInput = document.getElementById("user-input");

const turnIndicator = document.getElementById("turn-indicator");
const p1Badge = document.getElementById("p1-badge");
const p2Badge = document.getElementById("p2-badge");
const hintMessage = document.getElementById("hint-message");

startBtn.addEventListener("click", () => {
    const p1 = p1Input.value.trim();
    const p2 = p2Input.value.trim();
    const num = Number(secretInput.value.trim());

    if (!p1 || !p2 || isNaN(num) || num < 1 || num > 100) {
        alert("⚠️ Oye! Dono players ke naam aur 1 se 100 ke beech ka sahi number bhariye!");
        return;
    }

    player1.name = p1;
    player2.name = p2;
    secret = num;
    activePlayer = player1;

    setupScreen.classList.add("hidden");
    gameplayScreen.classList.remove("hidden");
    
    syncInterfaceState();
});

function runGameCycle() {
    const rawVal = userInput.value.trim();
    if (rawVal === "") return;

    const guess = Number(rawVal);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        renderFeedback("⚠️ Valid number likho bhai (1-100)!", "status-low");
        return;
    }

    activePlayer.attempts++;
    
    if (guess > secret) {
        renderFeedback(`❌ ${activePlayer.name}: TOO HIGH !! Niche aao.`, "status-high");
        toggleActivePlayer();
    } else if (guess < secret) {
        renderFeedback(`❌ ${activePlayer.name}: TOO LOW !! Upar jao.`, "status-low");
        toggleActivePlayer();
    } else {
        renderFeedback(`🎉 Bawal! ${activePlayer.name} ne phod diya! Total Attempts: ${activePlayer.attempts}`, "status-success");
        turnIndicator.innerHTML = `👑 ${activePlayer.name} Wins! 👑`;
        haltGameplayInteractivity();
    }

    userInput.value = "";
    userInput.focus();
}

function toggleActivePlayer() {
    activePlayer = (activePlayer === player1) ? player2 : player1;
    syncInterfaceState();
}

function syncInterfaceState() {
    turnIndicator.innerText = `👉 ${activePlayer.name}'s Turn`;
    p1Badge.innerHTML = `<span class="p-name">${player1.name}</span> <span class="p-count">${player1.attempts} Att.</span>`;
    p2Badge.innerHTML = `<span class="p-name">${player2.name}</span> <span class="p-count">${player2.attempts} Att.</span>`;
    
    if (activePlayer === player1) {
        p1Badge.classList.add("active");
        p2Badge.classList.remove("active");
    } else {
        p2Badge.classList.add("active");
        p1Badge.classList.remove("active");
    }
}

function renderFeedback(msg, cssClass) {
    hintMessage.innerText = msg;
    hintMessage.className = `status-msg ${cssClass}`;
}

function haltGameplayInteractivity() {
    userInput.disabled = true;
    checkBtn.disabled = true;
    p1Badge.classList.remove("active");
    p2Badge.classList.remove("active");
    restartBtn.classList.remove("hidden");
}

checkBtn.addEventListener("click", runGameCycle);
userInput.addEventListener("keydown", (e) => { if (e.key === "Enter") runGameCycle(); });

restartBtn.addEventListener("click", () => {
    player1.attempts = 0;
    player2.attempts = 0;
    userInput.disabled = false;
    checkBtn.disabled = false;
    secretInput.value = "";
    userInput.value = "";
    
    restartBtn.classList.add("hidden");
    gameplayScreen.classList.add("hidden");
    setupScreen.classList.remove("hidden");
});