// No `tabs` permission: we can't read tab URLs, so just message the active tab.
// Only YouTube pages run content.js; anywhere else sendMessage rejects quietly.
chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'toggle-windowed-fullscreen') {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab) chrome.tabs.sendMessage(tab.id, { action: 'toggle' }).catch(() => {});
  }
});
