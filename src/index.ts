import express from 'express';
import hbs from 'hbs';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('./dist/public') );

app.get('/', (req, res) => {
    res.render( __dirname + '/views/home', {
        name: 'FrankkC',
        title: 'Test',
    });
  });

app.get('/generics', (req, res) => {
    res.render( __dirname + '/views/generics', {
        name: 'FrankkC',
        title: 'Test',
    });
  });
  
app.get('/elements', (req, res) => {
    res.render( __dirname + '/views/elements', {
        name: 'FrankkC',
        title: 'Test',
    });
});

app.get('*', (req, res) => {
    res.send('404 | Page not found');
  });

app.listen(port, () => {
    console.log(`Page: localhost:${port}/`);
});