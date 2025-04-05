document.getElementById('contact-form').addEventListener('submit', function(e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && phone && message) {
    alert("Thank you for reaching out! We will get back to you soon.");
  } else {
    e.preventDefault();
    alert("Please fill out all fields.");
  }
});
