// index.js
const path = require('path')  
const express = require('express')  
const exphbs = require('express-handlebars')

const app = express()
app.set('port', (process.env.PORT || 5000));

app.engine('.hbs', exphbs({  
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')  
app.set('views', path.join(__dirname, 'views'))  
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {  
  response.render('home')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});