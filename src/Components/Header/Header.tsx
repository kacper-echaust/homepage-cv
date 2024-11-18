import css from './Header.module.scss'

import headerImage from '../../../public/code-5113374_1280.jpg'
import CV from '../../downloads/CV-Kacper-Echaust.pdf'

const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.container}>
				<div className={css.contentContainer}>
					<p>portfolio</p>
					<div>
						<p>Kacper</p>
						<p>Echaust</p>
					</div>
					<div>
						<p>Junior Frontend Developer</p>
						<p>
							<a href='src/downloads/CV-Kacper-Echaust.pdf' download={CV}>
								Pobierz moje CV
							</a>
						</p>
					</div>
				</div>
				<div className={css.imageContainer}>
					<img src={headerImage} alt='right side background image - code' />
				</div>
			</div>
		</header>
	)
}

export { Header }
