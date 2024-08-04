const keyBoard = document.getElementById("keyboard");
keyBoard.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT" && e.target.type === "button") {
    if (e.target.classList.contains("backspace")) {
      system.input.value = system.input.value.slice(0, -1);
    } else if (e.target.classList.contains("spacebar")) {
      system.input.value += " ";
    } else if (e.target.classList.contains("clear")) {
      system.input.value = "";
    } else {
      system.input.value += e.target.value;
    }
  }
});
