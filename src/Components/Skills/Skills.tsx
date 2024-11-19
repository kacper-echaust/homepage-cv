import css from './Skills.module.scss'
import { iconsSkills } from '../../assets'
import { Section } from '../Section/Section'

const Skills = () => {
	return (
		<Section sectionName='skills'>
			<ul className={css.list}>
				{iconsSkills.map((icon, index) => {
					return (
						<li key={index}>
							<img src={icon.url} alt={`${icon.name} icon`} />
							<p>{icon.name}</p>
						</li>
					)
				})}
			</ul>
		</Section>
	)
}

export { Skills }
