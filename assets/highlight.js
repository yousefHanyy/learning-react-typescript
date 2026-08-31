// ─── Code comment highlighter ───
// Wraps // and /* */ comments in <span class="code-comment"> for styling.
// Runs on DOMContentLoaded; idempotent via data-highlighted.

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlightComments() {
  document.querySelectorAll("pre code").forEach((code) => {
    if (code.dataset.highlighted) return;
    const raw = code.textContent;
    if (!raw.includes("//") && !raw.includes("/*")) return;

    let esc = escapeHtml(raw);

    // block comments first (so // inside /* */ doesn't double-wrap)
    esc = esc.replace(/\/\*[\s\S]*?\*\//g, (m) => `<span class="code-comment">${m}</span>`);
    // line comments — negative lookbehind avoids https:// and similar
    // fallback for browsers without lookbehind: the .replace still works for 99% of cases
    try {
      esc = esc.replace(/(?<![:\w])\/\/.*$/gm, (m) => `<span class="code-comment">${m}</span>`);
    } catch {
      esc = esc.replace(/\/\/.*$/gm, (m) => {
        // undo wrapping if it was a URL fragment (contains :// before)
        if (m.includes("://")) return m;
        return `<span class="code-comment">${m}</span>`;
      });
    }
    // undo double-wrapping inside already-wrapped block comments
    esc = esc.replace(/<span class="code-comment">(<span class="code-comment">)/g, "$1");
    esc = esc.replace(/(<\/span>)<\/span>/g, "$1");

    code.innerHTML = esc;
    code.dataset.highlighted = "1";
  });
}

document.addEventListener("DOMContentLoaded", highlightComments);
