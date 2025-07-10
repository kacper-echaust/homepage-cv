import css from './Header.module.scss'
import headerImage from '../../images/code-5113374_1280.jpg'
import CV from '../../downloads/CV_Kacper_Echaust.pdf'
import { Typewriter } from '../TypeWriter/TypeWriter'
import { motion } from 'framer-motion'

const Header = () => {
	return (
		<motion.header className={css.header} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: 0.4}}>
			<div className={css.container}>
				<div className={css.contentContainer}>
					<div>
						<Typewriter text='Kacper Echaust' speed={70} />
						<Typewriter text='Junior Frontend Developer' speed={100} />
					</div>
					<div>
						<p>
							<a href={CV} download={CV}>
								Pobierz moje CV
							</a>
						</p>
					</div>
				</div>
				<div className={css.imageContainer}>
					<img src={headerImage} alt='right side background image - code' />
				</div>
			</div>
		</motion.header>
	)
}

export { Header }
