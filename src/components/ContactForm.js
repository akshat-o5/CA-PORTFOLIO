'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xbjnolon");

  if (state.succeeded) {
    return <p>Thanks for contacting!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-danger"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="form-control"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-danger"
        />
      </div>
      <button type="submit" disabled={state.submitting} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
