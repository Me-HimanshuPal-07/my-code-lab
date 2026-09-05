// Nikatam Games Platform Master Storage System
document.addEventListener("DOMContentLoaded", () => {
    syncUserProfileLifeCycle();
    attachProfileTriggers();
});

function syncUserProfileLifeCycle() {
    let savedName = localStorage.getItem("nikatam_username");
    let savedXP = localStorage.getItem("nikatam_xp_coins") || "150"; // Start bonus tracking tokens

    if (!savedName) {
        savedName = prompt("Nikatam Platform par aapka swagat hai! Apna Gamer Name likho:", "ProPlayer");
        if (!savedName || savedName.trim() === "") savedName = "Gamer_Guest";
        localStorage.setItem("nikatam_username", savedName);
    }

    // Sync elements rendering onto the dashboard layout
    document.getElementById("user-name-display").innerText = savedName;
    document.getElementById("platform-coins").innerText = `🪙 ${savedXP} XP`;
}

function attachProfileTriggers() {
    const editBtn = document.getElementById("edit-profile-btn");
    if (editBtn) {
        editBtn.addEventListener("click", () => {
            let newName = prompt("Naya Username enter karein:", localStorage.getItem("nikatam_username"));
            if (newName && newName.trim() !== "") {
                localStorage.setItem("nikatam_username", newName.trim());
                document.getElementById("user-name-display").innerText = newName.trim();
            }
        });
    }

    // Add visual micro triggers on filter click selections
    const tabs = document.querySelectorAll(".filter-tabs .tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
        });
    });
}