const dialog = document.querySelector<HTMLDialogElement>("#dog-lightbox");
const lightboxImage = document.querySelector<HTMLImageElement>(
  "#dog-lightbox-image",
);

const dogThumbnails = document.querySelectorAll<HTMLImageElement>(
  "[data-dog-image] img",
);

dogThumbnails.forEach((image) => {
  const showImage = () => {
    image.classList.add("translate-y-0", "scale-100", "opacity-100");
  };

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
        lightboxImage.classList.remove("scale-100", "opacity-100");
        lightboxImage.classList.add("scale-95", "opacity-0");
        lightboxImage.src = button.dataset.fullSrc ?? "";
        lightboxImage.alt = button.dataset.alt ?? "";
        dialog.showModal();

        const showLightboxImage = () => {
          lightboxImage.classList.remove("scale-95", "opacity-0");
          lightboxImage.classList.add("scale-100", "opacity-100");
        };

        lightboxImage.addEventListener("load", showLightboxImage, {
          once: true,
        });

        if (lightboxImage.complete) {
          requestAnimationFrame(showLightboxImage);
        }
      });
    });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}
