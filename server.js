var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
    'article-one' : {
      title :  'Article One | Thejus Jain',
      heading : 'Article One',
      date : 'August 15 2017',
      content :  
                    `<p>
                        This is some content. This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.
                    </p>
                    <p>
                        This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.
                    </p>
                    <p>
                        This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.This is some content.
                    </p>`
    },
    'article-two' : {
      title :  'Article Two | Thejus Jain',
      heading : 'Article Two',
      date : 'August 20 2017',
      content :  
                    `<p>
                        This is some content for the second page.
                    </p>`
    },
    'article-three' : {
      title :  'Article Three | Thejus Jain',
      heading : 'Article Three',
      date : 'August 15 2017',
      content :  
                    `<p>
                        This is some content for the third page.
                    </p>`
    }
};


function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" ></meta>
            <link href="/ui/style.css" rel="stylesheet"/>
        </head>
        
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>   
                <h3>${heading}</h3>
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




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function(req,res) {
   res.send(createTemplate(articleTwo));
});

app.get('/article-three', function(req,res) {
   res.send(createTemplate(articleThree));
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

var counter = 0;
app.get('/counter', function(req, res){
   counter = counter + 1; 
   res.send(counter.toString());
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
