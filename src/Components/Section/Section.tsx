import { ReactNode } from 'react'
import css from './Section.module.scss'
import { motion } from 'framer-motion'

type Props = {
	sectionName: string
	children: ReactNode
}

const Section = ({ sectionName, children }: Props) => {
	return (
		<section className={css.section}>
			<motion.div
				initial={{ borderBottom: 'none', x: -100, opacity: 0 }}
				whileInView={{ borderBottom: '2px solid #9c9f9f', x: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className={css.titleContainer}>
				<motion.h2 className={css.sectionName}>{sectionName}</motion.h2>
			</motion.div>
			{children}
		</section>
	)
}

export { Section }
