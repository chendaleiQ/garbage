/*
 * @Author: your name
 * @Date: 2021-04-28 18:07:00
 * @LastEditTime: 2021-04-28 18:47:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lyh-project\routes\users.js
 */
var express = require('express');
var app = express();
var router = express.Router();
var db = require('../config/db')

/* GET users listing. */
// router.get('/person', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/login', function (req, res) {
    res.render('user/login', { title: 'Express' });
});
router.get('/reg', function (req, res) {
    res.render('user/reg', { title: 'Express' });
});
router.get('/person', function (req, res) {
    res.render('user/person', { title: 'Express' });
});
router.get('/updateUser', function (req, res) {
    res.render('user/updateUser', { title: 'Express' });
});
router.get('/admin', function (req, res) {
    res.render('user/admin', { title: 'Express' });
});

router.get('/adminLogin', function (req, res) {
    
    var adminname = req.query.adminname;
    var admin_password = req.query.admin_password;
    var sql = "select * from admin where adminname='" + adminname + "' and admin_password='" + admin_password + "'"
    db.query(sql, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            res.send("管理员账号或密码错误")
        } else {
            // // console.log('success');
            // // 将登录的用户保存到session中
            // res.cookie(adminname, result[0].adminname, { maxAge: 60 * 1000, httpOnly: true });
            // req.session.user = result[0];
            // // 设置是否登录为true
            // req.session.islogin = true;
            res.render('waste/selectWaste', { title: 'Express' });
        }
    })
})

router.get('/selectUser', function (req, res) {
    
    let sql="select * from users where username='"+"lyh'";
    let mydata = [];
    db.query(sql,(err,rows)=>{
		if(err){
			res.json({err:"出错了！"})
		}
		else{
			for(let data of rows)
			{
				// console.log(data);
				mydata.push(data);
			}
			// console.log(mydata);
			res.writeHead(200, {
				"Content-Type": "application/json"
			});
			res.write(JSON.stringify(mydata));
			res.end();
		};
	});
})
/**
*登录验证功能
*/
router.get('/tologin', function (req, res) {
    
    var username = req.query.username;
    var user_password = req.query.user_password;
    var sql = "select * from users where username='" + username + "' and user_password='" + user_password + "'"
    db.query(sql, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            res.send("用户名或密码错误")
        } else {
            // console.log('success');
            // 将登录的用户保存到session中
            res.cookie(username, result[0].username, { maxAge: 60 * 1000, httpOnly: true });
            req.session.user = result[0];
            // 设置是否登录为true
            req.session.islogin = true;
            res.render('user/person', { title: 'Express' });
        }
    })
})

router.get('/toupdate', function (req, res) {
    var username = req.query.username;
	var user_password = req.query.user_password;
	var user_tel = req.query.user_tel;
	var user_age = req.query.user_age;
    var user = [username, user_password, user_tel, user_age];
    // console.log(user);
    
    var sql = 'update users set username="'+username+'",user_password="'+user_password+'",user_tel="'+user_tel+'",user_age="'+user_age+'" where username="'+username+'"';
    db.query(sql,user,function(err,result){
        if (err) throw err;
        // console.log("!!!",result)
            res.render('user/login', { title: 'Express' });
    })
})

// 退出登录
router.get("/logout",function(req,res,next){
    req.session.isLogin = false;
    req.session.user = "";
    res.send("<script>alert('退出成功');location.href='login'</script>");

});

router.get('/register', function (req, res) { 
	var username = req.query.username;
    var user_password = req.query.user_password;
    var user_age = req.query.user_age;
     var user_tel = req.query.user_tel;
    
	var user = [username, user_password,user_age,user_tel];
    var sql = 'insert into users(username,user_password,user_age,user_tel) values(?,?,?,?)';
    db.query(sql, user, function (err, result) {
        if (err) throw err;
        // console.log("!!!",result)
        res.render('user/login', { title: 'Express' });
    })
})
router.use((req, res, next) => {
    if (req.cookies['username'] == req.session['username']) {
        next('route');
    } else {
        end();
    }
})

router.get('/checkLogin', function (req, res) {
    let userMessage = req.session.user;
    // console.log(typeof userMessage);
    
    if (req.session.user) {
        res.writeHead(200, {
				"Content-Type": "application/json"
		});
			res.write(JSON.stringify(userMessage));
			res.end();
    } 
})

module.exports = router;