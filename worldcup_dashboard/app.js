import { fetchTeams } from "./api.js"
import { renderTeams } from "./ui.js"
import {Team} from "./team.js";
import "./team-card.js";

const loadBtn = document.getElementById("load-teams");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status");
const teamsContainer = document.getElementById("teams-container");
const detailsContainer = document.getElementById("details-container");


loadBtn.addEventListener("click", async () => {
    console.log("clicked");
    status.textContent = "Loading temas ...";
    const data = await fetchTeams();
    const teams = data.map(obj => Team.fromObject(obj));
    console.log(teams)
    renderTeams(teams, teamsContainer);
    status.textContent = "Teams Loaded successfully.";
});

clearBtn.addEventListener("click", () => {
    teamsContainer.innerHTML = "";
    detailsContainer.innerHTML = "<p>No team selected yet.</p>";
    status.textContent = "Dashboard cleared.";
});