var express = require('express');
var app = express();
var fs = require('fs');
var assert = require('assert')


////////////--- Database ---/////////////////

const mongodb = require('mongodb').MongoClient;
const path = "public/uploads/record_default.wav";
const url = "mongodb://records:records123@ds153394.mlab.com:53394/records";
var dbObj;

try
{
mongodb.connect(url, function (err, client) {
    assert.equal(null, err);
    dbObj = client.db('records');
});

}catch(err)
{
    console.log("Caught mongodb connector error , please refresh.");
}

////////////--- Database ---/////////////////



//////////--< Multer stuff >--///////

var multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, "record_default" + ".wav")
    }
});

var upload = multer({ storage: storage })

//////////--< Multer stuff end >--///////



//////////--< And the party begins... >--///////

app.use('/', express.static('public'));


//Cross origin allow appuse
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



//File uploading
app.post('/test', upload.single('Data'), function (req, res) {

    let data = fs.readFileSync(req.file.path);

    dbObj.collection('records').insertOne({ "data": data, "date": req.file.originalname, "time": req.body.content })

})

//Get data call
app.get('/db', function (req, res) {

    dbObj.collection('records')
        .find().limit(50).toArray(function (err, docs) {
            console.log("Found the following records");
            res.json(docs)

        });
});



var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

//////////--< And the party ends... >--///////

//////////--< Socket section ... >--/////////////

const io = require('socket.io')(server)
io.on('connection', function(socket) {
    console.log('A user connected');
 
  
 
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
    
    socket.on('data',(data)=>{
        console.log("--------------------------------------------------")
        console.log("   -------------Current chunk <-START->---------------")
        console.log("--------------------------------------------------")
        console.log(data);
        console.log("--------------------------------------------------")
        console.log("   -------------Current chunk <-END->---------------")
        console.log("--------------------------------------------------")

    })
 });
//////////--< Socket section end ... >--///////