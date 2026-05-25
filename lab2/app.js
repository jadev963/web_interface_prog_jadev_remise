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
        card.className = "col";
        card.innerHTML = "";

        card.innerHTML = `
        <div class="card h-100 p-3">
            <h2>${user.name}</h2>
            <p>Email: ${user.name}</p>
            <p>Phone: ${user.phone}</p>
            <p>City: ${user.address.city}</p>
            <p>Company: ${user.company.name}</p>
            <button id="posts-btn-${user.id}">Load Posts</button>
            div id="posts-${user.id}"></div>
        </div>
        `;
        usersGrid.appendChild(card);
        const postsBtn = document.getElementById(`posts-btn-${user.id}`);
        postsBtn.addEventListener("click", () => loadPostsForUser(user, card));
    }

    function loadPostsForUser(user, card) {
      
        setStatus("Loading posts ...");

        fetch(POSTS_API)
        .then((response) => {
            if (!response.ok){
                throw new Error(`HTTP Error : ${response.status}`);
            }
            return response.json();
        })
        .then((posts) =>{
            const userPosts = posts.filter((post) => post.userId === user.id);
            const firstThree = userPosts.slice(0, 3);
            renderPosts(firstThree, card);
            setStatus("posts loaded successfully!");
        })
        .catch((error) => {
            setStatus(`failes to load posts: ${error.message}`);
        });
    }

    function renderPosts(posts, card) {
        
        posts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `;
            card.appendChild(postDiv);
        });

    }

    

