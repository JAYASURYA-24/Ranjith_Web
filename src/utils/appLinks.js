export const PLAYSTORE_LINK = 'https://play.google.com/store/apps/details?id=com.reshine.user';
export const APPSTORE_LINK = 'https://apps.apple.com/app/reshine/id6470000000';
export const PARTNER_PLAYSTORE_LINK = 'https://play.google.com/store/apps/details?id=com.reshine.partner';

export const handleAppDownload = (e) => {
  if (e && e.preventDefault && e.target && e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
    e.preventDefault();
  }
  if (!e || !e.target || e.target.tagName !== 'A' || e.target.getAttribute('href') === '#') {
    window.open(PLAYSTORE_LINK, '_blank', 'noopener,noreferrer');
  }
};

export const handlePartnerAppDownload = (e) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  window.open(PARTNER_PLAYSTORE_LINK, '_blank', 'noopener,noreferrer');
};
