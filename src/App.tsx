import { AboutMe } from './Components/AboutMe/AboutMe'
import { Header } from './Components/Header/Header'
import { Projects } from './Components/Projects/Projects'
import { Skills } from './Components/Skills/Skills'

const App = () => {
	return (
		<>
			<Header />
			<AboutMe />
			<Skills/>
			<Projects/>
		</>
	)
}

export { App }
