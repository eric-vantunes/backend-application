module.exports = ((error, request, response, next) => {
  console.log(error, request, next);
  response.sendStatus(500);
});
