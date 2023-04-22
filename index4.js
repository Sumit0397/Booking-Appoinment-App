// const btn = document.querySelector('.btn');

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
const items = document.getElementById('item');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value==='' || emailInput.value===''){
        alert('Filled All Position');
    }else{
        // console.log(`${nameInput.value} ${emailInput.value}`);
        // localStorage.setItem('userName', nameInput.value);
        // localStorage.setItem('userEmail' , emailInput.value);
        let myObj = {
            name : nameInput.value,
            email : emailInput.value
        };
        // convert the object to string element by using JSON
        let myObj_toString = JSON.stringify(myObj);
        //console.log(myObj_toString);

        localStorage.setItem(myObj.email , myObj_toString);
        // console.log(localStorage);

        // create li
        const li = document.createElement('li');
        const userName = document.createTextNode(nameInput.value);
        const userEmail = document.createTextNode(' ' + emailInput.value);
        li.appendChild(userName);
        li.appendChild(userEmail);
        items.appendChild(li);
        
        
        // create a delete button and append it with li
        const delbtn = document.createElement('button');
        delbtn.className = 'btn-primary  btn-sm float-right delete';
        delbtn.appendChild(document.createTextNode('delete'));
        
        li.appendChild(delbtn);
        items.appendChild(li);

        
    }    
}

// remove list from items
items.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        items.removeChild(li);
        localStorage.removeItem(emailInput.value);
    }
}
