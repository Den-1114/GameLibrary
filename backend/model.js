import mongoose from "mongoose";

const games = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    genre: {
        type: String
    },
    platform: {
        type: String
    },
    price: {
        type: Number
    },
    photo: {
        type: String
    }
}, {strict: false})

const Game = mongoose.model("Game", games)
export default Game