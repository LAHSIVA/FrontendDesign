import express from 'express';

const app=express();
const PORT=3000;

app.all(`/`,(req,res)=>{
    // console.log(`Request >`,req);
    // console.log(`Response >`,res);
    res.send(`Hello Express World!`);
});

const todos=[{
    id:'1',
    title:'Task1',
    completed:'false'
},{
    id:'2',
    title:'Task2',
    completed:'true'
}];

//Read

app.get('/todos',(req,res)=>{
    res.json(todos);

});

//Create

//Update

//Delete



app.listen(PORT,()=>{
    console.log(`Service is Running at Port ${PORT}`);
});