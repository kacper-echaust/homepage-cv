import css from './AboutMe.module.scss'
import myPhoto from '../../images/kacper-photo.jpg'
import { Section } from '../Section/Section'
import { motion } from 'framer-motion'

const AboutMe = () => {
	return (
		<Section sectionName='about me'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6, ease: 'easeInOut' }}
				className={css.container}>
				<div className={css.imageContainer}>
					<img src={myPhoto} alt='Kacper Photo' />
				</div>
				<div className={css.descriptionContainer}>
					<h3>Hej!</h3>
					<p>
						Jestem początkującym frontend developerem, który z pasją rozwija swoje umiejętności
						programistyczne. Aktualnie pracuję na magazynie jako Specjalista ds. Kluczowych Klientów, gdzie
						nauczyłem się dyscypliny, organizacji pracy i skutecznego rozwiązywania problemów. W wolnym
						czasie intensywnie poszerzam swoją wiedzę z zakresu programowania, skupiając się na
						technologiach webowych.
					</p>
					<p>
						Realizuję projekty, które pozwalają mi zdobywać praktyczne doświadczenie – od tworzenia
						responsywnych stron internetowych po bardziej zaawansowane aplikacje webowe. Regularnie
						uczestniczę w kursach online, uczę się z dokumentacji i rozwijam swoje umiejętności poprzez
						praktykę
					</p>
					<p>
						Jestem osobą ambitną, zmotywowaną i otwartą na nowe wyzwania. Wierzę, że mój dotychczasowy
						rozwój i determinacja pozwolą mi szybko zaadaptować się do pracy w zespole frontendowym i
						przyczynić się do sukcesu projektów.
					</p>
				</div>
			</motion.div>
		</Section>
	)
}

export { AboutMe }
