import { fetchUsers } from "./api.js";
import { renderUsers, clearUsers } from "./ui.js";
import { setStatus } from "./status.js";

const loadUsersBtn = document.getElementById("load-users-btn");
const statusEl = document.getElementById("status");
const usersContainer = document.getElementById("users-container");
const clearBtn = document.getElementById("clear-btn");

loadUsersBtn.addEventListener("click", () => {
  setStatus(statusEl, "Loading users...");
  fetchUsers()
    .then((users) => {
      renderUsers(users, usersContainer);
      setStatus(statusEl, "Users loaded successfully.");
    })
    .catch((error) => {
      setStatus(statusEl, `Failed to load users: ${error.message}`);
    });
});

clearBtn.addEventListener("click", () => {
  clearUsers(usersContainer);
  setStatus(statusEl, "Users cleared.");
});