import './style.css'
import { gsap } from "gsap";
//=== LODER ==/
const obj = {
  value: 0,
};
const counter = document.querySelector(".loder-count h2");
gsap.to(obj, {
  value: 100,
  duration: 2,
  ease: "power3.Out",
  onUpdate: ()=>{
    counter.textContent = `${Math.round(obj.value)}%`;
  },
  onComplete: ()=>{
    gsap.to(counter, {
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      onComplete: ()=>{
            tl.play();
      },
    })

  }
});
//=== START ==//
const tl = gsap.timeline({paused: true})
tl.to(".loder", {
  yPercent: -100,
  duration: 1.2,
  ease: "expo.out"
}).from(".hero-bg img", {
  scale: 2,
  duration: 1.23,
  ease: "expo.out",
},"-=1.35");