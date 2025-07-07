import { Button } from '../Button/Button'
import css from './SingleProject.module.scss'
type ProjectType = {
	project: {
		name: string
		description: string
		imgSrc: string
		link: string
		technologies: string[]
	}
}

const SingleProject = ({ project }: ProjectType) => {
	return (
		<div className={css.projectContainer}>
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
						<Button text='Przejdź do projektu'/>
					</a>
				</div>
			</div>
		</div>
	)
}

export { SingleProject }
