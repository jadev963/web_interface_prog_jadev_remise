//render the interface
export function showStatus(message) {
    const statusArea = document.getElementById("status-area");
    statusArea.textContent = message;
}


export function renderTournaments(tournaments, container,onViewClick){
    container.innerHTML = "";

    //loop in each tournament and create a card
    tournaments.forEach((tournament) => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${tournament.name}</h5>
                    <p class="card-text"><strong>Game:</strong> ${tournament.game}</p>
                    <p class="card-text"><strong>Entry FEE:</strong> $${tournament.entryFee}</p>
                    <p class="card-text"><strong>Game:</strong> ${tournament.maxPlayers}</p>
                    <p class="card-text"><strong>Game:</strong> ${tournament.registeredPlayers}</p>
                    <p class="card-text"><strong>Game:</strong> ${tournament.spotsLeft}</p>
                    <p class="card-text"><strong>Game:</strong> ${tournament.status}</p>
                </div>
            </div>
            `;
            const btn = document.createElement("button");
            btn.className = "btn btn-primary mt-2";
            btn.textContent = "View registrations";
            btn.addEventListener("click", () => {
                onViewClick(tournament);
            });

            col.querySelector(".card-body").appendChild(btn);
            container.appendChild(col);
    });
}

export function renderRegistrations(registrations, tournament){
    const section = document.getElementById("registrations-section");

    const filtered = registrations.filter((reg) => reg.tournamentId === tournament.id);

    if (filtered.length === 0) {
        section.innerHTML = `
        <h2>Registrations</h2>
        <div class="alert alert-warning"> No registration found for this tournament.</div>
        `;
        return;
    }

    const confirmed = filtered.filter((reg) => reg.status === "confirmed");
    const totalConfirmed = confirmed.length;
    const expectedRevenue = totalConfirmed * tournament.entryFee;

    let cards = "";
    filtered.forEach((reg) => {
        cards += `
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${reg.playerName}</h5>
                        <p class="card-text">Gamer Tag: ${reg.gamerTag}</p>
                        <p class="card-text">ticket Type: ${reg.ticketType}</p>
                        <p class="card-text">Status: ${reg.status}</p>
                    </div>
                </div>
            </div>
        `;
    });

    section.innerHTML = `
        <h2>Registrations for ${tournament.name}</h2>
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">Summary</h5>
                <p class="card-text">Total Registrations: ${filtered.length}</p>
                <p class="card-text">Confirmed Players: ${totalConfirmed}</p>
                <p class="card-text">Expected Revenue: $${expectedRevenue}</p>
                <p class="card-text">Spots Left: ${tournament.spotsLeft}</p>
            </div>
        </div>
        <div class="row">${cards}</div>
    `;
}

export function clearAll() {
    const container = document.getElementById("tournaments-container");
    const section = document.getElementById("registrations-section");

    container.innerHTML = `<p class="text-muted">No tournaments loaded yet. Click "Load Tournaments" to begin.</p>`;
    section.innerHTML = `
        <h2>registrations</h2>
        <p class="text-muted"> Select a torunament to view its registration.</p>
    `;

    showStatus("");
}