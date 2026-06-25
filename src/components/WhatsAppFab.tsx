import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { formatWhatsAppLink } from "@/lib/utils";

export function WhatsAppFab() {
  const href = formatWhatsAppLink(
    site.whatsapp,
    "Hi Piyush! I found your website and I'm interested in coaching. Can we talk?"
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-105 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
