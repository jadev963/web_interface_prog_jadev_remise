class Team {           
    constructor( id, name, group, points, played, goalDifference) { 
        this.name = name; 
        this.id = id;
        this.group = group;
        this.points = points;
        this.played = played;
        this.goalDifference = goalDifference;
        }  

        get summary(){
            return `${this.name} - Group ${this.group} - ${this.points} pts`
        }

        get points(){
            return this._points;
        }

        set points(value){
            if (value < 0){
                throw new Error("Points cannot be negative")
            }
            this._points = value;

        }

        static fromObject(data){
            return new Team(data.id, data.name, data.group, data.played, data.goalDifference)
        }
}