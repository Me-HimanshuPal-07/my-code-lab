const buggyDeleteBtn = document.querySelector("#buggy-delete-btn");

// 🎥 getElementsByClassName returns a LIVE mirror of the DOM
const boxesLive = document.getElementsByClassName("box");

buggyDeleteBtn.addEventListener("click", () => {
  console.log("--- STARTING BUGGY DELETE (HTMLCollection) ---");
  console.log("Initial Length:", boxesLive.length);
  
  // 🪲 THE BUG CODE: Forward loop elements ko left shift karwata hai, jisse loops jump ho jate hain
  for (let i = 0; i < boxesLive.length; i++) {
    console.log(`Deleting index ${i}:`, boxesLive[i].textContent);
    boxesLive[i].remove();
  }

  /*// ==========================================
  // 🛠️ NATIVE ALTERNATIVE FIXES (Uncomment to test)
  // ==========================================
  
  // ✅ FIX 1: Reverse Loop Strategy (Peeche se loop chalana)
  for (let i = boxesLive.length - 1; i >= 0; i--) {
    boxesLive[i].remove();
  }
  
  // ✅ FIX 2: No-Increment Strategy (Hamesha Index 0 ko target karna)
  while(boxesLive.length > 0) {
    boxesLive[0].remove();
  }
  */
  
  console.log("Remaining items on screen after execution:", boxesLive.length);
  console.log("-----------------------------------------------");
});