import React, { useState } from "react";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import axios from "axios"; 

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
    setSuccess(false);
  };

  const validateEmail = (email) =>
    /\S+@\S+\.\S+/.test(email);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(form.email)) newErrors.email = "Invalid email address";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    try {
      
      await axios.post(`/api/contact`, form);

      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("Failed to send message:", err);
      setSuccess(false);
      alert("❌ Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-800 py-24 px-5 sm:px-10 md:px-20 lg:px-32">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-50 mb-3">
          Get in Touch with <span className="text-blue-600">AWS Nuggets</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          We'd love to hear from you! Fill out the form or reach out to us through the contact details below. We aim to respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-white dark:bg-gray-400 rounded-2xl shadow-xl p-12">
        
        <ContactInfo />

        
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <InputGroup
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            required
            placeholder="Your full name"
          />

          <InputGroup
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            required
            placeholder="you@example.com"
          />

          <InputGroup
            label="Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            error={errors.subject}
            required
            placeholder="Subject"
          />

          <TextareaGroup
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            error={errors.message}
            required
            placeholder="Write your message here..."
            rows={5}
          />

          {success && (
            <p className="text-blue-600 font-semibold text-center">
              ✅ Your message has been sent successfully! We'll get back to you shortly.
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 cursor-pointer text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            aria-label="Send Message"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}


const ContactInfo = () => {
  return (
    <div className="space-y-12 flex flex-col justify-center">
      <ContactDetail
        icon={<HiOutlinePhone className="text-blue-600 w-8 h-8" aria-hidden="true" />}
        title="Phone"
        info="+1 (555) 123-4567"
      />
      <ContactDetail
        icon={<HiOutlineMail className="text-blue-600 w-8 h-8" aria-hidden="true" />}
        title="Email"
        info="support@awsnuggets.com"
      />
      <ContactDetail
        icon={<HiOutlineLocationMarker className="text-blue-600 w-8 h-8" aria-hidden="true" />}
        title="Address"
        info="123 Cloud Avenue, Tech City, USA"
      />
    </div>
  );
};

const ContactDetail = ({ icon, title, info }) => (
  <div className="flex items-start gap-5">
    <div className="bg-blue-100 p-3 rounded-full">{icon}</div>
    <div>
      <dt className="text-lg font-semibold text-gray-900">{title}</dt>
      <dd className="mt-1 text-gray-700">{info}</dd>
    </div>
  </div>
);

const InputGroup = ({ label, name, type = "text", value, onChange, error, required, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-black">
      {label}
      {required && <span className="ml-1 text-red-600">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-invalid={!!error}
      aria-describedby={`${name}-error`}
      required={required}
      className={`mt-1 block w-full rounded-md border dark:bg-gray-200 px-4 py-2 sm:text-sm shadow-sm focus:outline-none focus:ring-2 transition ${
        error
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-blue-500"
      }`}
    />
    {error && (
      <p className="mt-1 text-sm text-red-600" id={`${name}-error`}>
        {error}
      </p>
    )}
  </div>
);

const TextareaGroup = ({ label, name, value, onChange, error, required, placeholder, rows = 4 }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-black">
      {label}
      {required && <span className="ml-1 text-red-600">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-invalid={!!error}
      aria-describedby={`${name}-error`}
      required={required}
      className={`mt-1 block w-full rounded-md border dark:bg-gray-200 px-4 py-2 resize-y sm:text-sm shadow-sm focus:outline-none focus:ring-2 transition ${
        error
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-blue-500"
      }`}
    />
    {error && (
      <p className="mt-1 text-sm text-red-600" id={`${name}-error`}>
        {error}
      </p>
    )}
  </div>
);
