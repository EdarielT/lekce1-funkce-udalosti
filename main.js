// tady je místo pro náš program

let vysledek = document.querySelector("#vysledek");
/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */


function secti(a, b) {
  vysledek.innerHTML = a + b;
}


/**
 * Upozorní uživatele při spuštění.
 */

let ctverecek = document.querySelector('.ctverecek');

function upozorni() {
  ctverecek.innerHTML = "Gratulace, právě jsi spustila tuto funkci!";
  ctverecek.style.width = 'max-content';
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  alert("Gratulace, právě jsi spustila tuto funkci!");
}


let zmenaBarvy = () => {
  ctverecek.style.backgroundColor = 'green';
}
