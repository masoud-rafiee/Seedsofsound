/*
 * Custom JavaScript to enhance interactivity on the Seeds of Sound website.
 * Currently handles:
 * - Closing the mobile navigation after selecting a link.
 * - A simple lightbox for viewing gallery images.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Close the mobile nav menu when a link is clicked
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navToggle && navToggle.checked) {
        navToggle.checked = false;
      }
    });
  });

  // Image lightbox functionality
  const galleryImages = document.querySelectorAll('.gallery-item img');
  if (galleryImages.length > 0) {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.background = 'rgba(0,0,0,0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.padding = '1rem';
    lightbox.style.zIndex = 10000;
    lightbox.style.opacity = 0;
    lightbox.style.transition = 'opacity 0.3s ease';
    lightbox.style.pointerEvents = 'none';
    const img = document.createElement('img');
    img.style.maxWidth = '90%';
    img.style.maxHeight = '80%';
    img.style.borderRadius = '8px';
    img.style.boxShadow = '0 2px 8px rgba(0,0,0,0.5)';
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);
    // Function to open lightbox
    const openLightbox = (src) => {
      img.src = src;
      lightbox.style.opacity = 1;
      lightbox.style.pointerEvents = 'auto';
    };
    // Function to close lightbox
    const closeLightbox = () => {
      lightbox.style.opacity = 0;
      lightbox.style.pointerEvents = 'none';
    };
    // Add click event to images
    galleryImages.forEach((image) => {
      image.addEventListener('click', () => {
        openLightbox(image.src);
      });
    });
    // Close lightbox when clicking outside image or pressing ESC
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });
  }
});