const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const assert=require('assert');
const app=express();

const Tutorials=require('./schema.js');
var url=//localhost:27017/MyDb;
mongoose.connect(url);
const db=mongoose.connection;
/*app.set('view engine','pug');

app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/home',function(req,res){
    res.render('index',{
                name : "tutorialpoint",
                url  :"http://www.tutorialpoint.com"    });
});

app.get('/form',function(req,res){
    res.render('form');
});

app.post('/',function(req,res){
    console.log(req.body);
    res.send("request recieved");
});

app.get('/',function(req,res){
    res.send("welcome to the express app");
});

/*app.get('/:id',function(req,res){
    res.send("the specified id is"+ req.params.id);
});*/


db.on('error',console.error.bind(console,'Connection Error'));
app.listen(3000,function(){
    console.log("listening to the server at 3000");
});

