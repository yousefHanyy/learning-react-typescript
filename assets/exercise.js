// ─── Reusable Exercise Widget ───
// Each .exercise contains:
//   - task text
//   - a .solution div (hidden until reveal)
// Adds a "Reveal solution" button that toggles .visible.

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.exercise').forEach((exercise) => {
    const solution = exercise.querySelector('.solution');
    if (!solution) return;

    const btn = document.createElement('button');
    btn.className = 'reveal-btn';
    btn.textContent = 'Reveal solution';

    exercise.appendChild(btn);

    btn.addEventListener('click', () => {
      const isVisible = solution.classList.toggle('visible');
      btn.textContent = isVisible ? 'Hide solution' : 'Reveal solution';
    });
  });
});

// ─── Code comment highlighter (shared with quiz.js / highlight.js) ───
(function () {
  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function highlight() {
    document.querySelectorAll("pre code").forEach((code) => {
      if (code.dataset.highlighted) return;
      const raw = code.textContent;
      if (!raw.includes("//") && !raw.includes("/*")) return;
      let esc = escapeHtml(raw);
      esc = esc.replace(/\/\*[\s\S]*?\*\//g, (m) => `<span class="code-comment">${m}</span>`);
      try {
        esc = esc.replace(/(?<![:\w])\/\/.*$/gm, (m) => `<span class="code-comment">${m}</span>`);
      } catch {
        esc = esc.replace(/\/\/.*$/gm, (m) => (m.includes("://") ? m : `<span class="code-comment">${m}</span>`));
      }
      esc = esc.replace(/<span class="code-comment">(<span class="code-comment">)/g, "$1");
      esc = esc.replace(/(<\/span>)<\/span>/g, "$1");
      code.innerHTML = esc;
      code.dataset.highlighted = "1";
    });
  }
  document.addEventListener("DOMContentLoaded", highlight);
  if (document.readyState !== "loading") highlight();
})();
