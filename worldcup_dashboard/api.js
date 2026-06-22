async function fetchTeams() {
    const response = await fetch("teams.json");

    if(!response.ok){
        throw new Error("Failed to fecth teams");
    }
    const data = await response.json();
    console.log(data);

    return data

}

export{fetchTeams}