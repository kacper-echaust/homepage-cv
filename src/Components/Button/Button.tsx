import css from "./Button.module.scss";
type ButtonProps = {
  text: string;
  type?: "submit";
  className?: string;
};

const Button = ({ text, type, className }: ButtonProps) => {
  return (
    <button className={`${css.button} ${className}`} type={type}>
      {text}
    </button>
  );
};

export { Button };
