import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-6">
          About Our Bookstore
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Welcome to <strong>BookNest</strong> — your friendly neighborhood online bookstore! We’re passionate about stories, knowledge, and creating a space where every reader finds their next great read.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          From timeless classics to the latest bestsellers, our carefully curated collection offers something for everyone — students, professionals, casual readers, and bookworms alike.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          We believe books change lives. That’s why we not only sell books — we also host free reading events, provide access to free eBooks, and support local authors.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          To foster a love for reading and learning by making books more accessible, affordable, and enjoyable for everyone.
        </p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Wide range of genres and categories</li>
          <li>Affordable prices and seasonal discounts</li>
          <li>Support for independent and local authors</li>
          <li>Free and premium eBooks</li>
          <li>Friendly and responsive customer support</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
