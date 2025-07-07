import { Section } from '../Section/Section'
import css from './Projects.module.scss'
import { projects } from '../../data/projects'
import { SingleProject } from './SingleProject'

const Projects = () => {
	return (
		<Section sectionName='projects'>
			<ul className={css.list}>
				{projects.map((project, index) => {
					return (
						<SingleProject key={index} project={project}/>
					)
				})}
			</ul>
		</Section>
	)
}

export { Projects }
