const btn = document.querySelector('.btn');

// btn.addEventListener('click', function(event){
//     event.preventDefault();
//     document.querySelector('#my-form').style.background = 'blue';
//     btn.style.background = 'aqua';
//     btn.style.color = 'black';
// })

// btn.addEventListener('mouseover', function(event){
//     event.preventDefault();
//     btn.style.color = 'yellow';
//     document.querySelector('body').style.background = 'green';
// })

// btn.addEventListener('mouseout', function(event){
//     event.preventDefault();
//     btn.style.color = 'white';
//     document.querySelector('body').style.background = 'brown';
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value==='' || emailInput.value===''){
        alert('Filled All Position');
    }else{
        // console.log(`${nameInput.value} ${emailInput.value}`);
        localStorage.setItem('userName', nameInput.value);
        localStorage.setItem('userEmail' , emailInput.value);
    }    
}