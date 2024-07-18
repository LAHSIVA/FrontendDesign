import express from 'express';
import bodyParser from 'body-parser';

const app=express();

app.use(bodyParser.json());
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

app.post('/todos',(req,res)=>{
    const newtodo=req.body;
    todos.push(newtodo);
    res.json({
        message:'new TODO Added!'
    });
});

//Update

app.put('/todos/:id',(req,res)=>{
    const newtododata=req.body;
    const todoparamId=req.params.id;

    const todoIndex=todos.findIndex(td=>td.id ===todoparamId);

    if (todoIndex !== -1){
        todos[todoIndex]={
            id:todoparamId,
            ...newtododata,
        }
    }
    res.json({
        message:`Todo Updated Successfully`
    })


})

//Delete

app.delete('/todos/:id',(req,res)=>{
    const todoparamId=req.params.id;
    const todoIndex=todos.findIndex(td=>td.id ===todoparamId);

    if(todoIndex!==-1){
        todos.splice(todoIndex,1);
    }

    res.json({
        message:`Todo Deleted Successfully`
    });


});



app.listen(PORT,()=>{
    console.log(`Service is Running at Port ${PORT}`);
});