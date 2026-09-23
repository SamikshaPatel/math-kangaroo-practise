// ─────────────────────────────────────────────────────────────
// SHARED PROFILE SYSTEM
// ─────────────────────────────────────────────────────────────
const PROFILES = [
  { name: 'Anishka', passcode: '5678', color: '#7c3aed' },
  { name: 'Nivaan',  passcode: '1234', color: '#2563eb' },
  { name: 'Vivan',   passcode: '9999', color: '#0891b2' },
];

function getActiveProfile() {
  return sessionStorage.getItem('mkp_profile') || null;
}

function setActiveProfile(name) {
  sessionStorage.setItem('mkp_profile', name);
}

function getProfileConfig(name) {
  return PROFILES.find(p => p.name === name) || null;
}

// Prefix a localStorage key with the active profile name
function profileKey(key) {
  const p = getActiveProfile();
  return p ? `${p}_${key}` : key;
}

// Call on every protected page. Redirects to index.html if no profile active.
function requireProfile() {
  if (!getActiveProfile()) {
    window.location.replace('index.html');
    return false;
  }
  return true;
}

// Append a fixed profile chip to the page body
function injectProfileChip() {
  const name = getActiveProfile();
  if (!name) return;
  const cfg = getProfileConfig(name);
  if (!cfg) return;

  const existing = document.getElementById('profile-chip');
  if (existing) existing.remove();

  const chip = document.createElement('button');
  chip.id = 'profile-chip';
  chip.title = 'Switch profile';
  chip.style.cssText = [
    'position:fixed', 'top:14px', 'right:16px', 'z-index:400',
    'background:#fff', 'border:1.5px solid #e5e7eb', 'border-radius:99px',
    'padding:5px 12px 5px 6px', 'display:flex', 'align-items:center', 'gap:7px',
    'font-size:13px', 'font-weight:700', 'cursor:pointer',
    'box-shadow:0 1px 4px rgba(0,0,0,.08)', 'font-family:inherit',
    'transition:border-color .15s',
  ].join(';');
  chip.onmouseenter = () => chip.style.borderColor = cfg.color;
  chip.onmouseleave = () => chip.style.borderColor = '#e5e7eb';

  chip.innerHTML = `
    <div style="width:26px;height:26px;border-radius:50%;background:${cfg.color};
      color:#fff;font-size:12px;font-weight:800;display:flex;align-items:center;
      justify-content:center;flex-shrink:0;">${name[0]}</div>
    <span>${name}</span>
  `;
  chip.onclick = () => {
    sessionStorage.removeItem('mkp_profile');
    window.location.href = 'index.html';
  };
  document.body.appendChild(chip);
}
