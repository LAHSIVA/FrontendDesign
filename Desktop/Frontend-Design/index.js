import express from 'express';

const app=express();
const PORT=3000;

app.all(`/`,(req,res)=>{
    console.log(`Request >`,req);
    console.log(`Response >`,res);
    res.send(`Hello Express World!`);
});

app.listen(PORT,()=>{
    console.log(`Service is Running at Port ${PORT}`);
});