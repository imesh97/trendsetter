/*

TRENDSETTER: WEBSITE ASSIGNMENT - JS
Imesh Nimsitha
CS 2033

*/

// GLOBAL CONST: ScrollFire booleans (for triggering scrollfires once)
var SCROLLFIRE1 = false;
var SCROLLFIRE2 = false;

/**
 * FUNCTION: ScrollFire
 */
function scroll() {
  const t = window.scrollY; // Track scroll and section positions
  const team = document.getElementById("team");
  const products = document.getElementById("products");

  if (!SCROLLFIRE1 && t > team.offsetTop - 250) {
    // ScrollFire for team heading bounce
    SCROLLFIRE1 = true;

    const hTeam = document.getElementById("hTeam");
    hTeam.classList.add("animate-bounce");
  }

  if (!SCROLLFIRE2 && t > products.offsetTop - 250) {
    // ScrollFire for product heading bounce
    SCROLLFIRE2 = true;

    const hProducts = document.getElementById("hProducts");
    hProducts.classList.add("animate-bounce");
  }
}

/**
 * FUNCTION: Back to top
 */
function backToTop() {
  const elem = document.getElementById("backToTopBtn");
  elem.classList.remove("animate-spin-elastic"); // Animate elastic spin for back to top button
  void elem.offsetWidth;
  elem.classList.add("animate-spin-elastic");

  window.scrollTo(0, 0);
}

/**
 * FUNCTION: Daily updates for customer service status
 */
function updateHours() {
  const date = new Date(); // Get current date
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = weekday[date.getDay()];

  const serviceStatus = document.getElementById("serviceStatus"); // Display service hours based on day
  if (day == "Sunday") {
    serviceStatus.innerHTML = "We do not operate on Sundays.";
  } else if (day == "Monday") {
    serviceStatus.innerHTML =
      "We operate on every Monday from<br />9:00 a.m. to 5:00 p.m.";
  } else if (day == "Tuesday") {
    serviceStatus.innerHTML =
      "We operate on every Tuesday from<br />9:00 a.m. to 5:00 p.m.";
  } else if (day == "Wednesday") {
    serviceStatus.innerHTML =
      "We operate on every Wednesday from<br />9:00 a.m. to 5:00 p.m.";
  } else if (day == "Thursday") {
    serviceStatus.innerHTML =
      "We operate on every Thursday from<br />9:00 a.m. to 5:00 p.m.";
  } else if (day == "Friday") {
    serviceStatus.innerHTML =
      "We operate on every Friday from<br />9:00 a.m. to 4:00 p.m.";
  } else if (day == "Saturday") {
    serviceStatus.innerHTML =
      "We operate on every Saturday from<br />10:00 a.m. to 7:00 p.m.";
  }
}

/**
 * FUNCTION: Check name (contact form validation)
 */
function checkName() {
  const inputName = document.getElementById("inputName"); // Get name input
  const name = inputName.value;

  if (name.length < 4 || /\d/.test(name)) {
    // If length is less than 4 or invalid chars -> invalid
    inputName.classList.remove("is-valid");
    inputName.classList.add("is-invalid");
  } else {
    inputName.classList.remove("is-invalid");
    inputName.classList.add("is-valid");
  }
}

/**
 * FUNCTION: Check phone number (contact form validation)
 */
function checkPhone() {
  const inputPhone = document.getElementById("inputPhone"); // Get phone input
  const phone = inputPhone.value;

  if (/^\d{3}?[\s]\d{3}[\s]\d{4}$/.test(phone)) {
    // If valid phone format -> invalid
    inputPhone.classList.remove("is-invalid");
    inputPhone.classList.add("is-valid");
  } else {
    inputPhone.classList.remove("is-valid");
    inputPhone.classList.add("is-invalid");
  }
}

/**
 * FUNCTION: Check reason (contact form validation)
 */
function checkReason() {
  const inputReason = document.getElementById("inputReason"); // Get reason input
  const reason = inputReason.value;
  const productIdBox = document.getElementById("productIdBox");

  if (reason == 3) {
    // If reason is "Product ID" -> show product ID textbox
    productIdBox.classList.remove("hidden");
    productIdBox.classList.add("visible");
  } else {
    productIdBox.classList.remove("visible");
    productIdBox.classList.add("hidden");
  }
}

/**
 * FUNCTION: Check product ID (contact form validation)
 */
function checkProductId() {
  const inputProductId = document.getElementById("inputProductId"); // Get product ID input
  const productId = inputProductId.value;
  const idList = ["TS-CARD02", "TS-JACK05", "TS-SUNG06", "TS-EARR01"];

  if (idList.includes(productId)) {
    // If valid product ID -> valid
    inputProductId.classList.remove("is-invalid");
    inputProductId.classList.add("is-valid");
  } else {
    inputProductId.classList.remove("is-valid");
    inputProductId.classList.add("is-invalid");
  }
}

/**
 * FUNCTION: Check message (contact form validation)
 */
function checkMessage() {
  const inputMessage = document.getElementById("inputMessage"); // Get message input
  const message = inputMessage.value;

  if (message.length < 10 || message.length > 30) {
    // If length is less than 10 or greater than 30 -> invalid
    inputMessage.classList.remove("is-valid");
    inputMessage.classList.add("is-invalid");
  } else {
    inputMessage.classList.remove("is-invalid");
    inputMessage.classList.add("is-valid");
  }
}

/**
 * FUNCTION: Delay timer
 */
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time)); // Promise is used to set a timeout
}

/**
 * FUNCTION: Submit handler (contact form button)
 */
function submitMessage() {
  const arrow = document.getElementById("sendArrow"); // Get submit button icons
  const spinner = document.getElementById("sendSpinner");
  const spinnerIcon = document.getElementById("sendSpinnerIcon");

  arrow.classList.remove("visible"); // Display or hide each icon
  arrow.classList.add("hidden");
  spinner.classList.remove("hidden");
  spinner.classList.add("visible");
  spinnerIcon.classList.add("animate-spin");

  delay(2000).then(() => {
    // Delay animations for 2 seconds
    spinnerIcon.classList.remove("animate-spin");
    spinner.classList.remove("visible");
    spinner.classList.add("hidden");

    arrow.classList.remove("hidden");
    arrow.classList.add("visible");
  });
}
