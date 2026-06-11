//responsible for connecting everything together

import { Tournament } from "./tournament.js";
import {fetchTournaments, fetchRegistrations } from "./api.js";
import { showStatus,renderTournaments, renderRegistrations, clearAll } from "./ui.js";


//grab the buttons and container from the DOM
const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");
const tournamentsContainer = document.getElementById("tournaments-container");


//when the user clicks Load Trounaments

loadBtn.addEventListener("click", () => {
    showStatus("Loading tournaments ...");

    fetchTournaments()
        .then((data) => {
            //create tournament object from JSON data

            const tournaments = data.map((item) => Tournament.fromObject(item));
            renderTournaments(tournaments, tournamentsContainer, (tournament) =>{
                //this runs when the user clicks View registrations
                showStatus("Loading registrattion...");

                fetchRegistrations()
                    .then((registrations) => {
                        renderRegistrations(registrations, tournament);
                        showStatus("Registration loaded.");
                    })
                    .catch((error) => {
                        showStatus("Failed to load registration: " + error.message);
                    });
            });
            showStatus("Tournaments loaded");
        })
        .catch((error) => {
            showStatus("Failed to load torunaments:" + error.message);
        });
});

//when the use clicks Clear
        clearBtn.addEventListener("click", () => {
            clearAll();
        });
            
      

