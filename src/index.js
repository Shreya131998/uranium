const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );

  app.use(
    function(req,res,next){
        let date=new Date()
        let forwarded=req.headers['x-forwarded-for']
        let ip=forwarded?forwarded.split(/,/)[0]:req.socket.remoteAddress
        
        
        console.log(`date is - ${date}`)
        console.log(`ip is - ${ip}`)
        console.log(`path is - ${req.path}`)
        console.log(req.ip)
        console.log(req.originalUrl)
        next()
    }
)


app.use('/', route);


app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});
