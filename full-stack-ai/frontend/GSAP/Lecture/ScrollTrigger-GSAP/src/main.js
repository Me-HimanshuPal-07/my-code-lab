import ScrollTrigger from 'gsap/ScrollTrigger';
import './style.css'
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    x: 600,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".box",
        start: "center 60%",
        end: "center 30%",
        scrub: true,
        markers: true,
        pin: true

    }
});