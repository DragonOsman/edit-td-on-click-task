"use strict";

const table = document.getElementById("bagua-table");

/* your code */
table.addEventListener("click", event => {
  const elem = event.target;
  if (!elem.closest("td")) {
    return;
  }

  const tdCoords = elem.getBoundingClientRect();
  const originalTDContent = elem.innerHTML;

  const textArea = document.createElement("textarea");
  textArea.style.width = `${elem.clientWidth}px`;
  textArea.style.height = `${elem.clientHeight}px`;
  textArea.style.top = `${tdCoords.top}px`;
  textArea.style.left = `${tdCoords.left}px`;
  textArea.value = elem.innerHTML;
  elem.innerHTML = "";
  elem.appendChild(textArea);
  textArea.focus();

  const okButton = document.createElement("button");
  okButton.textContent = "OK";
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "CANCEL";

  okButton.addEventListener("click", () => {
    elem.innerHTML = textArea.value;
  });

  cancelButton.addEventListener("click", () => {
    elem.innerHTML = originalTDContent;
    textArea.remove();
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "controls";
  buttonContainer.style.top = `${tdCoords.bottom}px`;
  buttonContainer.style.left = `${tdCoords.left}px`;
  buttonContainer.appendChild(okButton);
  okButton.insertAdjacentElement("afterend", cancelButton);

  elem.insertAdjacentElement("beforeend", buttonContainer);
});
