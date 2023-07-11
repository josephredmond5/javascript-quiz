const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
e.preventDefault();

let score = 0;
const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]; // this looks at the one what is checked 


// check answers
userAnswers.forEach((answer, index) => { 
if(answer === correctAnswers[index]){ // checks if the answer is the same as the correct answer in the radio buttons
    score += 25;
}
});

console.log(score); // if they are all incorect we should see 0 in the console & 25 for a correct answer

});