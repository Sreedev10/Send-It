
import './index.css';

// SENDIT custom gradient logo
const brandMark = (size = 32, id = 'sendit-gradient') => `
  <svg
    class="sendit-symbol"
    width="${size}"
    height="${size}"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="SENDIT logo"
  >
    <defs>
      <linearGradient id="${id}" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#00D4FF"/>
        <stop offset="48%" stop-color="#3B82F6"/>
        <stop offset="100%" stop-color="#B833FF"/>
      </linearGradient>
    </defs>

    <path
      d="M12 23C12 13 23 8 35 10C43 11 48 15 51 20"
      stroke="url(#${id})"
      stroke-width="9"
      stroke-linecap="round"
    />
    <path
      d="M51 20L41 13L42 26"
      fill="url(#${id})"
      stroke="url(#${id})"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M52 41C52 51 41 56 29 54C21 53 16 49 13 44"
      stroke="url(#${id})"
      stroke-width="9"
      stroke-linecap="round"
    />
    <path
      d="M13 44L23 51L22 38"
      fill="url(#${id})"
      stroke="url(#${id})"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
`;

const icon = (name: string, size = 20) => {
  const paths: Record<string, string> = {
    home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1Z"/>',
    activity: '<path d="M3 12h4l3-9 4 18 3-9h4"/>',
    history: '<path d="M3 12a9 9 0 1 0 2.6-6.4L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.8 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.8-1l-1.7.6-1.4-2.4 1.4-1.1a8 8 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.6a8 8 0 0 1 1.8-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.8 1l1.7-.6 1.4 2.4-1.4 1.1a8 8 0 0 1 0 2Z"/>',
    upload: '<path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M20 16v4H4v-4"/>',
    download: '<path d="M12 4v12"/><path d="m7 11 5 5 5-5"/><path d="M20 16v4H4v-4"/>',
    laptop: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M2 21h20"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
    radio: '<circle cx="12" cy="12" r="2"/><path d="M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14M2 2a14 14 0 0 0 0 20M22 2a14 14 0 0 1 0 20"/>',
    folder: '<path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    cloud: '<path d="M20 16.2A4.5 4.5 0 0 0 18 7.5a6 6 0 0 0-11.6 1.7A4 4 0 0 0 7 17h12"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
    more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
  };

  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="1.7"
    stroke-linecap="round" stroke-linejoin="round"
    aria-hidden="true">${paths[name] ?? paths.file}</svg>`;
};

const root = document.querySelector<HTMLDivElement>('#root');

if (!root) {
  throw new Error('SENDIT root element was not found.');
}

root.innerHTML = `
  <div class="app-shell">

    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">
          ${brandMark(32, 'sendit-brand-gradient')}
        </div>
        <div>
          <div class="brand-name">SEND<span>IT</span></div>
          <div class="brand-caption">YOUR TRANSFER SPACE</div>
        </div>
      </div>

      <div class="nav-heading">WORKSPACE</div>

      <nav class="navigation">
        <button class="nav-item active" data-view="Home">
          ${icon('home')} <span>Home</span>
        </button>
        <button class="nav-item" data-view="Transfers">
          ${icon('upload')} <span>Transfers</span>
        </button>
        <button class="nav-item" data-view="Activity">
          ${icon('history')} <span>Activity</span>
        </button>
      </nav>

      <div class="sidebar-network">
        <div class="nav-heading">CONNECTION</div>
        <div class="network-status">
          <span class="status-dot"></span>
          <div>
            <strong>Local network</strong>
            <small>Discovery on standby</small>
          </div>
        </div>
      </div>

      <div class="sidebar-bottom">
        <button class="nav-item" data-view="Settings">
          ${icon('settings')} <span>Settings</span>
        </button>
        <div class="profile">
          <div class="profile-avatar">S</div>
          <div>
            <strong>My device</strong>
            <small>Windows desktop</small>
          </div>
          ${icon('more', 17)}
        </div>
      </div>
    </aside>

    <main class="main-content">
      <header class="topbar">
        <div class="breadcrumb">
          <span>Workspace</span>
          <span class="breadcrumb-divider">/</span>
          <strong id="page-title">Home</strong>
        </div>
        <div class="topbar-right">
          <div class="connection-pill">
            <span class="status-dot"></span>
            Local mode
          </div>
          <button class="icon-button" data-view="Settings" aria-label="Settings">
            ${icon('settings', 19)}
          </button>
        </div>
      </header>

      <div class="dashboard">

        <section class="welcome">
          <div>
            <div class="eyebrow">YOUR PERSONAL TRANSFER SPACE</div>
            <h1>Move things.<br/><span>Not limitations.</span></h1>
            <p>
              Your files belong everywhere you work.
              Move them between your devices, simply.
            </p>
          </div>

          <div class="visual-orbit" aria-hidden="true">
            <div class="orbit orbit-one"></div>
            <div class="orbit orbit-two"></div>
            <div class="orbit orbit-three"></div>
            <div class="orbit-center sendit-orbit-center">
              ${brandMark(36, 'sendit-orbit-gradient')}
            </div>
            <div class="orbit-device orbit-phone">${icon('phone', 20)}</div>
            <div class="orbit-device orbit-laptop">${icon('laptop', 22)}</div>
            <div class="orbit-device orbit-file">${icon('file', 18)}</div>
          </div>
        </section>

        <section class="quick-actions">
          <button class="action-card send-action" id="send-button">
            <div class="action-top">
              <div class="action-icon">${icon('upload', 23)}</div>
              <span class="action-arrow">${icon('arrow')}</span>
            </div>
            <div>
              <h2>Send files</h2>
              <p>Choose files and share them with another device.</p>
            </div>
            <span class="action-label">START A TRANSFER</span>
          </button>

          <button class="action-card receive-action" id="receive-button">
            <div class="action-top">
              <div class="action-icon">${icon('download', 23)}</div>
              <span class="action-arrow">${icon('arrow')}</span>
            </div>
            <div>
              <h2>Receive files</h2>
              <p>Get files from another device on your network.</p>
            </div>
            <span class="action-label">OPEN RECEIVING SPACE</span>
          </button>
        </section>

        <div class="section-grid">

          <section class="panel devices-panel">
            <div class="panel-header">
              <div>
                <h3>Device universe</h3>
                <p>Devices available around you</p>
              </div>
              <span class="standby-label">
                <span class="status-dot"></span> Standby
              </span>
            </div>

            <div class="device-empty">
              <div class="device-graphic">
                <div class="device-ring ring-a"></div>
                <div class="device-ring ring-b"></div>
                <div class="device-center">${icon('radio', 29)}</div>
              </div>
              <h4>Your space is quiet.</h4>
              <p>
                Nearby devices will appear here when
                discovery is available.
              </p>
            </div>

            <div class="panel-footer">
              ${icon('shield', 16)}
              <span>Local-first sharing · No cloud file storage</span>
            </div>
          </section>

          <section class="panel activity-panel">
            <div class="panel-header">
              <div>
                <h3>Recent activity</h3>
                <p>Your transfer timeline</p>
              </div>
              <button class="text-button" data-view="Activity">View all</button>
            </div>

            <div class="activity-empty">
              <div class="empty-icon">${icon('folder', 27)}</div>
              <h4>Nothing moved yet.</h4>
              <p>
                Your completed and incoming transfers
                will show up here.
              </p>
            </div>
          </section>

        </div>

        <footer class="footer">
          <span>SENDIT <b>•</b> YOUR FILES, YOUR DEVICES.</span>
          <span>VERSION 1.0 · LOCAL FIRST</span>
        </footer>

      </div>
    </main>
  </div>

  <input id="file-picker" type="file" multiple hidden />
  <div id="toast" class="toast" role="status"></div>
`;

let toastTimer: ReturnType<typeof setTimeout>;

function showToast(message: string) {
  const toast = document.querySelector<HTMLDivElement>('#toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('visible');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('visible');
  }, 3000);
}

// Navigation interactions
document.querySelectorAll<HTMLButtonElement>('[data-view]').forEach((button) => {
  button.addEventListener('click', () => {
    const view = button.dataset.view;
    if (!view) return;

    document.querySelectorAll('.nav-item').forEach((item) => {
      item.classList.remove('active');
    });

    document
      .querySelectorAll(`[data-view="${view}"]`)
      .forEach((item) => item.classList.add('active'));

    const pageTitle = document.querySelector('#page-title');
    if (pageTitle) pageTitle.textContent = view;

    if (view !== 'Home') {
      showToast(`${view} workspace is being prepared.`);
    }
  });
});

// File selection
const filePicker = document.querySelector<HTMLInputElement>('#file-picker');

document.querySelector('#send-button')?.addEventListener('click', () => {
  filePicker?.click();
});

filePicker?.addEventListener('change', () => {
  const files = filePicker.files;
  if (!files || files.length === 0) return;

  const totalSize = Array.from(files).reduce(
    (total, file) => total + file.size,
    0,
  );

  const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);

  showToast(
    `${files.length} file(s) selected · ${sizeInMB} MB. Transfer engine coming next.`,
  );

  filePicker.value = '';
});

document.querySelector('#receive-button')?.addEventListener('click', () => {
  showToast('Receiving space will be available with device discovery.');
});

console.log('SENDIT desktop interface initialized.');
