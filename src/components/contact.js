import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // 1️⃣ Send message to Admin (your email, fixed in template)
    emailjs
      .sendForm(
        "service_2bx51ko",      // Your EmailJS Service ID
        "template_2r5n18j",     // Admin Template (to YOUR email)
        form.current,
        "eCkPlgD22Tn-TT-vg"     // Your Public Key
      )
      .then(
        (result) => {
          console.log("Message sent to admin ✅", result.text);

          // 2️⃣ Send auto-reply to User (dynamic email from form)
          emailjs
            .send(
              "service_2bx51ko",   // Same Service ID
              "template_ynumypo",  // User Template
              {
                to_name: form.current["name"].value,
                user_subject: form.current["subject"].value,
                user_message: form.current["message"].value,
                to_email: form.current["email"].value,  // 👈 KEY PART
                from_name: "Bhushan",
              },
              "eCkPlgD22Tn-TT-vg"
            )
            .then(
              (res) => {
                console.log("Auto-reply sent ✅", res.text);
                alert("✅ Message sent! Check your email for confirmation.");
                form.current.reset();
              },
              (err) => {
                console.error("Error sending auto-reply ❌", err.text);
              }
            );
        },
        (error) => {
          console.error("Error sending to admin ❌", error.text);
          alert("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <>
      <style>{`
        .contact-section {
          background: linear-gradient(135deg, #f9f9ff, #f1e8ff);
          padding: 80px 20px;
          text-align: center;
        }
        .contact-container {
          max-width: 700px;
          margin: 0 auto;
          background: white;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0px 6px 20px rgba(0,0,0,0.1);
        }
        .contact-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #333;
        }
        .contact-description {
          font-size: 16px;
          color: #555;
          margin-bottom: 40px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .contact-form input,
        .contact-form textarea {
          flex: 1;
          padding: 14px 18px;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-size: 16px;
        }
        .contact-form textarea {
          resize: none;
          height: 120px;
        }
        .contact-btn {
          padding: 14px;
          background: #9929fb;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
        }
        .contact-btn:hover {
          background: #7a20c2;
        }
      `}</style>

      <div className="contact-section" id="contact">
        <div className="contact-container">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            Have a project in mind or just want to say hello? Fill out the form
            below and you'll receive a confirmation email immediately.
          </p>

          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="tel" name="phone" placeholder="Your Phone" />
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
