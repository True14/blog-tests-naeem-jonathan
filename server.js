const express = require('express');

const app = express();

const blogsRouter = require('./blogsRouter');

app.use(express.static('public'));

// app.get('/', (req,res) => {
//   res.sendFile(__dirname + '/views/index.html');
// });

app.use('/blog-posts', blogsRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
