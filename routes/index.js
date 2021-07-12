var express = require('express');
var router = express.Router();
var db = require('../config/db');
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});
router.get('/classification', function (req, res) {
    res.render('waste/classification', { title: 'Express' });
});
router.get('/encyclopedias', function (req, res) {
    res.render('waste/encyclopedias', { title: 'Express' });
});
router.get('/game', function (req, res) {
    res.render('waste/game', { title: 'Express' });
});

router.get('/selectWaste', function (req, res) {
    res.render('waste/selectWaste', { title: 'Express' });
});
router.get('/addWaste', function (req, res) {
    res.render('waste/addWaste', { title: 'Express' });
});
router.get('/selectUsers', function (req, res) {
    res.render('user/selectUsers', { title: 'Express' });
});

router.get('/deleteUser', function (req, res) {
	var username = req.query.username;
	
	// console.log(content);	
	var sql = 'delete from users where username="' + username+'"';
	db.query(sql, function (err, result) {
		if (err) {
			console.log(err);
		}
		res.render('user/selectUsers',{title:'Express'})
	})
})

router.get('/getUsers', function (req, res) {
    let sql="select * from users";
    let mydata = [];
    db.query(sql,(err,rows)=>{
		if(err){
			res.json({err:"出错了！"})
		}
		else {
			// // console.log(rows);
			
			for(let data of rows)
			{
				// // console.log(data);
				mydata.push(data);
			}
			// // console.log(mydata);
			res.writeHead(200, {
				"Content-Type": "application/json"
			});
			res.write(JSON.stringify(mydata));
			res.end();
		};
	});
})

router.get('/add', function (req, res) {
	var result = req.query.result;
	var wastename = req.query.wastename;
	var extend = req.query.extend;
	var time = req.query.time;
	var waste = [result, wastename,extend,time];
    var sql = 'insert into waste(result,wastename,extend,time) values(?,?,?,?)';
    db.query(sql,waste,function(err,result){
        if (err) {
			console.log(err)
		};
        // // console.log("!!!",result)
		res.render('waste/selectWaste',{title:'Express'})
    })
});
router.get('/deleteWaste', function (req, res) {
	var wastename = req.query.wastename;
	
	// console.log(content);	
	var sql = 'delete from waste where wastename="' + wastename+'"';
	db.query(sql, function (err, result) {
		if (err) {
			console.log(err);
		}
		res.render('waste/selectWaste',{title:'Express'})
	})
})
router.get('/updateWaste', function (req, res) {
	var wastename = req.query.wastename;
	var result = req.query.result;
	var extend = req.query.extend;
	var time = req.query.time;
	var sql = 'update waste set result="'+result+'",wastename="'+wastename+'",extend="'+extend+'",time="'+time+'" where wastename="'+wastename+'"';
	// console.log(sql);
	
	db.query(sql, function (err, result) {
		if (err) {
			console.log(err);
		}
		res.render('waste/selectWaste',{title:'Express'})
	})
})

router.get('/selectWastes', function(req,res){
	let wastename = req.query.wastename;
	console.log(wastename)

	let sql = 'select * from waste where wastename like "%' + wastename+'%"';
	db.query(sql,function(err,result){
		if(err){
			
		}else{
			console.log(result)
			res.cookie('wastename', result, { maxAge: 60 * 1000, httpOnly: true });
            req.session.waste = result;
			res.render('waste/waste',{title:'Express'})
		}
	})
})

router.get('/waste', function (req, res) {
	let waste = req.session.waste;
    // console.log(typeof userMessage);
    
    if (req.session.waste) {
        res.writeHead(200, {
				"Content-Type": "application/json"
		});
			res.write(JSON.stringify(waste));
			res.end();
    }else{
    	res.render('waste/waste', { title: 'Express' });

	}
});

router.get('/getWaste', function (req, res) {
    let sql="select * from waste";
    let mydata = [];
    db.query(sql,(err,rows)=>{
		if(err){
			res.json({err:"出错了！"})
		}
		else {
			// // console.log(rows);
			
			for(let data of rows)
			{
				// // console.log(data);
				mydata.push(data);
			}
			// // console.log(mydata);
			res.writeHead(200, {
				"Content-Type": "application/json"
			});
			res.write(JSON.stringify(mydata));
			res.end();
		};
	});
})

module.exports = router;
