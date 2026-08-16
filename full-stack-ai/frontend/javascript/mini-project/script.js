const count = document.querySelector("span");
const incrementBtn = document.querySelector("#increment");
const resetBtn = document.querySelector("#reset");
const even = document.querySelector("#even");
const odd = document.querySelector("#odd");
const prime = document.querySelector("#prime");
let add = 0;
incrementBtn.addEventListener("click", () => {
  count.textContent = ++add;
  if (add % 2 === 0) {
    odd.classList.remove("active");
    even.classList.add("active");

    if (add === 2) {
      prime.classList.add("active");
    } else {
      prime.classList.remove("active");
    }
  } else {
    even.classList.remove("active");
    odd.classList.add("active");
    //Check Prime:
    if (add > 1) {
      let isPrime = true;
      //Loop only through odd divisors (3,5,7...) since primes > 2 are always odd,
      // and check only up to √n since factor pairs always include one ≤ √n
      for (let i = 3; i * i <= add; i += 2) {
        if (add % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        prime.classList.add("active");
      } else {
        prime.classList.remove("active");
      }
    } else {
      prime.classList.remove("active");
    }
  }
});
resetBtn.addEventListener("click", () => {
  add = 0;
  count.textContent = add;
  even.classList.remove("active");
  odd.classList.remove("active");
});
