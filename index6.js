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

    axios.post("https://crudcrud.com/api/26474ad38a384ca7a4469543a3649a4b/appointmentData" , obj)
    .then((response) => {
        showUserOnScreen(response.data);
        // console.log(response);
    })
    .catch((err) => {
        document.body.innerHTML = document.body.innerHTML + "<h4>Something went Wrong</h4>"
        console.log(err);
    })
    // localStorage.setItem(obj.email ,JSON.stringify(obj));
    // showUserOnScreen(obj);
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
