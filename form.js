document.addEventListener("DOMContentLoaded", function () {
  function SavedName() {
    const savedName = localStorage.getItem("name");
    const savedNameDiv = document.getElementById("nameDiv");
    if (savedName) {
      savedNameDiv.textContent = `Nome salvato: ${savedName}`;
    } else {
      savedNameDiv.textContent = "Nessun nome salvato";
    }
  }

  function save() {
    const nameInput = document.getElementById("Name").value;
    if (nameInput) {
      localStorage.setItem("name", nameInput);
      SavedName();
    }
  }

  function remove() {
    localStorage.removeItem("name");
    SavedName();
  }

  SavedName();

  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    save();
    this.reset();
  };

  document.getElementById("reset").onclick = function (event) {
    event.preventDefault();
    remove();
  };

  let counter = parseInt(sessionStorage.getItem("counter"));
  if (isNaN(counter)) {
    counter = 0;
  }

  const counterElement = document.getElementById("counter");

  function startCounter() {
    counter++;
    counterElement.textContent = counter;
    sessionStorage.setItem("counter", counter);
  }

  setInterval(startCounter, 1000);

  counterElement.textContent = counter;
});
