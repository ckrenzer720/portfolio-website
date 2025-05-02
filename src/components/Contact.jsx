import React, { useState, useEffect, useRef } from "react";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const validationErrors = {
  user_name: "You have to enter your name, silly.",
  user_email: "That's not a valid email.",
  message: "Please write a message.",
};

const validationSchema = yup.object().shape({
  user_name: yup.string().required(validationErrors.user_name),
  user_email: yup
    .string()
    .email(validationErrors.user_email)
    .required("Email is required"),
  user_contact: yup.string(),
  message: yup
    .string()
    .min(5, validationErrors.message)
    .required("Message is required"),
});

const initialValues = {
  user_name: "",
  user_email: "",
  user_contact: "",
  message: "",
};

function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [enabled, setEnabled] = useState(false);
  const form = useRef();

  useEffect(() => {
    validationSchema.isValid(values).then((isValid) => {
      setEnabled(isValid);
    });
  }, [values]);

  const validate = (key, value) => {
    yup
      .reach(validationSchema, key)
      .validate(value)
      .then(() => {
        setErrors((prevErrors) => ({ ...prevErrors, [key]: "" }));
      })
      .catch((error) => {
        setErrors((prevErrors) => ({ ...prevErrors, [key]: error.errors[0] }));
      });
  };

  const onChange = (evt) => {
    const { id, value } = evt.target;
    validate(id, value);
    setValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const sendEmail = (evt) => {
    evt.preventDefault();
    emailjs
      .sendForm(
        "service_nyiplyk",
        "contact_form",
        form.current,
        "oReZPAeV9Y_5xjXCy" // Public key
      )
      .then(
        () => {
          alert("Thank you for reaching out! I'll get back to you soon!");
          setValues(initialValues); // Reset form values
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <form id="my-form" ref={form} onSubmit={sendEmail}>
        <div className="input-groups">
          <h3>Give me those credentials... if you want...</h3>
          <div className="input-group">
            <label htmlFor="user_name">Name: </label>
            <input
              placeholder="Name goes here"
              id="user_name"
              name="user_name"
              type="text"
              value={values.user_name}
              onChange={onChange}
            />
            {errors.user_name && <p className="error">{errors.user_name}</p>}
            <br />
            <br />
            <label htmlFor="user_email">Email: </label>
            <input
              placeholder="Email goes here"
              id="user_email"
              name="user_email"
              type="email"
              value={values.user_email}
              onChange={onChange}
            />
            {errors.user_email && <p className="error">{errors.user_email}</p>}
            <br />
            <br />
            <label htmlFor="user_contact">Tele (Optional): </label>
            <input
              placeholder="Enter your number"
              id="user_contact"
              name="user_contact"
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              value={values.user_contact}
              onChange={onChange}
            />
            <br />
            <br />
            <label htmlFor="message">Message: </label>
            <textarea
              placeholder="Write me a little something..."
              id="message"
              name="message"
              value={values.message}
              onChange={onChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}
            <br />
          </div>
        </div>
        <input type="submit" value="Send it my way!" disabled={!enabled} />
      </form>
    </div>
  );
}

export default Contact;
