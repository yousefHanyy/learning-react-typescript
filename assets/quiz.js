document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz').forEach((quiz) => {
    const answers = JSON.parse(quiz.dataset.answers || '[]');
    const submit = document.createElement('button');
    submit.className = 'quiz-submit';
    submit.textContent = 'Check Answer';

    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback';

    quiz.appendChild(submit);
    quiz.appendChild(feedback);

    submit.addEventListener('click', () => {
      const selected = quiz.querySelector('input[type="radio"]:checked');
      if (!selected) {
        feedback.textContent = 'Select an answer first.';
        feedback.className = 'quiz-feedback wrong';
        return;
      }
      const why = selected.closest('label')?.dataset.why || '';
      const isCorrect = answers.includes(selected.value);

      feedback.textContent = '';
      const verdict = document.createElement('strong');
      verdict.textContent = isCorrect ? 'Correct! ' : 'Not quite. ';
      feedback.appendChild(verdict);
      feedback.appendChild(
        document.createTextNode(why || (isCorrect ? '' : 'Try again.'))
      );
      feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'wrong'}`;
    });
  });
});

// ─── Code comment highlighter (shared with exercise.js / highlight.js) ───
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
