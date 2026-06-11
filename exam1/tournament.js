//this is for tournament class

export class Tournament{
// constructor receive a plain object and store eahc value
    constructor(id, name, game, entryFee, maxPlayers, registeredPlayers, status){
        this.id = id;
        this.name = name;
        this.game = game;
        this.entryFee = entryFee;
        this.registeredPlayers = registeredPlayers;
        this.maxPlayers = maxPlayers;
        this.status = status

    }

    //getter -sportsleft
    //getetr accessed like property

    get spotleft() {
        return this.maxPlayers - this.registeredPlayers;
    }

    //setter - maxplayers
    //setter runs when assign value
    //__maxplayer store the real value privately

    set maxPlayers(value){
        if (value <= 0){
            throw new Error("maxPlayers must be greater than 0");
        }
        if (value < this.registeredPlayers){
            throw new Error("maxPlayers cannot be less than registeredPlayers");
        }
        this.__maxPlayers = value;
    }

    get maxPlayers(){
        return this.__maxPlayers;
    }

    //STATIC method from object data
    static fromObject(data){
        return new Tournament(
            data.id,
            data.name,
            data.game,
            data.entryFee,
            data.maxPlayers,
            data.registeredPlayers,
            data.status
        );
    }
}