import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
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
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  // Memoize validation function
  const validate = useCallback((key, value) => {
    yup
      .reach(validationSchema, key)
      .validate(value)
      .then(() => {
        setErrors((prevErrors) => ({ ...prevErrors, [key]: "" }));
      })
      .catch((error) => {
        setErrors((prevErrors) => ({ ...prevErrors, [key]: error.errors[0] }));
      });
  }, []);

  // Debounced validation
  const debouncedValidate = useCallback(
    (key, value) => {
      const timeoutId = setTimeout(() => validate(key, value), 300);
      return () => clearTimeout(timeoutId);
    },
    [validate]
  );

  const onChange = useCallback(
    (evt) => {
      const { id, value } = evt.target;
      setValues((prevValues) => ({ ...prevValues, [id]: value }));
      debouncedValidate(id, value);
    },
    [debouncedValidate]
  );

  const sendEmail = useCallback(async (evt) => {
    evt.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_nyiplyk",
        "contact_form",
        form.current,
        "oReZPAeV9Y_5xjXCy"
      );
      alert("Thank you for reaching out! I'll get back to you soon!");
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      console.error("Failed to send email:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  // Memoize form validity check
  const isFormValid = useMemo(() => {
    return (
      Object.keys(errors).length === 0 &&
      values.user_name &&
      values.user_email &&
      values.message
    );
  }, [errors, values]);

  return (
    <div className="contact-container">
      <form id="my-form" ref={form} onSubmit={sendEmail}>
        <div className="input-groups">
          <h3>Say Hi! I love when new friends say hi.</h3>
          <div className="input-group">
            <label htmlFor="user_name">Name: </label>
            <input
              placeholder="Name goes here"
              id="user_name"
              name="user_name"
              type="text"
              value={values.user_name}
              onChange={onChange}
              disabled={isSubmitting}
            />
            {errors.user_name && <p className="error">{errors.user_name}</p>}

            <label htmlFor="user_email">Email: </label>
            <input
              placeholder="Email goes here"
              id="user_email"
              name="user_email"
              type="email"
              value={values.user_email}
              onChange={onChange}
              disabled={isSubmitting}
            />
            {errors.user_email && <p className="error">{errors.user_email}</p>}

            <label htmlFor="user_contact">Phone Number (Optional): </label>
            <input
              placeholder="Enter your number"
              id="user_contact"
              name="user_contact"
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              value={values.user_contact}
              onChange={onChange}
              disabled={isSubmitting}
            />

            <label htmlFor="message">Message: </label>
            <textarea
              placeholder="Write me a little something..."
              id="message"
              name="message"
              value={values.message}
              onChange={onChange}
              disabled={isSubmitting}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
        </div>
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={isSubmitting ? "submitting" : ""}
        >
          {isSubmitting ? "Sending..." : "Send it my way!"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
