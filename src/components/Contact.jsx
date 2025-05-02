import React, { useState, useEffect, useRef } from "react";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

console.log("test contact");

const validationErrors = {
  name: "you have to enter your name, silly",
  email: "that's not a valid email",
  message: "pleeease write a message",
};

const validationSchema = yup.object().shape({
  user_name: yup.string().required(validationErrors.user_name),
  user_email: yup
    .string()
    .email(validationErrors.email)
    .required("user_email is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email format"
    ),
  user_contact: yup.string(),
  message: yup.string().min(5, validationErrors.message),
});

const initialValues = {
  user_name: "",
  user_email: "",
  user_contact: "",
  message: "",
};

function Contact() {
  {
    /* FUNCTION BEGINS */
  }
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
        setErrors({ ...errors, [key]: "" });
      })
      .catch((error) => {
        setErrors({ ...errors, [key]: error.errors[0] });
      });
  };

  const onChange = (evt) => {
    const { id, value } = evt.target;
    validate(id, value);
    setValues({ ...values, [id]: value });
  };

  const sendEmail = (evt) => {
    evt.preventDefault();
    setValues(initialValues);
    alert("Thank you for reaching out! I'll get back to you soon!");
    emailjs
      .sendForm("service_nyiplyk", "contact_form", form.current, {
        publicKey: "oReZPAeV9Y_5xjXCy",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <form id="my-form" onSubmit={sendEmail}>
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
            <br />
            <br />
            <label htmlFor="user_contact">Tele (Optional): </label>
            <input
              placeholder="Enter your number"
              id="user_contact"
              value={values.user_contact}
              name="user_contact"
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              onChange={onChange}
            />
            <br />
            <br />
            <label htmlFor="message">Message: </label>
            <textarea
              placeholder="Write me a little something..."
              id="message"
              name="message"
              type="text"
              value={values.message}
              onChange={onChange}
            />
            <br />
          </div>
        </div>
        <input type="submit" value="Send it my way!" disabled={!enabled} />
      </form>
    </div>
  );
}

export default Contact;
