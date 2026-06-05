export const PLAYSTORE_LINK = 'https://play.google.com/store/apps/details?id=com.reshine.app';
export const APPSTORE_LINK = 'https://apps.apple.com/in/app/reshine/id123456789';

// Partner App Links (Placeholder links - update as needed)
export const PARTNER_PLAYSTORE_LINK = 'https://play.google.com/store/apps/details?id=com.reshine.partner';
export const PARTNER_APPSTORE_LINK = 'https://apps.apple.com/in/app/reshine-partner/id123456789';

export const handleAppDownload = (e) => {
  if (typeof window === 'undefined') return;
  
  // Always prevent default to stop scrolling to #download
  e.preventDefault();
  
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  // iOS and Mac detection
  if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && !window.MSStream) {
    window.open(APPSTORE_LINK, '_blank');
    return;
  }
  
  // Android and default fallback (Windows/Linux/etc)
  window.open(PLAYSTORE_LINK, '_blank');
};

export const handlePartnerAppDownload = (e) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  if (typeof window === 'undefined') return;

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // iOS and Mac detection
  if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && !window.MSStream) {
    window.open(PARTNER_APPSTORE_LINK, '_blank');
    return;
  }

  // Android and default fallback (Windows/Linux/etc)
  window.open(PARTNER_PLAYSTORE_LINK, '_blank');
};
