'use client';

import { useState } from 'react';
import InputField from '@/components/ui/InputField';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password });
    setSubmitted(true);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 py-20">
      <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-lg bg-white shadow-md md:grid-cols-2">
        {/* Left Side: Image + Description */}
        <div className="relative hidden flex-col items-center justify-center bg-yellow-50 p-10 md:flex">
          <Image
            src="/images/main-image.webp"
            alt="Join us"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
          <h2 className="mt-6 text-3xl font-bold">Join Our Honey Community</h2>
          <p className="mt-4 text-center text-gray-600">
            Create an account and enjoy our natural, organic honey products.
            Stay updated on our latest offers and exclusive deals!
          </p>
        </div>

        {/* Right Side: Registration Form */}
        <div className="p-10">
          <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
            Create Account
          </h1>

          {submitted && (
            <p className="mb-4 text-center font-semibold text-green-600 md:text-left">
              Account created successfully!
            </p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <InputField
              label="Full Name"
              placeholder="Your Name"
              value={name}
              onChange={setName}
              required
            />
            <InputField
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={setEmail}
              required
            />
            <div className="relative">
              <InputField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="********"
                value={password}
                onChange={setPassword}
                required
              />
              <button
                type="button"
                className="absolute top-[30px] right-0 text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <Button
              type="submit"
              className="mt-4 bg-yellow-500 text-black hover:bg-yellow-600"
            >
              Register
            </Button>
          </form>

          <p className="mt-4 text-center text-gray-600 md:text-left">
            Already have an account?{' '}
            <a href="/auth/login" className="text-yellow-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
