'use client';

export default function FloatingConcierge() {
  return (
    <aside className="floating-concierge" aria-label="Quick contact and social links">
      {/* Floating Instagram Button */}
      <a
        href="https://instagram.com/zuri_cottage"
        target="_blank"
        rel="noopener noreferrer"
        className="concierge-btn instagram"
        title="Follow @zuri_cottage on Instagram"
        aria-label="Follow Zuri Cottage on Instagram"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>

      {/* Floating WhatsApp Concierge Button */}
      <a
        href="https://wa.me/919797933349?text=Hi%20Zuri%20Cottage%20Pahalgam,%20I%20would%20like%20to%20inquire%20about%20availability%20and%20rates"
        target="_blank"
        rel="noopener noreferrer"
        className="concierge-btn whatsapp"
        title="WhatsApp Concierge (+91 97979 33349)"
        aria-label="Chat with Concierge on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.226-.652.075-.3-.15-1.268-.468-2.415-1.492-.894-.798-1.498-1.784-1.674-2.085-.176-.3-.019-.463.132-.613.136-.135.301-.35.452-.526.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.93-2.24-.244-.59-.493-.51-.678-.52h-.578c-.2 0-.526.075-.802.375-.276.3-1.054 1.03-1.054 2.513 0 1.482 1.079 2.912 1.23 3.113.15.2 2.122 3.24 5.14 4.545.718.31 1.278.495 1.716.634.72.23 1.374.197 1.892.12.577-.087 1.78-.727 2.03-1.43.25-.704.25-1.308.175-1.43-.075-.12-.276-.2-.577-.35z"/>
        </svg>
      </a>
      {/* Floating Direct Call Button */}
      <a
        href="tel:+919797933349"
        className="concierge-btn phone"
        title="Direct Reservations Line (+91 97979 33349)"
        aria-label="Call Zuri Cottage Reservations (+91 97979 33349)"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
    </aside>
  );
}
