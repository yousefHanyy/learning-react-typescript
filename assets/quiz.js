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
