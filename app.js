const express= require('express');
const data=require('./data/ipl.json');
const app=express();
app.set('view engine','hbs');
app.get('/',(req,res)=>
{
    res.render('index.hbs',{item:data})
})
const server =app.listen(8000,()=>
{
    console.log('listening on 8000');
});