import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('MAIN_MODULE_EXECUTED');

try {
  console.log('ABOUT_TO_RENDER');
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  console.log('RENDER_CALL_DONE');
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
      console.log('RENDER_DIAG', {
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'n/a',
        innerWidth: typeof window !== 'undefined' ? window.innerWidth : 'n/a',
        innerHeight: typeof window !== 'undefined' ? window.innerHeight : 'n/a',
        cssLinks: Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href),
        scripts: Array.from(document.querySelectorAll('script')).map(s => s.src || '[inline]')
      });
    }
  } catch (e) {
    console.error('RENDER_DIAG_ERR', e);
  }
}, 500);

