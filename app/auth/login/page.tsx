'use client';

import { useState } from 'react';
import InputField from '@/components/ui/InputField';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill all fields.');
      return;
    }
    console.log({ email, password, rememberMe });
    setError('');
    // Implement login API or NextAuth.js
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 py-20">
      <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-lg bg-white shadow-md md:grid-cols-2">
        {/* Left Side: Image + Description */}
        <div className="relative hidden flex-col items-center justify-center bg-yellow-50 p-10 md:flex">
          <Image
            src="/images/main-image.webp"
            alt="Welcome Back"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
          <h2 className="mt-6 text-3xl font-bold">Welcome Back!</h2>
          <p className="mt-4 text-center text-gray-600">
            Log in to your account and continue enjoying our natural honey
            products. Access your orders, manage your profile, and more!
          </p>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-10">
          <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
            Login
          </h1>

          {error && (
            <p className="mb-4 text-center font-semibold text-red-600 md:text-left">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="accent-yellow-500"
                />
                Remember Me
              </label>
              <a href="#" className="text-sm text-yellow-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              className="mt-4 bg-yellow-500 text-black hover:bg-yellow-600"
            >
              Login
            </Button>
          </form>

          <p className="mt-4 text-center text-gray-600 md:text-left">
            Don't have an account?{' '}
            <a
              href="/auth/register"
              className="text-yellow-600 hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
