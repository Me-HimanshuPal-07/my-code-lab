import ScrollTrigger from 'gsap/ScrollTrigger';
import './style.css'
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

gsap.set(".scroll-element img", {
  clipPath: "polygon(25% 26%, 79% 26%, 80% 77%, 25% 78%)",
  scale: 1.5,
});

gsap.to(".scroll-element img", {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  scale: 1,
  scrollTrigger: {
    trigger: ".middle-hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
    
  }
});