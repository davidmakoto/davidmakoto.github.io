// Shared theme toggle + media fallback. Loaded with `defer` on every page.

function applyTheme(next) {
  document.documentElement.setAttribute('data-theme', next);
  var btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = next === 'dark' ? 'Light' : 'Dark';
  try { localStorage.setItem('theme', next); } catch (e) {}
}

function toggleTheme() {
  var cur = document.documentElement.getAttribute('data-theme');
  var dark = cur ? cur === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(dark ? 'light' : 'dark');
}

(function initTheme() {
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved);
  } else {
    var btn = document.getElementById('themeBtn');
    if (btn) btn.textContent = matchMedia('(prefers-color-scheme: dark)').matches ? 'Light' : 'Dark';
  }
})();

// Show a labelled placeholder instead of a broken image when a screenshot is missing.
document.querySelectorAll('.project-media img, .detail-shot img').forEach(function (img) {
  img.addEventListener('error', function () {
    img.parentElement.classList.add('no-media');
  });
  if (img.complete && img.naturalWidth === 0) {
    img.parentElement.classList.add('no-media');
  }
});
