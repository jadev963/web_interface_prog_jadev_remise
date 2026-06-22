class TeamCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }
    connectedCallback(){
        this.render();
    }

    getName() {
        return this.getAttribute("name");
    }

    getGroup(){
        return this.getAttribute("group")
    }

    getPoints(){
        return this.getAttribute("points");
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                div{ border: 1px solid #ccc; padding: 10px; margin: 5px; border-radius: 5px }
                button {margin-top:8px; cursor: pointer; }
            </style>
            <div>
                <h3>${this.getName()}</h3>
                <p>Group: ${this.getGroup()}</p>
                <p>Points: ${this.getPoints()}</p>
                <button id="view-btn">ViewDetails</button>
            </div>
        `;
    }
}

customElements.define("team-card", TeamCard)

export { TeamCard };