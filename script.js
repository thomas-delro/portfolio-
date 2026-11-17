
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
