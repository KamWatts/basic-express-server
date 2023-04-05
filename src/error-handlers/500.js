'use strict'

app.use((err, request, response, next) => {
  console.log(err);
  response.status(500).send('Server error');
})