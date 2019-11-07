let brand = document.getElementsByClassName("navbar-brand");
let letters = ['П', 'И', 'К', 'Ч', 'И', ' ', 'Н', 'Е', 'Т', '!'];
let counter = 0;
let animation = setInterval(showPart1, 200);

function showPart1() {
  brand[0].innerHTML = counter % 2 == 1 ? '_' : '&zwnj;';
  counter++;
  if (counter >= 3) {
    counter = 0;
    clearInterval(animation);
    animation = setInterval(showPart2, 200);
  }
}
function showPart2() {
  brand[0].innerHTML = brand[0].innerHTML.slice(0, -1);
  brand[0].innerHTML += letters[counter];
  brand[0].innerHTML += '_';
  counter++;
  if (counter >= letters.length) {
    clearInterval(animation);
    setTimeout(() => brand[0].innerHTML = brand[0].innerHTML.slice(0, -1), 300);
  }
}
