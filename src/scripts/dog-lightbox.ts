const dialog = document.querySelector<HTMLDialogElement>("#dog-lightbox");
const lightboxImage = document.querySelector<HTMLImageElement>(
  "#dog-lightbox-image",
);

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
