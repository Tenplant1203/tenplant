const dialog = document.querySelector<HTMLDialogElement>("#dog-lightbox");
const lightboxImage = document.querySelector<HTMLImageElement>(
  "#dog-lightbox-image",
);

const dogThumbnails = document.querySelectorAll<HTMLImageElement>(
  "[data-dog-image] img",
);

dogThumbnails.forEach((image) => {
  const showImage = () => image.classList.add("opacity-100");

  if (image.complete) {
    requestAnimationFrame(showImage);
  } else {
    image.addEventListener("load", showImage, { once: true });
  }
});

if (dialog && lightboxImage) {
  document
    .querySelectorAll<HTMLButtonElement>("[data-dog-image]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        lightboxImage.src = button.dataset.fullSrc ?? "";
        lightboxImage.alt = button.dataset.alt ?? "";
        dialog.showModal();
      });
    });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}
