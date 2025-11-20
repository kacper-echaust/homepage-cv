import css from "./AboutMe.module.scss";
import myPhoto from "../../images/kacper-photo.jpg";
import { Section } from "../Section/Section";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <Section sectionName="about me">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={css.container}
      >
        <div className={css.imageContainer}>
          <img src={myPhoto} alt="Kacper Photo" />
        </div>
        <div className={css.descriptionContainer}>
          <h3>Hej!</h3>
          <p>
            Hi! I'm a beginner front-end developer who's passionate about
            developing my programming skills. I currently work in a warehouse as
            a Key Account Specialist, where I learned discipline, work
            organization, and effective problem-solving. In my free time, I'm
            actively expanding my programming knowledge, focusing on web
            technologies.
          </p>
          <p>
            I work on projects that allow me to gain practical experience – from
            creating responsive websites to more advanced web applications. I
            regularly attend online courses, learn from documentation, and
            develop my skills through practice. I'm ambitious, motivated, and
            open to new challenges.
          </p>
          <p>
            I believe that my previous development and determination will allow
            me to quickly adapt to working in a front-end team and contribute to
            the success of projects.
          </p>
        </div>
      </motion.div>
    </Section>
  );
};

export { AboutMe };
