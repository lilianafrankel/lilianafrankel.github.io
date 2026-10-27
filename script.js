function setLang(l) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.hidden = el.dataset.lang !== l;
  });
  document.documentElement.lang = l;
  try { localStorage.setItem('lang', l); } catch (e) {}
}
var saved = null;
try { saved = localStorage.getItem('lang'); } catch (e) {}
setLang(saved || (navigator.language.startsWith('es') ? 'es' : 'en'));
