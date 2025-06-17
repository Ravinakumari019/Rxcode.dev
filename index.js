
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (assets)
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')));

// Routes
app.get('/', (req, res) => {
  res.render('home', { name: "Ravina", site: "RxCodes.dev" });
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
