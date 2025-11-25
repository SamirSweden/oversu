const express = require('express')
const path = require('path')

const app = express();
const PORT = 3000;


app.use(express.json())
app.use(express.static("public")) 

app.get("/", (req , res) => {
    res.sendFile(path.join(__dirname, "public" , "index.html"))
})


app.get("/connect", (req , res) => {
    res.sendFile(path.join(__dirname, "public" , "connect.html"))
})


app.post("/api/connect", (req , res) => {
    const { url , port } = req.body;

    console.log("Received connect request:", url, port);

    if (!url || !port) {
        return res.status(400).json({message: "Invalid data"})
    }

    res.json({message: "Connected successfully!"})

    
})


app.listen(PORT, () => {
    const name = "Azimov";
    console.log(`${name} website -> http://localhost:${PORT}`);
})






