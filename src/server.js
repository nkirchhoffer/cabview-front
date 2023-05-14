const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

const app = express();
app.use(history());

app.use('/', express.static(path.join(path.join(__dirname, '../'), 'dist')));

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Listening on :${PORT}`);
});