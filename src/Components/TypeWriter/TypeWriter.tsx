import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

type TypeWriterProps = {
	text: string
	speed?: number
	className?: string
}

const Typewriter = ({ text, speed = 100, className }: TypeWriterProps) => {
	const [displayedText, setDisplayedText] = useState('')

	useEffect(() => {
		let i = 0
		const interval = setInterval(() => {
			setDisplayedText(text.slice(0, i + 1))
			i++
			if (i === text.length) clearInterval(interval)
		}, speed)

		return () => clearInterval(interval)
	}, [text, speed])

	return (
		<motion.span
			className={className}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}>
			{displayedText}
		</motion.span>
	)
}

export { Typewriter }
