const containerEl = document.querySelector(`.container`);

for (i = 0; i < 256; i++) {
  const newDivEl = document.createElement(`div`);
  containerEl.appendChild(newDivEl);
  newDivEl.classList.add(`box`);
}

const boxEl = document.querySelectorAll(`.box`);

for (i = 0; i < boxEl.length; i++) {
  boxEl[i].addEventListener(`mouseenter`, function () {
    this.classList.add(`hover`);
  });
}
