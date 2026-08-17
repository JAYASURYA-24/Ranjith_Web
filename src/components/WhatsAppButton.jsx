export default function WhatsAppButton() {
  // Insert your REAL, VERIFIED Business WhatsApp Number here (with country code, no + or spaces)
  const phoneNumber = '919159869407'; 
  const message = encodeURIComponent('Hi! I would like to test the automatic reply.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="whatsapp-floating-container">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-btn"
        aria-label="Chat with us on WhatsApp"
        id="whatsapp-chat-btn"
      >
        {/* Tooltip */}
        <span className="whatsapp-tooltip">Chat with us</span>

        {/* WhatsApp Icon SVG */}
        <svg
          className="whatsapp-icon"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.3-1.9A13.9 13.9 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.4 1.1 1.2-4.3-.3-.4a11.6 11.6 0 1 1 9.8 5.5zm6.4-8.6c-.3-.2-2-.1-2.3-1.1-.3-.2-.5-.3-.7.1s-.8 1-1 1.2-.4.3-.7.1a9.2 9.2 0 0 1-2.7-1.7 10.2 10.2 0 0 1-1.9-2.3c-.2-.4 0-.6.2-.8l.5-.6.3-.5a.6.6 0 0 0 0-.6c-.1-.1-.7-1.7-1-2.3s-.6-.5-.8-.5h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.6 7.6 0 0 0 1.6 4 17.5 17.5 0 0 0 6.7 5.9c.9.4 1.7.6 2.3.8a5.5 5.5 0 0 0 2.5.2 4.1 4.1 0 0 0 2.7-1.9 3.4 3.4 0 0 0 .2-1.9c-.2-.3-.5-.4-.8-.6z" />
        </svg>

        {/* Subtle Pulse Ring */}
        <span className="whatsapp-pulse-ring"></span>
      </a>
    </div>
  );
}
