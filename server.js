var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');


////db////
const mongodb = require('mongodb').MongoClient;

/////////

 path= "public/uploads/record_0.wav";

var url = "mongodb://records:records123@ds153394.mlab.com:53394/records";
var obj;

async function main() {


    let data = await fs.readFile( path, {encoding: 'utf-8'}, function(err,data){
        if (!err) {console.log("d");}
    
        obj = data;
});
console.log(obj)
const client = await mongodb.connect(url)
  console.log('connected')

  let db = await client.db('records')

  // Reading in binary data from a file. data is a buffer.
 
  let res = await db.collection('records').insert({"data": obj,"na":"snir"})
  console.log(res)

  // Retrieve binary data from the database
//////////--< Multer stuff >--///////
}
main()
var multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, "record_" + counter+".wav")
    }
});

var upload = multer({ storage: storage })

//////////--< Multer stuff >--///////


var counter = 0;
var database = [];




app.use('/', express.static('public'))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/records', function (req, res) {
    res.json(database)
})


app.post('/test', upload.single('Data'), function (req, res) {

    database.push({
        "key": counter,
        "name": req.file.filename,
        "date": req.file.originalname,
        "size": req.file.size,
        "time" : req.body.content,
        "path": "/record_" + counter
    })
    ++counter;

})


var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})