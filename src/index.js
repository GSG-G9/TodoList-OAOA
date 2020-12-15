const app = require('./app');

const port = app.get('port');

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`It's running on http://localhost:${port}`);
});
