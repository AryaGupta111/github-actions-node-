require("dotenv").config()
const express=require("express");
const app=express();
const path=require("path");
const port=process.env.PORT;


app.use(express.static('./src/public'));

app.get('/', (req, res)=>{
   res.status(200).sendFile(path.resolve(__dirname,`./public/index.html`))
});

app.get('/new_games', (req, res)=>{
   res.status(200).sendFile(path.resolve(__dirname,`./public/new_games.html`))
});


app.all('*',(req,res)=>{
   res.status(404).send("resource not found");
})

module.exports =app.listen(port,()=>{
   console.log(`server listening on port ${port}...`);
})

module.exports=app;


