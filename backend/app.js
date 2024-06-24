import express from 'express';




const app = express();

const PORT = 4000;










app.get("/", (req, res)=>{
   res.send("You can Create an API")
})

app.listen(PORT, ()=>{
    console.log(`Server is Working on PORT : ${PORT}`)
})