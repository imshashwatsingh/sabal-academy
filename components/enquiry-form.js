class EnquiryForm extends HTMLElement {
  connectedCallback() {
    // Define styles for notifications within this component or globally if we want,
    // but injecting it if missing is fine.
    // add formspree endpoint 
    this.innerHTML = `
        <form class="enquiry-form" id="enquiryForm" action="" method="POST">
          <div class="form__group">
            <label for="name" class="form__label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form__input"
              placeholder="Your full name"
              required
            />
          </div>

          <div class="form__group">
            <label for="email" class="form__label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form__input"
              placeholder="your@email.com"
              required
            />
          </div>

          <div class="form__group">
            <label for="phone" class="form__label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              class="form__input"
              placeholder="Your phone number"
              required
            />
          </div>

          <div class="form__group">
            <label for="course" class="form__label">Interested Course</label>
            <select id="course" name="course" class="form__select" required>
              <option value="">Select a course</option>
              <option value="jee">JEE Main & Advanced</option>
              <option value="neet">NEET Preparation</option>
              <option value="foundation">Foundation Programme</option>
              <option value="cuet">CUET</option>
              <option value="olympiad">
                Olympiad (JSTSE, NTSE, KVPY, etc)
              </option>
              <option value="school-integration-programme">
                School Integration Programme
              </option>
              <option value="others">Others</option>
            </select>
          </div>

          <div class="form__group">
            <label for="message" class="form__label">Message</label>
            <textarea
              id="message"
              name="message"
              class="form__textarea"
              placeholder="Tell us about your educational goals..."
              rows="4"
            ></textarea>
          </div>

          <button type="submit" class="btn btn--primary btn--lg">
            Send Enquiry
          </button>
        </form>
      `;

    this.initScripts();
  }

  showNotification(text, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification--${type}`;
    notification.textContent = text;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === "success" ? "#2FA084" : type === "error" ? "#d32f2f" : "#1F6F5F"};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
        max-width: 400px;
    `;

    if (!document.querySelector("style[data-notification]")) {
      const style = document.createElement("style");
      style.setAttribute("data-notification", "true");
      style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100px);
                }
            }
        `;
      document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease-out";
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 4000);
  }

  initScripts() {
    const enquiryForm = this.querySelector("#enquiryForm");
    if (!enquiryForm) return;

    enquiryForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(enquiryForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const course = formData.get("course");

      if (!name || !email || !phone || !course) {
        this.showNotification("Please fill in all required fields", "error");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        this.showNotification("Please enter a valid email address", "error");
        return;
      }

      const phoneRegex = /^[0-9\-\+\(\)\s]+$/;
      if (!phoneRegex.test(phone) || phone.replace(/\D/g, "").length < 10) {
        this.showNotification("Please enter a valid phone number", "error");
        return;
      }

      const submitBtn = enquiryForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      try {
        const response = await fetch(enquiryForm.action, {
          method: "POST",
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          this.showNotification(
            "Thank you for your enquiry! We will contact you soon.",
            "success"
          );
          enquiryForm.reset();
        } else {
          this.showNotification("Something went wrong! Please try again.", "error");
        }
      } catch (error) {
        console.error("Submission error:", error);
        this.showNotification("Network error. Please check your connection.", "error");
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }
}

customElements.define("sabal-enquiry-form", EnquiryForm);
