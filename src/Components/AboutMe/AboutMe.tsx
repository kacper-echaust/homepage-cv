import css from "./AboutMe.module.scss";
import myPhoto from "../../images/portfolio-photo.jpg";
import { Section } from "../Section/Section";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <Section sectionName="o mnie">
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
            Pracuję jako Koordynator Kluczowych Klientów w środowisku
            magazynowym, gdzie zarządzam 7‑osobowym zespołem i odpowiadam za
            sprawną realizację wysyłek dla najważniejszych klientów firmy. Na co
            dzień dbam o organizację pracy, komunikację i terminowość — lubię,
            gdy wszystko działa jak dobrze naoliwiona maszyna.
          </p>
          <p>
            Po godzinach angażuję się w działalność Fundacji Szczęśliwsi, gdzie
            współtworzę stronę internetową i pracuję w zespole nad rozwojem jej
            funkcjonalności. To połączenie pracy zespołowej i technologii daje
            mi ogromną satysfakcję.
          </p>
          <p>
            W wolnym czasie stawiam na sport i podróże, a równolegle intensywnie
            rozwijam się jako frontend developer. Uczę się codziennie, buduję
            projekty i szukam swojej pierwszej zawodowej szansy w branży IT —
            miejsca, w którym będę mógł połączyć technologię, kreatywność i
            doświadczenie w pracy z ludźmi.
          </p>
        </div>
      </motion.div>
    </Section>
  );
};

export { AboutMe };
