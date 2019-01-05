import { Cycler } from "react-text-scrambler";
import Link from "next/link";
import "../scss/style.scss";

class Contact extends React.Component {
  render() {
    const strings = [
      "Front End Developer",
      "Digital Nomad",
      "JavaScript Enthusiast",
      "Web Consultant"
    ];

    return (
      <>
        <section className="hero">
          <img
            className="hero__img"
            src="/static/me5.jpg"
            alt="Profile Image"
          />
          <h1 className="hero__title">Contact</h1>
          <h2 className="hero__subtitle">
            <Cycler duration={4000} strings={strings} typewriter />
          </h2>
          <Link href="/">
            <a>
              <img
                className="hero__icon"
                src="/static/001-pdf.png"
                alt="Resume Icon"
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/william-fang-1a4306a1/">
            <a target="_blank">
              <img
                className="hero__icon"
                src="/static/002-linkedin.png"
                alt="Linkedin Icon"
              />
            </a>
          </Link>
          <Link href="https://twitter.com/hiwillfang">
            <a target="_blank">
              <img
                className="hero__icon"
                src="/static/003-twitter.png"
                alt="Twitter Icon"
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com/hiwillfang/">
            <a target="_blank">
              <img
                className="hero__icon"
                src="/static/004-instagram.png"
                alt="Instagram Icon"
              />
            </a>
          </Link>
        </section>
        <section className="content">
          <div className="container-centered">
            <p>
              Hello again! I hope you enjoyed your Will Fang journey! Pretty
              impressive right? If you have an amazing opportunity that you feel
              I would be a great fit for or if you're in the market to network
              or bounce ideas off of each other, feel free to drop me a line.
            </p>
          </div>
        </section>
        <section className="contact content">
          <div className="container-left">
            <h2 className="title-secondary">Email : will@hiwillfang.com</h2>
            <h2 className="title-secondary">Phone : (407) 493-9411</h2>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
