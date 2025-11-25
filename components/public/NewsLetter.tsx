'use client';

export default function NewsLetter() {
  return (
    <section className="bg-yellow-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="mb-3 text-2xl font-bold">Join our newsletter</h3>
        <p className="mb-6 text-gray-700">
          Get exclusive deals and updates about new honey batches.
        </p>
        <form
          className="mx-auto flex max-w-xl gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 rounded-full border border-gray-200 px-4 py-2 focus:outline-none"
          />
          <button className="rounded-full bg-yellow-500 px-5 py-2 font-semibold text-black transition hover:bg-yellow-600">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
