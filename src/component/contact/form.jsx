import React, { useState } from 'react';
import {Fade} from 'react-awesome-reveal';
import './form.css';
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm('mjvjldgq');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSuccess = () => {
    setShowSuccessMessage(true);

    // Set a timeout to hide the success message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  if (showSuccessMessage) {
    return (
      <p className="contact__message contact__message--success">
        <Fade duration={2000}>Thanks for Contacting! We will get back to you as soon as possible.</Fade>
      </p>
    );
  }

  return (
    <Fade duration={2000}>
    <form className="contact__form" onSubmit={(e) => { handleSubmit(e); handleSuccess(); }}>
      <input
        className="contact__input"
        type="text"
        name="username"
        required={true}
        placeholder="Name"
      />

      <input
        className="contact__input"
        type="email"
        name="email"
        required={true}
        placeholder="Email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <textarea
        className="contact__input"
        name="message"
        rows="7"
        required={true}
        placeholder="Message"
      ></textarea>
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <button className="contact__button" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </Fade>
  );
};

export default Form;
