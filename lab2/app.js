const USERS_API = "https://jsonplaceholder.typicode.com/users";
const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

const btnLoadUsers = document.getElementById("btn-load-users");
const btnClear = document.getElementById("btn-clear");
const statusArea = document.getElementById("status-area");
const usersGrid = document.getElementById("users-grid");

btnLoadUsers.addEventListener("click", loadUsers);
btnClear.addEventListener("click", clearDashboard);

function setStatus(message) {
    statusArea.textContent = message;
}

function clearDashboard() {
    usersGrid.innerHTML = "";
    setStatus("");
}

function loadUsers() {

    setStatus("Loading users ...");

    fetch(USERS_API)
        .then((response) => {
            if (!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
        .then((users) =>{
            const firstFives = users.slice(0, 5);
            firstFives.forEach((user) => renderUserCard(user));

            setStatus("Users loaded successfully!");
        })
        .catch((error) => {
            setStatus(`Failes to load Users: ${error.message}`);
        });
    }

    function renderUserCard(user) {

        const card = document.createElement("div");

        card.innerHTML = `
        <h2>${user.name}</h2>
        <p>Email: ${user.name}</p>
        <p>Phone: ${user.phone}</p>
        <p>City: ${user.address.city}</p>
        <p>Company: ${user.company.name}</p>
        <button id="posts-btn-${user.id}">Load Posts</button>
        `;
        usersGrid.appendChild(card);
    }

