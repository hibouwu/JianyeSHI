// The page remains usable without JavaScript: the address and mailto link are HTML.
const emailLink = document.getElementById('contact-email');
const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');

if (emailLink && copyButton && copyStatus) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    copyButton.disabled = true;
    copyStatus.textContent = '';
    try {
      await navigator.clipboard.writeText(emailLink.textContent.trim());
      copyStatus.textContent = copyButton.dataset.success;
    } catch {
      const selection = window.getSelection();
      if (selection) {
        const range = document.createRange();
        range.selectNodeContents(emailLink);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      copyStatus.textContent = copyButton.dataset.failure;
    } finally {
      copyButton.disabled = false;
    }
  });
}
