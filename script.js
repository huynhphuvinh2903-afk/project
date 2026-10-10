function highlightImage(event) {
  event.currentTarget.closest(".gallery-item").classList.add("is-active");
}
function unhighlightImage(event) {
  event.currentTarget.closest(".gallery-item").classList.remove("is-active");
}
function makeImagesKeyboardAccessible() {
  console.log("Page load event fired: adding tabindex to gallery images.");
  const images = document.querySelectorAll(".gallery-item img");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log(`Added tabindex to image ${i + 1}.`);
    images[i].addEventListener("mouseover", highlightImage);
    images[i].addEventListener("mouseleave", unhighlightImage);
    images[i].addEventListener("focus", highlightImage);
    images[i].addEventListener("blur", unhighlightImage);
  }
}
window.addEventListener("load", makeImagesKeyboardAccessible);
