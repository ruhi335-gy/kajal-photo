const passwordInput = document.getElementById('passwordInput');
const submitBtn = document.getElementById('submitBtn');
const bgMusic = document.getElementById('bgMusic');
const gallerySection = document.getElementById('gallerySection');
const pageFooter = document.getElementById('pageFooter');
const fullscreenMessage = document.getElementById('fullscreenMessage');
const openMessageBtn = document.getElementById('openMessageBtn');
const closePopupBtn = document.getElementById('closePopupBtn');

const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const downloadImageBtn = document.getElementById('downloadImageBtn');
const closeImageModal = document.getElementById('closeImageModal');

submitBtn.addEventListener('click', () => {
  const password = passwordInput.value.trim();
  if (password === 'kajal') {
    document.getElementById('passwordForm').style.display = 'none';
    gallerySection.classList.remove('hidden');
    pageFooter.classList.remove('hidden');

    // Play background music in loop
    bgMusic.play().catch(err => {
      console.log('Music playback error:', err);
    });
  } else {
    alert('❌ Wrong password!');
    passwordInput.value = '';
  }
});


// Footer popup message
openMessageBtn.addEventListener('click', () => {
  fullscreenMessage.classList.add('show');
});
closePopupBtn.addEventListener('click', () => {
  fullscreenMessage.classList.remove('show');
});

// Image modal popup
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.src;
    imageModal.classList.add('show');
  });
});

// Download image
downloadImageBtn.addEventListener('click', () => {
  const a = document.createElement('a');
  a.href = modalImage.src;
  a.download = 'downloaded-image.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

// Close image modal
closeImageModal.addEventListener('click', () => {
  imageModal.classList.remove('show');
});
