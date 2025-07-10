import { Button } from '../Button/Button'
import css from './SingleProject.module.scss'
import { motion } from 'framer-motion'
type ProjectType = {
	project: {
		name: string
		description: string
		imgSrc: string
		link: string
		technologies: string[]
	}
	index: number
}

const SingleProject = ({ project, index }: ProjectType) => {
	const fromWhere = index % 2 === 0 ? 100 : -100
	return (
		<motion.div
			className={css.projectContainer}
			initial={{ x: fromWhere, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}>
			<p className={css.projectName}>{project.name}</p>
			<div className={css.contentContainer}>
				<div className={css.imageContainer}>
					<img src={project.imgSrc} alt={project.name} />
				</div>
				<div className={css.description}>
					<p>{project.description}</p>
					<ul className={css.technologiesList}>
						{project.technologies.map((technologie, index) => (
							<li key={index}>{technologie},</li>
						))}
					</ul>
					<a href={project.link}>
						<Button text='Przejdź do projektu' />
					</a>
				</div>
			</div>
		</motion.div>
	)
}

export { SingleProject }
