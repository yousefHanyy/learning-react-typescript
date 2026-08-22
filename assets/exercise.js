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
