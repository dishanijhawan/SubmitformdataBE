const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); 
    // parse application/json 
app.use(bodyParser.json()); 

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname+"/form.html"))
})

app.post('/api/v1/post',(req,res)=>{
console.log(`Name is ${req.body.name}, Email is</h1> ${req.body.email} and Password is ${req.body.password}`);
res.send('<H1 style="color:green">SUBMITTED</H1>')
})

app.listen(1100,()=>{
    console.log("Running on terminal 1100!!..access it using localhost:1100 on the browser");
})
