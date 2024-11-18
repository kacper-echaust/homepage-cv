import { ReactNode } from 'react'
import css from './Section.module.scss'

type Props = {
	sectionName: string
	children: ReactNode
}

const Section = ({ sectionName, children }: Props) => {
	return (
		<section className={css.section}>
			<h2 className={css.sectionName}>{sectionName}</h2>
			{children}
		</section>
	)
}

export { Section }
