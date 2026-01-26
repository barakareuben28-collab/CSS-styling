import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

try {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} catch (err) {
  const el = document.createElement('div');
  el.style.position = 'fixed';
  el.style.top = 0;
  el.style.left = 0;
  el.style.right = 0;
  el.style.background = 'rgba(255,10,10,0.95)';
  el.style.color = '#fff';
  el.style.padding = '1rem';
  el.style.fontFamily = 'system-ui, monospace';
  el.textContent = 'Render error: ' + (err && err.message ? err.message : String(err));
  document.body.appendChild(el);
  console.error(err);
}

// Diagnostic: if nothing renders into #root after a short delay, show a helpful banner and log diagnostics.
setTimeout(() => {
  try {
    const root = document.getElementById('root');
    const content = root ? (root.innerHTML || '').trim() : '';
    if (!content) {
      const el = document.createElement('div');
      el.id = 'render-diagnostic';
      el.style.position = 'fixed';
      el.style.bottom = '0';
      el.style.left = '0';
      el.style.right = '0';
      el.style.background = 'rgba(255,140,0,0.95)';
      el.style.color = '#000';
      el.style.padding = '8px';
      el.style.fontFamily = 'system-ui, monospace';
      el.style.zIndex = '2147483647';
      el.textContent = 'No markup rendered into #root (root empty). Check browser console for errors and network failures (CSS/JS).';
      document.body.appendChild(el);
    }
  } catch (e) {
    console.error('RENDER_DIAG_ERR', e);
  }
}, 500);

