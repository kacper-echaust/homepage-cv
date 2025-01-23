import css from './Header.module.scss'

import headerImage from '../../images/code-5113374_1280.jpg'
import CV from '../../downloads/CV_Kacper_Echaust.pdf'

const Header = () => {
	console.log(CV);
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
		</header>
	)
}

export { Header }
