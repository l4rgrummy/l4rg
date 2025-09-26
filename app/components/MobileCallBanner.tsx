import { PhoneIcon } from "lucide-react";

export default function MobileCallBanner() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <a
        href="tel:+1234567890"
        className="block text-white"
        aria-label="Call us at +1 (234) 567-8900"
      >
        <div className="container py-3 flex items-center justify-center gap-2">
          <PhoneIcon className="w-5 h-5" />
          <span className="font-semibold tracking-wide">
            Call at +1 (234) 567-8900
          </span>
        </div>
      </a>
    </div>
  );
}
