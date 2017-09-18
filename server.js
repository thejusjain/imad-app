var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'thejusjain101',
    database: 'thejusjain101',
    host: 'db.imad.hasure-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
}

var app = express();
app.use(morgan('combined'));

var Pool = new Pool(config);
app.get('/test-db', function(){
   //make a select request and displays the results
   pool.query('SELECT * FROM test', function (err, result){
       if(err){
           res.status(500).send(err.toString());
       }
       else{
           res.send(JSON.stringify(result));
       }
   })
});

var counter = 0;
app.get('/counter', function (req, res){
   counter = counter + 1; 
   res.send(counter.toString());
});

var articles ={
    'article-one' : {
      title: 'Thejus Jain | article one',
      heading: 'Hi this is article one',
      date: 'September 13, 2017',
      content: `
        <p>
            This is the article one     This is the article one     This is the article one     This is the article one     This is the article one     This is the article one     This is the article one     This is the article one     This is the article one     This is the article one     This is the article one     This is the article one     This is the article one     This is the article one     This is the article one 
        </p>`
    },
    'article-two' : {
      title: 'Thejus Jain | article two',
      heading: 'Hi this is article two',
      date: 'August 13, 2017',
      content: `
        <p>
            This is the article two
        </p>`
    },
    'article-three' : {
      title: 'Thejus Jain | article three',
      heading: 'Hi this is article three',
      date: 'September 30, 2017',
      content: `
        <p>
            This is the content for article three.
        </p>`
    }
    };

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var date = data.date;
    
    var htmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet"/>
            </head>
            <body>
                <div class="container">
                    <h1>${heading}</h1>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                        
                    </div>
                </div>
            </body>
        </html>
    `;
    
    return htmlTemplate;
}

var names = [];
app.get('/submit-name', function (req, res){
    //get the name to the function
    var name = req.query.name; //parms is used with url and query is used with query parameter
    
    names.push(name);
    res.send(JSON.stringify(names));
});


app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});





// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
