// --- 1. SLIDE-IN SCROLL ANIMATIONS ---
// Using Intersection Observer API to trigger animations when elements enter viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: unobserve after showing once so it doesn't fade out again
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.1, // Trigger when 10% of the element is visible
  rootMargin: "0px 0px -50px 0px" // Slight offset so it triggers a bit earlier
});

// Target all elements with slide-up or slide-left classes
document.querySelectorAll('.slide-up, .slide-left').forEach(el => {
  observer.observe(el);
});


// --- 2. MODAL (LIGHTBOX) FUNCTIONALITY ---
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");

// Function to open the modal
function openModal(imageSrc, captionText) {
  modal.classList.add("show");
  modalImg.src = imageSrc;
  modalCaption.innerHTML = captionText;
  
  // Prevent background scrolling
  document.body.style.overflow = "hidden"; 
}

// Function to close the modal
function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
  
  // Clear the image source after the fade-out animation (300ms)
  setTimeout(() => {
    modalImg.src = "";
  }, 300);
}

// Close modal when clicking on the dark background
modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Close modal when pressing the "Escape" key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});