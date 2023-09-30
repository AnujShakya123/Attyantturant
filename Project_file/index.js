var express = require('express')
var ejs = require('ejs')
var bodyParser =require('body-parser');
var mysql =require('mysql')

mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node_project"
})



var app = express();

app.use(express.static("public"));
app.set('view engine','ejs');
app.listen(8081);
app.use(bodyParser.urlencoded({extended:true}));

//localhost:8081

app.get('/', function(req, res){


    var con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"node_project"
    })


    con.query("select * from Product",(err,result)=>{
        res.render('pages/index',{result:result});
    })

// res.render('pages/contact');
// res.render('pages/cart');
// res.render('pages/checkout');
// res.render('pages/blog-single-sidebar');
// res.render('product-details');


});


