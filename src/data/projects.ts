import fishkappImage from '../../public/fishkapp.png'
import barberShopImage from '../../public/barber-shop.png'
import taskAppImage from '../../public/taskapp.png'
import taskAppReduxImage from '../../public/taskappredux.png'

export const projects = [
	{
		name: 'fishkapp',
		description:
			'Aplikacja do dodawania kart pozwala tworzyć i zarządzać kartami z treściami, takimi jak tekst, obrazy czy linki. Prosty interfejs sprawia, że świetnie nadaje się do notatek.',
		imgSrc: fishkappImage,
		technologies: ['React', 'Typescript', 'REST Api', 'Jest', 'React Testing Library'],
		link: 'https://kacper-echaust.github.io/fischkapp/',
	},
	{
		name: 'barber shop',
		description:
			'Stworzona przeze mnie strona barber shopu to nowoczesny projekt z przejrzystym układem, intuicyjną nawigacją i klimatycznym designem, który odzwierciedla charakter miejsca i ułatwia rezerwację wizyt.',
		imgSrc: barberShopImage,
		technologies: ['React', 'React-Router', 'Typescript', 'CSS modules'],
		link: 'https://kacper-echaust.github.io/barber-shop/#/',
	},
	{
		name: 'task app',
		description:
			'Organizacja zadań która zapisuje w localne zadania w pamięci przeglądarki. Możliwość sortowania po dacie oraz odhaczania zadań skończonych.',
		imgSrc: taskAppImage,
		technologies: ['React', 'Typescript', 'Sass'],
		link: 'https://kacper-echaust.github.io/task-app/',
	},
	{
		name: 'task app redux',
		description: 'Organizacja zadań która zapisuje w lokal storage zadania wykonana przy użyciu redux',
		imgSrc: taskAppReduxImage,
		technologies: ['React', 'Redux', 'Typescript', 'Sass', 'shadcn'],
		link: 'https://kacper-echaust.github.io/task-app-redux/',
	},
]
