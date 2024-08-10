import styles from './HeroStyles.module.css';
import heroImg from '../../assets/gourav.jpeg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';

export default function Hero() {

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Gourav Kumar Behera
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://github.com/Gourav56-rgb" target="_blank">
            <img src={githubLight} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/gourav-kumar-behera-79a9b8228/" target="_blank">
            <img src={linkedinLight} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern web apps for commercial
          businesses.
        </p>
        <a href="https://drive.google.com/file/d/10S8N3fH1modUcU0ae1S6fl-OYlpheg8G/view?usp=drivesdk" target="_blank">
          <button>My Resume</button>
        </a>
      </div>
    </section>
  );
}


