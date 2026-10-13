// Runs in MAIN world at document_start — before YouTube registers its listeners.
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return;
  // Video pages: /watch?v=… and live streams at /live/<id>
  if (!/^\/(watch|live\/)/.test(location.pathname)) return;

  const tag = document.activeElement?.tagName?.toLowerCase();
  if (tag === 'input' || tag === 'textarea' || document.activeElement?.isContentEditable) return;

  const isWindowed = document.documentElement.classList.contains('yt-max-windowed-fullscreen');

  // Latin layouts (QWERTY, AZERTY, Dvorak…): match the character the user sees.
  // Non-Latin input (Korean IME gives 'ㅈ', Cyrillic 'ц'…): fall back to the
  // physical key, since e.key no longer says 'w'.
  const isKey = (letter) => /^[a-z]$/i.test(e.key)
    ? e.key.toLowerCase() === letter
    : e.code === `Key${letter.toUpperCase()}`;

  // W key: toggle windowed fullscreen
  if (isKey('w')) {
    if (document.fullscreenElement) return;
    e.stopImmediatePropagation();
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('ytmax:toggle'));
    return;
  }

  // F key: if windowed FS is active, disable it first — synchronously, before
  // YouTube's handler runs — so native fullscreen starts from a clean state.
  if (isKey('f') && isWindowed) {
    window.dispatchEvent(new CustomEvent('ytmax:disable'));
    // Do NOT stop propagation — let YouTube's F handler proceed normally.
  }
}, true);
