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
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
}

let ctverecek = document.querySelector('.ctverecek');

let zmenaBarvy = () => {
  ctverecek.style.backgroundColor = 'green';
}
