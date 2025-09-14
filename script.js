document.getElementById('year').textContent = new Date().getFullYear();

// Example form submit handler (no backend):
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for your message!');
});
