import css from './Button.module.scss'
type ButtonProps = {
	text: string
	type?: 'submit' 
}

const Button = ({ text, type }: ButtonProps) => {
	return <button className={css.button} type={type}>{text}</button>
}

export { Button }
