'use strict'

app.use((err, request, response, next) => {
  console.log(err);
  response.status(404).send('Page not found')
})