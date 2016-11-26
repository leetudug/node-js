var express= require('express');
var bp= require('body-parser');
var _ = require('undescore');
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

app.get('/getmytask/:id',function(req,res)
{
	var todoid=parseInt(req.params.id,10);
	var matchedtodo=_findwhere(task,{id:todoid})

	var matachedtodo;
	task.forEach(function(todo) {
	if(todoid===todo.id)
	{
		matachedtodo=todo;
	}
	});

	if(matachedtodo){
		res.json(matachedtodo);
	}else{
		res.status(404).send();
	}

});

app.get('/getmytask', function(req,res)
{
	res.json(mytasks);
});
});

app.post('/postmytask', function(req,res)
{
	var data=req.body;
	data.id=taskid++;
	mytasks.push(data);
	res.json(data);
});

app.delete('/deletemytask/:id', function(req,res)
{
	var todoid=parseInt(req.param.id,10);
	var matchedtodo=_findwhere(task,{id:todoid});
	if(!matchedtodo)
	{
		res.status(404).json("error");
	}
	else
	{
		task-_without(task,matchedtodo);
		res.json(matchedtodo);
	}
});





app.listen(3000, function() {
	
		console.log('app is running on port 3000');
)
});