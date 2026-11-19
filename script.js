
const btnTheme = document.querySelector("#bouttonthème");

function changerTheme() {
  document.body.classList.toggle("bright");

  if (document.body.classList.contains("bright")) {
    btnTheme.textContent = "☽";
  } else {
    btnTheme.textContent = "☼";
  }
}

btnTheme.addEventListener("click", changerTheme);


const array = [1, 2, 3, 4, 5, 6];
const chunks = _.chunk(array, 2);
console.log(chunks); // [[1, 2], [3, 4 ], [5,6]]