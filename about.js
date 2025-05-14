// Theme toggle
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});

// Popup functionality
const images = document.querySelectorAll(".gallery img");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const downloadBtn = document.getElementById("downloadBtn");
const closePopup = document.getElementById("closePopup");
const shareBtn = document.getElementById("shareBtn");

images.forEach(img => {
  img.addEventListener("click", () => {
    popupImage.src = img.src;
    downloadBtn.href = img.src;
    popup.classList.remove("hidden");
  });
});

closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Share button
shareBtn.addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Photo',
        text: 'Check out this photo!',
        url: popupImage.src
      });
    } catch (err) {
      alert("Sharing failed.");
    }
  } else {
    alert("Sharing not supported in this browser.");
  }
});
