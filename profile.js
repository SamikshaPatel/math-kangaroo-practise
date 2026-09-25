// ─────────────────────────────────────────────────────────────
// SHARED PROFILE SYSTEM
// ─────────────────────────────────────────────────────────────

function getActiveProfile()  { return sessionStorage.getItem('mkp_profile')   || null; }
function setActiveProfile(n) { sessionStorage.setItem('mkp_profile', n); }

function getActiveKidId()    { return sessionStorage.getItem('mkp_kid_id')    || null; }
function setActiveKidId(id)  { sessionStorage.setItem('mkp_kid_id', id); }

function getActiveKidColor()      { return sessionStorage.getItem('mkp_kid_color') || '#2563eb'; }
function setActiveKidColor(color) { sessionStorage.setItem('mkp_kid_color', color); }

function getPdfAccess34()       { return sessionStorage.getItem('mkp_pdf_34') === 'true'; }
function setPdfAccess34(val)    { sessionStorage.setItem('mkp_pdf_34', val ? 'true' : 'false'); }
function getPdfAccess56()       { return sessionStorage.getItem('mkp_pdf_56') === 'true'; }
function setPdfAccess56(val)    { sessionStorage.setItem('mkp_pdf_56', val ? 'true' : 'false'); }

// Prefix a localStorage key with the active profile name
function profileKey(key) {
  const p = getActiveProfile();
  return p ? `${p}_${key}` : key;
}

// Redirect to index if no profile active
function requireProfile() {
  if (!getActiveProfile()) {
    window.location.replace('index.html');
    return false;
  }
  return true;
}

// Inject fixed profile chip (top-right corner)
function injectProfileChip() {
  const name  = getActiveProfile();
  if (!name) return;
  const color = getActiveKidColor();

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
  chip.onmouseenter = () => chip.style.borderColor = color;
  chip.onmouseleave = () => chip.style.borderColor = '#e5e7eb';
  chip.innerHTML = `
    <div style="width:26px;height:26px;border-radius:50%;background:${color};
      color:#fff;font-size:12px;font-weight:800;display:flex;align-items:center;
      justify-content:center;flex-shrink:0;">${name[0]}</div>
    <span>${name}</span>
  `;
  chip.onclick = async () => {
    sessionStorage.removeItem('mkp_profile');
    sessionStorage.removeItem('mkp_kid_id');
    sessionStorage.removeItem('mkp_kid_color');
    sessionStorage.removeItem('mkp_is_admin');
    if (typeof sbClient !== 'undefined') await sbClient.auth.signOut();
    window.location.href = 'index.html';
  };
  document.body.appendChild(chip);
}
