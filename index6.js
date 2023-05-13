function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailid.value;

    // localStorage.setItem('name' , name);
    // localStorage.setItem('email', email);

    const obj = {
        name: name,
        email: email
    }

    localStorage.setItem(obj.email ,JSON.stringify(obj));
    showUserOnScreen(obj);
}

function showUserOnScreen(obj){
    const parentelem = document.getElementById('item');
    const childelem = document.createElement('li');
    childelem.textContent = obj.name + '-' + obj.email
    parentelem.appendChild(childelem);
}