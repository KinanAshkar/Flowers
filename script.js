const bodyElement = document.querySelector("body");

bodyElement.addEventListener("click", (e) => {
  const clickX = e.offsetX;
  const clickY = e.offsetY;
  const spanElement = document.createElement("span");
  spanElement.style.left = clickX + "px";
  spanElement.style.top = clickY + "px";
  const sizeElement = Math.random() * 100;
  spanElement.style.width = sizeElement + "px";
  spanElement.style.height = sizeElement + "px";
  bodyElement.appendChild(spanElement);
  setTimeout(() => {
    spanElement.remove();
  }, 3000);
});
