import { Section } from '../Section/Section'
import css from './Projects.module.scss'
import { projects } from '../../data/projects'

const Projects = () => {
	return (
		<Section sectionName='projects'>
			<ul className={css.list}>
				{projects.map((project, index) => {
					return (
						<div className={css.projectContainer} key={index}>
							<p className={css.projectName}>{project.name}</p>
							<a href={project.link} key={index}>
								<img src={project.imgSrc} alt={project.name} />
								<div className={css.description}>
									<p>{project.description}</p>
								</div>
							</a>
						</div>
					)
				})}
			</ul>
		</Section>
	)
}

export { Projects }
