function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
      strings: ["Hope creates new worlds from improbabilities"],
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);