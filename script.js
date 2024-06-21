const containerEl = document.querySelector(`.container`);
const gridSizeButton = document.querySelector(`.grid-size-button`);

let newDivEl = ``;
let gridSize = 16;

function createGrid(size) {
  if (gridSize <= 100) {
    containerEl.innerHTML = ``;

    for (i = 0; i < size * size; i++) {
      newDivEl = document.createElement(`div`);
      containerEl.appendChild(newDivEl);
      newDivEl.classList.add(`box`);
      const boxSize = String(960 / size);
      newDivEl.style.width = boxSize + `px`;
      newDivEl.style.height = boxSize + `px`;
    }
    const boxEl = document.querySelectorAll(`.box`);

    for (i = 0; i < boxEl.length; i++) {
      boxEl[i].addEventListener(`mouseenter`, function () {
        this.classList.add(`hover`);
      });
    }
  }
}

createGrid(gridSize);

gridSizeButton.addEventListener(`click`, function () {
  gridSize = Number(
    prompt(`What dimensions do you want your grid to be? (Maximum of 100)`)
  );
  createGrid(gridSize);
});
