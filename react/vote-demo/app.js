let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let routes = require('./routes/route_app');
let fs = require('fs');
let app = express();
let ejs = require('ejs');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.engine('.html', ejs.__express);
app.set('view engine', 'html');// app.set('view engine', 'ejs');


//设置跨域访问
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//获得get请求，第一个参数是匹配内容，第二个参数是匹配成功后执行的回调函数
app.get('/vote/index', routes.index);   
app.get(/\/vote\/detail/, routes.detail);  
app.get('/vote/register', routes.register);  
app.get('/vote/search', routes.search); 
app.get('/vote/rule', routes.rule);
app.get('/', routes.manage); 
app.get('/users', routes.manage); 
app.get('/rank', routes.manage); 
app.get(/\/user\/\d*/, routes.manage); 

app.get('/vote/index/data', routes.index_data);
app.get(/\/vote\/index\/poll/, routes.index_poll);
app.get(/\/vote\/index\/search/, routes.index_search);
app.get(/\/vote\/all\/detail\/data/, routes.detail_data);

app.post(/\/vote\/register\/data/, routes.register_data);
app.post('/vote/index/info', routes.index_info);

app.post('/manage/text', routes.manage_test);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

let changeNum = 0;
fs.watch('public/stylesheets/', {
    persistent: true, // 设为false时，不会阻塞进程。
    recursive: false
}, function(event, filename) {
  console.log(changeNum)
  if (changeNum%2) {
    let cssStr = fs.readFileSync("public/stylesheets/bs.css","utf-8");
    cssStr = cssStr.replace(/(\.\.\/\.\.\/public\/images)/g, function(result, r1) {
      return '../images'
    })
    fs.writeFile("public/stylesheets/bs.css", cssStr, function(err){
        if(err) {
            console.log("fail " + err)
        }
        else {
            console.log("write success!");
        }
    });
  }
  changeNum++;
});

module.exports = app;
