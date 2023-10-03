
function submitData(userName, UserEmail) {
    const userData = {
        name: userName,
        email: UserEmail,
    };

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Unauthorized Access');
        }
        return res.json();
    })
    .then(data => {
        const newId = data.id;
        appendIdToDom(newId);
    })
    .catch(error => {
        appendErrorToDom(error.message);
    });
}

function appendIdToDom(newId) {
    const idContainer = document.createElement('p');
    idContainer.textContent = `new ID : ${newId}`;
    document.body.appendChild(idContainer);
}

function appendErrorToDom(errorMessage) {
    const errorContainer = document.createElement('p');
    errorContainer.textContent = `Error: ${errorMessage}`;
    document.body.appendChild(errorContainer);
}