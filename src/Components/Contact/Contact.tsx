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
        setAlertText("The message was sent successfully.");
        setShowAlert(true);
        console.log("SUCCES");
        reset();
      },
      (error) => {
        setAlertText("Error sending message. Please try again.");
        setShowAlert(true);
        console.log("FAILED...", error);
      }
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
          Close
        </button>
      </div>
    );
  };
  return (
    <Section sectionName="Contact">
      <footer className={css.footer}>
        <form
          className={css.form}
          onSubmit={handleSubmit(handleSendForm)}
          ref={form}
        >
          <label htmlFor="user_name">First Name</label>
          <input
            type="text"
            id="user_name"
            {...register("user_name", {
              required: "Name is required",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "The name is incorrect",
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
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "The email is incorrect",
              },
            })}
          />
          {errors.user_email && (
            <p className={css.error}>{errors.user_email.message}</p>
          )}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "The message must be at least 10 characters long.",
              },
            })}
          ></textarea>
          {errors.message && (
            <p className={css.error}>{errors.message.message}</p>
          )}

          <Button type="submit" text="Send" className={css.submitButton} />
        </form>
        {showAlert && <AlertPopUp />}
      </footer>
    </Section>
  );
};

export { Contact };
