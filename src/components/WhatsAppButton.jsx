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
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.548 4.103 1.512 5.834L0 24l6.326-1.47a11.96 11.96 0 0 0 5.678 1.474c6.626 0 12.004-5.378 12.004-12.004C24 5.378 18.63 0 12.004 0zm0 21.966c-1.84 0-3.567-.495-5.06-1.359l-.363-.207-3.754.873.89-3.66-.23-.377A9.924 9.924 0 0 1 2.04 12.004C2.04 6.51 6.51 2.04 12.004 2.04c5.494 0 9.964 4.47 9.964 9.964 0 5.494-4.47 9.962-9.964 9.962zm5.468-7.584c-.301-.15-1.776-.877-2.052-.977-.275-.101-.475-.15-.676.15-.201.3-.776.977-.951 1.177-.175.2-.35.226-.65.076-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.779-1.671-2.08-.175-.3-.019-.462.13-.612.136-.135.302-.35.452-.525.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.628-.926-2.228-.243-.585-.49-.506-.676-.516-.175-.01-.375-.01-.576-.01-.2 0-.525.076-.8.375-.275.3-1.052 1.027-1.052 2.505 0 1.478 1.077 2.905 1.227 3.105.15.2 2.12 3.238 5.136 4.542.717.31 1.277.495 1.713.633.72.229 1.375.196 1.893.12.578-.086 1.776-.726 2.027-1.428.251-.702.251-1.303.176-1.428-.076-.125-.276-.2-.577-.35z" />
        </svg>

        {/* Subtle Pulse Ring */}
        <span className="whatsapp-pulse-ring"></span>
      </a>
    </div>
  );
}
