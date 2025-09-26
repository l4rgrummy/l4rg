"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "l4rg_promo_dismissed";

export default function FirstVisitPromo() {
  const [isMounted, setIsMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const mobile = window.matchMedia("(max-width: 640px)").matches;
    setIsMobile(mobile);

    if (!mobile) {
      const dismissed = localStorage.getItem(STORAGE_KEY) === "1";
      if (!dismissed) {
        setShowModal(true);
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleClose = useCallback(() => {
    setShowModal(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // no-op
    }
  }, []);

  if (!isMounted) return null;

  const telHref = "tel:+919069689226";

  return (
    <>
      {!isMobile && showModal && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-[min(560px,92%)] rounded-2xl bg-white p-6 shadow-xl">
            <button
              aria-label="Close"
              onClick={handleClose}
              className="absolute right-3 top-3 rounded-full border border-slate-200 p-1 text-slate-500 hover:bg-slate-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="space-y-3 text-center">
              <h3 className="text-2xl font-extrabold text-slate-900">
                We Delivered 1 Million+ Leads Globally
              </h3>
              <p className="text-slate-600">
                Appointment Setting Strong in Real Estate, SaaS, AI, BI, Cyber
                Security & Data Science Industries
              </p>
              <a
                href={telHref}
                className="btn inline-flex w-full justify-center"
              >
                Call Now +91 906 968 9226
              </a>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-[65] border-t border-slate-200 bg-white/95 sm:hidden">
          <div className="mx-auto flex w-[min(1200px,92%)] items-center justify-between gap-3 p-3">
            <span className="text-sm font-semibold text-slate-700">
              Call us at
            </span>
            <a href={telHref} className="btn flex-1 justify-center">
              +91 906 968 9226
            </a>
          </div>
        </div>
      )}
    </>
  );
}
