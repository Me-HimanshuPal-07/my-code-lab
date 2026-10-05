const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");
// let flag = false;

// btn.addEventListener("click", () =>{
//     if(!flag){
//         bulb.style.backgroundColor = "yellow";
//     btn.textContent = "Off";
//     flag = true;
//     }
//     else{
//         bulb.style.backgroundColor = "rgb(98, 95, 95)";
//     btn.textContent = "On";
//     flag = false;
//     }
// });

// second way



btn.addEventListener("click", () => {
  const isOn = bulb.classList.toggle("bulb-on");
  btn.classList.toggle("btn-off", isOn);
  btn.textContent = isOn ? "Off" : "On";
});