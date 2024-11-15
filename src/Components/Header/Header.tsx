import css from './Header.module.css'

import headerImage from '../../../public/code-5113374_1280.jpg'
import CV from '../../downloads/CV-Kacper-Echaust.pdf'

const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.container}>
				<div className={css.leftSideContainer}>
					<p>portfolio</p>
					<div className={css.nameContainer}>
						<p>Kacper</p>
						<p>Echaust</p>
					</div>
					<div className={css.lastContainerInLeftSide}>
						<p>Junior Frontend Developer</p>
						<p className={css.downloadCv}>
							<a href='src/downloads/CV-Kacper-Echaust.pdf' download={CV}>
								Pobierz moje CV
							</a>
						</p>
					</div>
				</div>
				<div className={css.rightSideContainer}>
					<img src={headerImage} alt='right side background image - code' />
				</div>
			</div>
		</header>
	)
}

export { Header }
