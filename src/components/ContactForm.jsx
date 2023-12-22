import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Let&apos;s talk about everything!</h1>
        <p>
          Don&apos;t like forms? Send me an{" "}
          <a href="mailto:sergio.enrique.segp@gmail.com">email</a>. 👋
          <br />
          <br />
          <h3>Or find me on:</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a key={index} href={social.url}>
                <img src={`/socials/${social.icon}`} alt="" />
              </a>
            ))}
          </div>
        </p>
        <div>
          <p className="contact-links">
            <MdEmail />
            sergio.enrique.segp@gmail.com
          </p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />
            +57 318 475 6135
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
            Colombia
          </p>
          <br />
        </div>
      </div>
      <div className="contact-form">
        <form name="contact" netlify>
        <a href="mailto:sergio.enrique.segp@gmail.com" className="contact-option">
            <h1>
              <MdEmail />
              &nbsp;SEND ME AN EMAIL
            </h1>
          </a>
          <a href="tel:+573184756135" className="contact-option">
            <h1>
              <FaPhoneAlt />
              &nbsp;CALL ME
            </h1>
          </a>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
