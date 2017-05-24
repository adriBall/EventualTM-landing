// index.js
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.set('port', (process.env.PORT || 5000));

app.engine('.html', exphbs({
    defaultLayout: 'main',
    extname: '.html',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', '.html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

// home
app.get('/', (request, response) => response.render('home'));

// tabs
app.get('/tab1', (req, res) => res.sendFile("views/tabs_content/tab1.html", {root: __dirname }));
app.get('/tab2', (req, res) => res.sendFile("views/tabs_content/tab2.html", {root: __dirname }));
app.get('/tab3', (req, res) => res.sendFile("views/tabs_content/tab3.html", {root: __dirname }));
app.get('/tab4', (req, res) => res.sendFile("views/tabs_content/tab4.html", {root: __dirname }));
app.get('/tab5', (req, res) => res.sendFile("views/tabs_content/tab5.html", {root: __dirname }));

app.listen(app.get('port'), console.log('Node app is running on port', app.get('port')));