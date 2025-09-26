import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
  GithubIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 font-sans">
      <div className="container pt-12 pb-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-black tracking-tight">
              About Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-200 font-medium"
                >
                  CIENCE at a glance
                </Link>
              </li>
              <li>
                <Link
                  href="/awards"
                  className="hover:text-white transition-colors duration-200 font-medium"
                >
                  Awards & Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/philosophy"
                  className="hover:text-white transition-colors duration-200 font-medium"
                >
                  The CIENCE Way
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-200 font-medium"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Section */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-black tracking-tight">
              Learn
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link
                  href="/podcast"
                  className="hover:text-white transition-colors duration-200 font-medium"
                >
                  Podcast
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors duration-200 font-medium"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/ciencepedia"
                  className="hover:text-white transition-colors duration-200 font-medium"
                >
                  CIENCEpedia
                </Link>
              </li>
              <li>
                <Link
                  href="/press-releases"
                  className="hover:text-white transition-colors duration-200 font-medium"
                >
                  Press Releases
                </Link>
              </li>
              <li>
                <Link
                  href="/ebooks"
                  className="hover:text-white transition-colors duration-200 font-medium"
                >
                  Ebooks
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-black tracking-tight">
              Resources
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link
                  href="/product-videos"
                  className="hover:text-white transition-colors duration-200 font-medium"
                >
                  Product Videos
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-white transition-colors duration-200 font-medium"
                >
                  News and Updates
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-white transition-colors duration-200 font-medium"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/meeting"
                  className="hover:text-white transition-colors duration-200 font-medium"
                >
                  Book A Meeting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info & Contact */}
          <div>
            <div className="flex items-center gap-3 font-black text-black mb-6">
              <span className="w-10 h-10 rounded-lg bg-indigo-600 inline-block shadow-lg"></span>
              <div className="font-extrabold text-2xl tracking-tight">L4RG</div>
            </div>
            <p className="text-sm text-black mb-6 font-medium leading-relaxed">
              Lead Generation & Appointments
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MailIcon className="w-4 h-4" />
                <a
                  href="mailto:hello@l4rg.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  hello@l4rg.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <PhoneIcon className="w-4 h-4" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors duration-200"
                >
                  +1 (234) 567-8900
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div>
              <h4 className="font-semibold text-black mb-4 text-sm uppercase tracking-wider">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com/l4rg"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                  aria-label="Follow us on Twitter"
                >
                  <TwitterIcon className="w-6 h-6" />
                </Link>
                <Link
                  href="https://instagram.com/l4rg"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon className="w-6 h-6" />
                </Link>
                <Link
                  href="https://linkedin.com/company/l4rg"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                  aria-label="Connect with us on LinkedIn"
                >
                  <LinkedinIcon className="w-6 h-6" />
                </Link>
                <Link
                  href="https://facebook.com/l4rg"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                  aria-label="Like us on Facebook"
                >
                  <FacebookIcon className="w-6 h-6" />
                </Link>
                <Link
                  href="https://youtube.com/c/l4rg"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <YoutubeIcon className="w-6 h-6" />
                </Link>
                <Link
                  href="https://github.com/l4rg"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                  aria-label="Check out our GitHub"
                >
                  <GithubIcon className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-200 font-medium"
              >
                Terms of Use
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-200 font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/real-estate-leads"
                className="hover:text-white transition-colors duration-200 font-medium"
              >
                Real Estate Leads
              </Link>
              <Link
                href="/pdf-accessibility"
                className="hover:text-white transition-colors duration-200 font-medium"
              >
                PDF Accessibility
              </Link>
              <Link
                href="/flat-in-noida"
                className="hover:text-white transition-colors duration-200 font-medium"
              >
                Flat in Noida
              </Link>
            </div>
            <div className="text-sm text-black font-medium">
              © {new Date().getFullYear()} L4RG US LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
