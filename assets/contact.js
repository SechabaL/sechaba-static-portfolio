
// 1. Select the contact form and its elements
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const messageCount = document.getElementById("message-count");
const formStatus = document.getElementById("form-status");

// 2. Update the message character counter
messageInput.addEventListener("input", () => {
    const currentLength = messageInput.value.length;

    messageCount.textContent = `${currentLength} / 500`;
});

// 3. Handle form submission
contactForm.addEventListener("submit", (event) => {
    // Stop the browser's default form submission
    event.preventDefault();

    // Collect and clean the form values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value;
    const message = messageInput.value.trim();

    // Check that all required values are present
    if (!name || !email || !subject || !message) {
        formStatus.textContent = "Please complete all required fields.";
        formStatus.className = "text-sm text-red-600";
        return;
    }

    // Prepare the email content
    const emailSubject = encodeURIComponent(`Portfolio enquiry: ${subject}`);

    const emailBody = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Enquiry type: ${subject}\n\n` +
        `Message:\n${message}`
    );

    // Create the mailto link
    const mailtoLink =
        `mailto:1mohalesechaba@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Open the visitor's default email application
    window.location.href = mailtoLink;

    // Display submission instructions
    formStatus.textContent =
        "Your email application should open with your enquiry prepared. Please send the email to complete your submission.";

    formStatus.className = "text-sm text-[var(--color-secondary)]";

});
