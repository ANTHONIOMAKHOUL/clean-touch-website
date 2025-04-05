document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevents the default form submission behavior

  const name = document.getElementsByName('name')[0].value;
  const email = document.getElementsByName('email')[0].value;
  const phone = document.getElementsByName('phone')[0].value;
  const message = document.getElementsByName('message')[0].value;

  if (name && email && phone && message) {
      // Feedback alert after form submission
      alert(`Thank you for reaching out, ${name}! We will get back to you soon.`);
      // Reset form after successful submission
      document.getElementById('contact-form').reset();
  } else {
      alert("Please fill out all fields.");
  }
});
