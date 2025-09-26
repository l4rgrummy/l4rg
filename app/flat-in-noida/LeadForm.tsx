"use client";

import React, { FormEvent, useState } from "react";

export default function LeadForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("₹40 Lakh - ₹60 Lakh");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="mt-4 p-3 rounded border bg-green-50 text-green-700">
        Thanks {fullName || "there"}! We will contact you shortly.
      </div>
    );
  }

  return (
    <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input
          className="w-full mt-1 p-2 border rounded"
          placeholder="Your name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input
          className="w-full mt-1 p-2 border rounded"
          placeholder="Mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Budget</label>
        <select
          className="w-full mt-1 p-2 border rounded"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        >
          <option>₹40 Lakh - ₹60 Lakh</option>
          <option>₹60 Lakh - ₹1 Cr</option>
          <option>₹1 Cr+</option>
        </select>
      </div>
      <div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
