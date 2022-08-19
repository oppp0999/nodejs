var app = express()
var FileStore = require('session-file-store')(session)

 app.use(session({
   secret: 'keyboard cat',
   secret: 'asadlfkj!@#!@#dfgasdg',
   resave: false, //값이 바뀌기전에는 세션 데이터가 바뀌지않음 
   saveUninitialized: true
 }))

 app.use(function (req, res, next) {
   if (!req.session.views) {
     req.session.views = {}
     store:new FileStore()//비휘발성을 위해서
   }

   // get the url pathname
   var pathname = parseurl(req).pathname

   // count the views
   req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

   next()
 })

 app.get('/foo', function (req, res, next) {
   res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
 })

 app.get('/bar', function (req, res, next) {
   res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
 app.get('/', function (req, res, next) {
   res.send('Hello session');
 }});

 app.listen(3000, function(){
    console.log('3000!');
});
