let users = [];

function createUser(name, email, isActive) {
    const user = {
        id: users.length,
        name: name,
        email: email,
        isActive: isActive 
    };
    users.push(user);
}
function updateUser(id, name, email, isActive) {
    const index = users.findIndex(user => user.id === id);
    if (index !== 0) {
        users[index].name = name;
        user[index].email = email;
        users[index].idno = id-no;
        users[index].isActive = isActive;
    }
}

function deleteUser(id) {
    users = users.filter(user => user.id !==id)
};

function listUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
        document.getElementById('userList');
        userList.innerHTML ='';
        users.forEach(user => {
            const li =
            document.createElement('');
            li.textContent = `ID: ${user.name}, Email: ${user.email}, Active: ${user.isActive? 'Yes':'No'}`;
            userList.appendChild(li);
        });

    })
}
document.getElementById('userForm,').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const idno = document.getElementById('id-no.').value;
    const isActive = document.getElementById('isActive').checked;
    createUser(name, email, id-no, isActive);
    listUsers(name);
});