import { useRef, useState } from "react";
import { Section } from "../Section/Section";
import css from "./Contact.module.scss";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";

type FormType = {
  user_name: string;
  user_email: string;
  message: string;
};
const service_id = import.meta.env.VITE_REACT_APP_SERVICE_ID as string;
const template_id = import.meta.env.VITE_REACT_APP_TEMPLATE_ID as string;
const user_id = import.meta.env.VITE_REACT_APP_USER_ID as string;

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>();

  const handleSendForm = () => {
    if (!form.current) return;
    emailjs.sendForm(service_id, template_id, form.current, user_id).then(
      () => {
        setAlertText("Wiadomość została wysłana pomyślnie.");
        setShowAlert(true);
        console.log("SUCCES");
        reset();
      },
      (error) => {
        setAlertText("Error. Spróbuj ponownie.");
        setShowAlert(true);
        console.log("FAILED...", error);
      },
    );
  };
  const AlertPopUp = () => {
    return (
      <div className={css.popup}>
        <p>{alertText}</p>
        <button
          onClick={() => {
            setShowAlert(false);
          }}
        >
          Zamknij
        </button>
      </div>
    );
  };
  return (
    <Section sectionName="kontakt">
      <footer className={css.footer}>
        <form
          className={css.form}
          onSubmit={handleSubmit(handleSendForm)}
          ref={form}
        >
          <label htmlFor="user_name">Imię</label>
          <input
            type="text"
            id="user_name"
            {...register("user_name", {
              required: "Imię jest wymagane",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Imię jest nieprawidłowe",
              },
            })}
          />
          {errors.user_name && (
            <p className={css.error}>{errors.user_name.message}</p>
          )}

          <label htmlFor="user_email">E-mail</label>
          <input
            type="email"
            id="user_email"
            {...register("user_email", {
              required: "Email jest wymagany",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Email jest nieprawidłowy",
              },
            })}
          />
          {errors.user_email && (
            <p className={css.error}>{errors.user_email.message}</p>
          )}

          <label htmlFor="message">Wiadomość</label>
          <textarea
            id="message"
            {...register("message", {
              required: "Message jest wymagana",
              minLength: {
                value: 10,
                message: "Wiadomość musi mieć minimum 10 znaków",
              },
            })}
          ></textarea>
          {errors.message && (
            <p className={css.error}>{errors.message.message}</p>
          )}

          <Button type="submit" text="Wyślij" className={css.submitButton} />
        </form>
        {showAlert && <AlertPopUp />}
      </footer>
    </Section>
  );
};

export { Contact };
