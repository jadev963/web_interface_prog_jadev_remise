async function fetchTeams() {
    const response = await fetch("teams.json");

    if(!response.ok){
        throw new Error("Failed to fecth teams");
    }
    const data = await response.json();

    return data

}

export{fetchTeams}