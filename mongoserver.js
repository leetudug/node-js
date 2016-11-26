var express= require('express');
var bp= require('body-parser');
var _ = require('underscore');
var app= express();
var MongoClient=require('mongodb').MongoClient


var db;
var app= express();
var taskid=1;
app.use(express.static('public'));
app.use(bp.json());

var mytasks =[
	{
		description:'go to market',
		completed:true
	},
	{
		description:'go to mmovie',
		completed:false
	},
	{
		description:'go to home',
		completed:true
	}
]

MongoClient.connect('mongodb://admin:admin@ds111188.mlab.com:11188/pradb', (err,database) => {
	if(err) return console.log(err)
	db=database;
});

app.post('/postdata', (req,res) => {
		db.collection('userdb', save(req.body, (err,result) => {
		if(err) return console.log(err)
			console.log('record saved');
	})
)
});


app.put('/updatedata', (req, res) => {
	db.collection('userdb')
	.findOneAndUpdate({description: req.body.description}, {
		$set: {
			description: req.body.description,
			completed: req.body.completed
		}
	}, {
		sort: {_id: -1},
		upsert: true
	}, (err, result) => {
		if(err) return res.send(err)
			res.send(result)
	})
})



app.listen(3000, function() {
	
		console.log('app is running on port 3000');

});