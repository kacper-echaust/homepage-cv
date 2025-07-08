import css from './Skills.module.scss'
import { iconsSkills } from '../../assets'
import { Section } from '../Section/Section'
import { motion } from 'framer-motion'

const Skills = () => {
	return (
		<Section sectionName='skills'>
			<ul className={css.list}>
				{iconsSkills.map((icon, index) => {
					return (
						<motion.li
							initial={{ x: 50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: Number(`0.${index}`), ease: 'easeIn' }}
							key={index}>
							<img src={icon.url} alt={`${icon.name} icon`} />
							<p>{icon.name}</p>
						</motion.li>
					)
				})}
			</ul>
		</Section>
	)
}

export { Skills }
