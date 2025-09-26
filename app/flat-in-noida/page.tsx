import React from "react";
import LeadForm from "./LeadForm";

// Single-file React component that replicates the layout and styling of
// "Flat in Noida" landing page. Uses Tailwind CSS classes for styling.
// To preview: create a new Vite/CRA app, install Tailwind, and drop this
// component into App.jsx. The component is self-contained and uses
// placeholder images from Unsplash — replace with your own assets.

export default function FlatInNoidaReplica() {
  const properties = [
    {
      id: 1,
      title: "Ready-to-Move 2 BHK in Noida",
      price: "₹40 Lakh",
      area: "850 sq.ft",
      image:
        "https://images.unsplash.com/photo-1560448070-c75d6a1f6e2b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6b5b2d1f6f2b7c3b3a8f4b1d7e2a",
    },
    {
      id: 2,
      title: "3 BHK Apartment near Sector 52",
      price: "₹65 Lakh",
      area: "1200 sq.ft",
      image:
        "https://images.unsplash.com/photo-1572120360610-d971b9b0f12f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3d0a9d9d2f3b1a7f6e8c4d2b1a6f",
    },
    {
      id: 3,
      title: "Luxury 4 BHK in Noida Extension",
      price: "₹1.1 Cr",
      area: "1850 sq.ft",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7c3f4b2a1d6e8f9b0c2a3d4e5f6b",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}

      {/* Hero */}
      <section className="bg-[url('https://images.unsplash.com/photo-1505691723518-36a7d2c1f86a?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=9a9f8f7b6e5d4c3b2a1f0e9d8c7b')] bg-cover bg-center">
        <div className="backdrop-brightness-75"></div>
      </section>

      <main className="max-w-6xl mx-auto p-6">
        {/* Quick stats / highlights */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 -mt-10">
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-2xl font-bold">₹40 Lakh</h3>
            <p className="text-sm text-gray-500">Starting price for 1 BHK</p>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-2xl font-bold">100+ Listings</h3>
            <p className="text-sm text-gray-500">
              Verified apartments across Noida
            </p>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-2xl font-bold">Financing</h3>
            <p className="text-sm text-gray-500">
              Easy home loans & assistance
            </p>
          </div>
        </section>

        {/* Property Grid */}
        <section id="properties" className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured Properties</h2>
            <div className="text-sm text-gray-500">
              Showing top picks in Noida
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {properties.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded shadow overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {p.area} • Ready to Move
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-lg font-bold">{p.price}</div>
                    <a
                      href="#contact"
                      className="px-3 py-1 bg-indigo-600 text-white rounded text-sm"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About / Content block similar to source */}
        <section id="about" className="mt-12 bg-white rounded shadow p-6">
          <h2 className="text-xl font-semibold">About Flats in Noida</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Noida is among the fastest developing regions near Delhi — offering
            a wide range of apartments from affordable 1 BHK units to spacious 4
            BHK luxury homes. We list only verified properties with clear titles
            and easy financing options. Use filters to find properties by
            budget, locality, or configuration.
          </p>

          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="p-3 border rounded">1 BHK Flats from ₹40 Lakh</li>
            <li className="p-3 border rounded">
              2 BHK Apartments with modern amenities
            </li>
            <li className="p-3 border rounded">3 & 4 BHK for families</li>
            <li className="p-3 border rounded">Ready possession options</li>
          </ul>
        </section>

        {/* Contact / Lead form */}
        <section
          id="contact"
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-semibold">Get a Free Quote</h2>
            <p className="text-sm text-gray-500 mt-2">
              Leave your details and our sales team will contact you within 24
              hours.
            </p>

            <LeadForm />
          </div>

          <div className="bg-white rounded shadow p-6">
            <h3 className="font-semibold">Contact Details</h3>
            <p className="text-sm text-gray-500 mt-2">
              B1, 3rd Floor, Sector 1, Noida, UP 201301
            </p>
            <p className="mt-2">
              Email:{" "}
              <a href="mailto:l4rgdigitalplus@gmail.com" className="underline">
                l4rgdigitalplus@gmail.com
              </a>
            </p>
            <p className="mt-1">
              Phone:{" "}
              <a href="tel:+919069689226" className="underline">
                +91-906-968-9226
              </a>
            </p>

            <div className="mt-4">
              <h4 className="font-medium">Office Hours</h4>
              <p className="text-sm text-gray-500">
                Mon - Sat: 9:30 AM - 6:30 PM
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-medium">Location</h4>
              <div className="mt-2 w-full h-40 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                Map Placeholder
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / Footer CTA */}
        <section className="mt-12 bg-white rounded shadow p-6">
          <h3 className="text-lg font-semibold">Frequently Asked Questions</h3>
          <div className="mt-4 space-y-3 text-sm text-gray-700">
            <div>
              <strong>Q: Are these properties ready to move?</strong>
              <p>
                A: Most of our listed properties are ready possession — confirm
                on enquiry.
              </p>
            </div>
            <div>
              <strong>Q: Do you help with home loans?</strong>
              <p>
                A: Yes — we work with multiple lenders to help you get
                pre-approved quickly.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white mt-12 border-t">
        <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-semibold">L4RG Digital Plus</div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} All Rights Reserved
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Terms • Privacy • Real Estate Leads
          </div>
        </div>
      </footer>
    </div>
  );
}
