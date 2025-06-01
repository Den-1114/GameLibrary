import express from "express";
import http from "http";
import mongoose from "mongoose";
import Game from "./model.js";
import multer from "multer";
import cors from "cors"

const app = express();


const dbPassword = "CiO9pmHt4YK0VjS8"
const dbUsername = "denizkaya201215"

const uri = `mongodb+srv://${dbUsername}:${dbPassword}@games.8kn1xoi.mongodb.net/`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully!"))
.catch((error) => console.error("MongoDB connection error:", error));


app.use(express.static("public"));
app.use(cors());
app.use(express.json());


app.get("/", async (req, res) => {
    const games = await Game.find({})
    res.json(games)
})

app.get("/info/:id", async (req, res) => {
    const gameId = req.params.id;
    const game = await Game.find({_id: gameId})
    res.json(game)
})

app.post("/upload", multer().none(), (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const genre = req.body.genre
    const platform = req.body.platform
    const price = req.body.price
    const photo = req.body.photo
    
    console.log(title)
    console.log(description)
    console.log(genre)
    console.log(platform)
    console.log(price)
    console.log(photo)


    new Game({
        title: title,
        description: description,
        genre: genre,
        platform: platform,
        price: price,
        photo: photo,
    }).save()

})

const server = http.createServer(app);
server.listen(3000);
console.log("Listening on http://127.0.0.1:3000");
