function submitQuiz() 
{
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    let score = 0;
    for (const entry of formData.entries()) 
    {
        const question = entry[0];
        const answer = entry[1];
        if (question === 'q1' && answer === '5') 
        {
            score++;
        }
        if (question === 'q2' && answer === '5') 
        {
            score++;
        }
    }
    document.getElementById('score').textContent = 'You answered correctly ' + score + ' questions.';
    document.getElementById('result').style.display = 'block';
    form.style.display = 'none';
}