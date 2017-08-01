
var app=express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine','ejs');
app.post('C:\Users\Shruthi\Downloads\shopping cart\new\payment',urlencodedParser,function(req,res){
console.log(req.body);
});