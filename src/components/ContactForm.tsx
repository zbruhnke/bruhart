'use client';

import { useState } from "react";

interface ContactFormProps {
  data?: {
    formTitle?: string;
    formSubtext?: string;
    contactReasons?: string[];
    submitButtonText?: string;
    submittingText?: string;
    successMessage?: string;
    successDescription?: string;
    errorMessage?: string;
    errorDescription?: string;
  };
}

// Fallback data
const fallbackData = {
  formTitle: 'Send Us a Message',
  formSubtext: 'Fill out the form below and we\'ll get back to you within 24 hours.',
  contactReasons: [
    "Request a Quote",
    "Technical Support",
    "Schedule a Consultation",
    "Product Information",
    "Partnership Inquiry",
    "Other",
  ],
  submitButtonText: 'Send Message',
  submittingText: 'Sending...',
  successMessage: 'Thank you for your inquiry!',
  successDescription: 'We\'ll get back to you within 24 hours.',
  errorMessage: 'Something went wrong',
  errorDescription: 'Please try again or call us directly.',
};

export default function ContactForm({ data }: ContactFormProps) {
  const formTitle = data?.formTitle || fallbackData.formTitle;
  const formSubtext = data?.formSubtext || fallbackData.formSubtext;
  const contactReasons = data?.contactReasons && data.contactReasons.length > 0 ? data.contactReasons : fallbackData.contactReasons;
  const submitButtonText = data?.submitButtonText || fallbackData.submitButtonText;
  const submittingText = data?.submittingText || fallbackData.submittingText;
  const successMessage = data?.successMessage || fallbackData.successMessage;
  const successDescription = data?.successDescription || fallbackData.successDescription;
  const errorMessage = data?.errorMessage || fallbackData.errorMessage;
  const errorDescription = data?.errorDescription || fallbackData.errorDescription;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    reason: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          reason: "",
          message: "",
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-border p-8 lg:p-12">
      <h2 className="text-2xl font-bold text-foreground mb-2">{formTitle}</h2>
      <p className="text-foreground-muted mb-8">{formSubtext}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
            Company/Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-foreground mb-2">
            Reason for Contact *
          </label>
          <select
            id="reason"
            name="reason"
            required
            value={formData.reason}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
          >
            <option value="">Select a reason</option>
            {contactReasons.map((reason) => (
              <option key={reason} value={reason}>{reason}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please describe your project or inquiry..."
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
          />
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">{successMessage}</p>
            <p className="text-green-700 text-sm mt-1">{successDescription}</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium">{errorMessage}</p>
            <p className="text-red-700 text-sm mt-1">{errorDescription}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary-dark disabled:bg-primary/50 disabled:cursor-not-allowed rounded-lg transition-colors"
        >
          {isSubmitting ? submittingText : submitButtonText}
        </button>
      </form>
    </div>
  );
}
