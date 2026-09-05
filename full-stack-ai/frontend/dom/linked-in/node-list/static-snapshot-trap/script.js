const fixedDeleteBtn = document.querySelector("#fixed-delete-btn");

fixedDeleteBtn.addEventListener("click", () => {
  // 📸 querySelectorAll captures a STATIC memory snapshot (frozen positions)
  const boxesStatic = document.querySelectorAll(".box");
  
  // 🎥 Parallel Live tracking link strictly for zero-cost automated status sync
  const boxesLiveStatus = document.getElementsByClassName("box");

  console.log("--- STARTING FIXED DELETE (NodeList) ---");

  // Loop runs seamlessly without left-shifting side effects
  // 'dabba' parameter is mandatory to catch dynamic arguments passed by the engine
  boxesStatic.forEach((dabba) => {
    dabba.remove();
  });

  console.log("UI cleared completely!");
  
  // 🚨 THE DETACHED DOM SNAPSHOT TRAP DEMO:
  // This will STILL show length 4 in console because it's a static snapshot!
  console.log("boxStatic (Static Snapshot Trap):", boxesStatic); 
  
  // 🏆 THE MASTERSTROKE OPTIMIZATION DEMO:
  // This instantly logs Empty [] (Length 0) via browser native binding with zero JS loops!
  console.log("boxLiveStatus (Optimized Live Tracker):", boxesLiveStatus); 
  
  console.log("-----------------------------------------");
});