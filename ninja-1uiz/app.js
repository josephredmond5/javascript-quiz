const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

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

// console.log(score); // if they are all incorect we should see 0 in the console & 25 for a correct answer


// Update the content of the 'span' element in 'result' to display the percentage stored in 'score'.
scrollTo(0, 0);
result.querySelector('span').textContent = `${score}%` // template literal
result.classList.remove('d-none'); // removing the d-none class

let output = 0; // this below animates the numbers when you finish the quiz and get your score
const timer = setInterval(() => { // fires every 10 miliseconds
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
        clearImmediate(timer);
    } else{
        output++;
    }
}, 10);

});


// WINDOW OBJECT (global object) // the mother of all objects

// console.log('hello');
// window.console.log('hello'); // this is the same as above

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form')) // this is the same as above

// alert('hello');
// window.alert('hello'); // same as above

// setTimeout(() => {
     // do something
// }, 3000);
// // window.setTimeout(3000) // same as above

// let i = 0;
// const timer = setInterval(() => { // carrys on firing the function every 1000 milisenconds 
//     console.log('hello')
//     i++;
//     if(i === 5){
//         clearInterval(timer);
//     }
// }, 1000);

