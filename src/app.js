require("dotenv").config()
const express=require("express");
const app=express();
const path=require("path");
const port=process.env.PORT;


app.use(express.static('./src/public'));

app.get('/', (req, res)=>{
   res.status(200).sendFile(path.resolve(__dirname,`./public/landing_page.html`))
});

app.get('/newsfeed', (req, res)=>{
   res.status(200).sendFile(path.resolve(__dirname,`./public/newsfeed.html`))
});

app.get('/searchnews', (req, res)=>{
   res.status(200).sendFile(path.resolve(__dirname,`./public/search.html`))
});

app.all('*',(req,res)=>{
   res.status(404).send("resource not found");
})

module.exports =app.listen(port,()=>{
   console.log(`server listening on port ${port}...`);
})

module.exports=app;


