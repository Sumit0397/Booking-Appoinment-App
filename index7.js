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

    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.onclick = () => {
        localStorage.removeItem(childelem);
        parentelem.removeChild(childelem);
    }

    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.onclick = () => {
        localStorage.removeItem(childelem);
        parentelem.removeChild(childelem);
        document.getElementById('name').value = obj.name;
        document.getElementById('email').value = obj.email;
    } 

    childelem.appendChild(deleteBtn);
    childelem.appendChild(editBtn);
    parentelem.appendChild(childelem);
}
window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/26474ad38a384ca7a4469543a3649a4b/appointmentData')
    .then((response) => {
        console.log(response);

        for(var i=0; i<response.data.length; i++){
            showListofRegisteredUser(response.data[i]);
        }
    })
    .catch((error) => {
        console.log(error);
    })

    // Object.keys(localStorage).forEach(key => {
    //     const user = JSON.parse(localStorage.getItem(key))
    //     showListofRegisteredUser(user)
    // })
})

function showListofRegisteredUser(user){
    const parentNode = document.getElementById('item');
    const createNewUserHtml = `<li id='${user.email}'>${user.name} - ${user.email}
                                    <button onclick=deleteUser('${user.email}')>Delete</button>
                                </li>
                                `
    console.log(createNewUserHtml)
    parentNode.innerHTML +=  createNewUserHtml;
    console.log(parentNode.innerHTML)
}

function deleteUser(email) {
    localStorage.removeItem(email)
    removeItemFromScreen(email)
}

function removeItemFromScreen(email){
    const parentNode = document.getElementById('item');
    const elem = document.getElementById(email)
    parentNode.removeChild(elem);
}
