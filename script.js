function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let event = document.getElementById("event").value;

  let msg = `Booking:%0AName: ${name}%0ADate: ${date}%0AEvent: ${event}`;
  window.open("https://wa.me/919876543210?text=" + msg);
}
function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let event = document.getElementById("event").value;
  let message = document.getElementById("message").value;

  let msg = `Booking Details:%0A
Name: ${name}%0A
Date: ${date}%0A
Event: ${event}%0A
Message: ${message}`;

  window.open("https://wa.me/919876543210?text=" + msg);
}
function sendContact() {
  let name = document.getElementById("cname").value;
  let email = document.getElementById("cemail").value;
  let message = document.getElementById("cmessage").value;

  let msg = `Hello,%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  window.open("https://wa.me/919876543210?text=" + msg);
}
