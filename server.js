const express = require('express');
const router = require('./routes/index');
const app = express();

app.use('/', express.static(__dirname + '/public'));
app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

console.log(__dirname + '/public');
