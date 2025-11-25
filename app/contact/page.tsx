'use client';

import { useState } from 'react';
import InputField from '@/components/ui/InputField';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you can integrate API or backend submission
    console.log({ name, email, subject, message });
    setSubmitted(true);

    // Reset form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            We’d love to hear from you! Fill out the form below or reach us
            directly via email or phone.
          </p>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-lg bg-white p-8 shadow-md"
          >
            {submitted && (
              <p className="mb-4 font-semibold text-green-600">
                Thank you! Your message has been sent.
              </p>
            )}

            <div className="grid grid-cols-1 gap-4">
              <InputField
                label="Name"
                value={name}
                onChange={setName}
                required
              />
              <InputField
                label="Email"
                type="email"
                value={email}
                onChange={setEmail}
                required
              />
              <InputField
                label="Subject"
                value={subject}
                onChange={setSubject}
              />
              <div className="flex flex-col">
                <label className="mb-1 font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 placeholder-gray-400 shadow-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  placeholder="Write your message here..."
                />
              </div>
            </div>

            <Button
              type="submit"
              className="mt-6 w-full bg-yellow-500 text-black hover:bg-yellow-600"
            >
              Send Message
            </Button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold">Address</h3>
              <p className="text-gray-600">
                123 Honey Street, Sweet City, Country
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Phone</h3>
              <p className="text-gray-600">+1 (234) 567-8901</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Email</h3>
              <p className="text-gray-600">info@honeycompany.com</p>
            </div>

            {/* Optional Map */}
            <div className="mt-4 h-64 w-full overflow-hidden rounded-lg shadow">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0190452120484!2d-122.41941508468182!3d37.77492977975978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f58f4a31%3A0x8b5f3c42e1f7d13c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1698339073284!5m2!1sen!2sus"
                className="h-full w-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
