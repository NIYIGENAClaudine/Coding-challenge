document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const details = item.querySelector(".details");
      details.style.display = "block";
    });

    item.addEventListener("mouseout", () => {
      const details = item.querySelector(".details");
      details.style.display = "none";
    });
  });
});
