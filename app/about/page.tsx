'use client';

import TeamCard from '@/components/ui/TeamCard';
import StatsCard from '@/components/ui/StatsCard';

const team = [
  { name: 'Alice Johnson', role: 'CEO', img: '/images/main-image.webp' },
  { name: 'Bob Smith', role: 'CTO', img: '/images/main-image.webp' },
  { name: 'Clara Lee', role: 'Marketing Lead', img: '/images/main-image.webp' },
];

const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '1200+', label: 'Projects Completed' },
  { number: '10+', label: 'Years Experience' },
];

export default function AboutPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Hero / Mission */}
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Us</h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            We are passionate about delivering high-quality natural products to
            our customers. Our mission is to make healthy living accessible and
            enjoyable for everyone.
          </p>
        </header>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((item, i) => (
            <StatsCard
              key={i}
              number={item.number}
              label={item.label}
              index={i}
            />
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Meet the Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <TeamCard
                key={i}
                name={member.name}
                role={member.role}
                img={member.img}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Values / Story Section */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Our Values</h2>
          <p className="mb-6 text-gray-600">
            Integrity, sustainability, and quality are at the heart of
            everything we do. We believe in natural products that not only taste
            amazing but also contribute to a healthier lifestyle.
          </p>
          <p className="text-gray-600">
            Our journey started 10 years ago with a small local farm. Today, we
            have grown into a passionate team dedicated to providing the best
            organic products to our customers worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
